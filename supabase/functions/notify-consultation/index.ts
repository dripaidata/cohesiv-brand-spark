import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const NOTIFY_TO = 'danny@dripaidata.com'

const BodySchema = z.object({
  submissionId: z.string().max(100).optional(),
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(200),
  title: z.string().trim().max(200).optional().nullable(),
  challenges: z.string().trim().min(1).max(5000),
  services: z.array(z.string().max(100)).max(20).optional(),
  offers: z.array(z.string().max(100)).max(20).optional(),
})

// Simple in-memory rate limit per instance
const hits = new Map<string, number[]>()
const LIMIT = 5
const WINDOW_MS = 60_000

function rateLimited(ip: string) {
  const now = Date.now()
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  list.push(now)
  hits.set(ip, list)
  return list.length > LIMIT
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const json = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    if (rateLimited(ip)) return json({ error: 'Too many requests' }, 429)

    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return json({ error: parsed.error.flatten().fieldErrors }, 400)
    }
    const d = parsed.data

    const result = await sendTemplateEmail('consultation-request', NOTIFY_TO, {
      idempotencyKey: `consultation-request-${d.submissionId ?? crypto.randomUUID()}`,
      replyTo: d.email,
      templateData: {
        firstName: d.first_name,
        lastName: d.last_name,
        email: d.email,
        company: d.company,
        title: d.title ?? undefined,
        services: d.services ?? [],
        offers: d.offers ?? [],
        challenges: d.challenges,
        submittedAt: new Date().toLocaleString('en-US', {
          timeZone: 'America/New_York',
          dateStyle: 'medium',
          timeStyle: 'short',
        }) + ' ET',
      },
    })

    return json({ ok: true, sent: result.sent })
  } catch (error) {
    console.error('notify-consultation failed', error)
    return json({ error: 'Failed to send notification' }, 500)
  }
})
