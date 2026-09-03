/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  title?: string
  services?: string[]
  offers?: string[]
  challenges?: string
  submittedAt?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Section style={row}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={valueStyle}>{value}</Text>
    </Section>
  ) : null

const Email = ({
  firstName,
  lastName,
  email,
  company,
  title,
  services,
  offers,
  challenges,
  submittedAt,
}: Props) => {
  const name = [firstName, lastName].filter(Boolean).join(' ') || 'Someone'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{`New consultation request from ${name}${company ? ` at ${company}` : ''}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>DRIP AI &amp; DATA</Text>
          <Heading style={h1}>New consultation request</Heading>
          <Hr style={hr} />
          <Row label="Name" value={name} />
          <Row label="Work email" value={email} />
          <Row label="Company" value={company} />
          <Row label="Job title" value={title} />
          <Row label="Services of interest" value={services?.length ? services.join(', ') : undefined} />
          <Row label="Offers of interest" value={offers?.length ? offers.join(', ') : undefined} />
          <Hr style={hr} />
          <Text style={labelStyle}>Challenges</Text>
          <Text style={body}>{challenges || 'No details provided.'}</Text>
          {submittedAt ? <Text style={footer}>Submitted {submittedAt}</Text> : null}
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New consultation request from ${[data?.firstName, data?.lastName].filter(Boolean).join(' ') || 'a visitor'}`,
  displayName: 'Consultation request',
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    company: 'Northeast Capital',
    title: 'VP Operations',
    services: ['Data & Analytics'],
    offers: ['AI Enablement Workshop'],
    challenges: 'Our reporting takes weeks and lives in spreadsheets.',
    submittedAt: 'Sep 3, 2026, 2:49 PM ET',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '600px' }
const eyebrow = {
  fontFamily: 'ui-monospace, Menlo, monospace',
  fontSize: '11px',
  letterSpacing: '0.18em',
  color: '#00A9C7',
  margin: '0 0 8px',
}
const h1 = { fontSize: '26px', color: '#0B1B2B', margin: '0 0 8px', fontWeight: 600 }
const hr = { borderColor: '#e6eaee', margin: '20px 0' }
const row = { margin: '0 0 12px' }
const labelStyle = {
  fontFamily: 'ui-monospace, Menlo, monospace',
  fontSize: '10px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: '#6b7785',
  margin: '0 0 2px',
}
const valueStyle = { fontSize: '15px', color: '#0B1B2B', margin: 0 }
const body = { fontSize: '15px', lineHeight: '24px', color: '#0B1B2B', margin: '4px 0 0', whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#8a94a0', marginTop: '24px' }
