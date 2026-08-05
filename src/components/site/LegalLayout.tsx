import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";

interface LegalLayoutProps {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
  markdown: string;
}

const INTERNAL = /^(https?:\/\/(www\.)?dripaidata\.com)?(\/(privacy|terms|data-deletion)\/?)$/;

const LegalLayout = ({ title, seoTitle, description, path, markdown }: LegalLayoutProps) => {
  const [rawHeader, ...restParts] = markdown.split(/\n---\n/);
  const body = restParts.join("\n---\n");
  const metaLines = rawHeader
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("**") && l.endsWith("**"))
    .map((l) => l.replace(/\*\*/g, ""));

  return (
    <div className="min-h-screen bg-background">
      <Seo title={seoTitle} description={description} path={path} noindex />
      <Navbar />
      <main className="container-wide py-28 md:py-40">
        <div className="mx-auto w-full max-w-[720px]">
          <p className="eyebrow text-cyan">Legal</p>
          <h1 className="display-serif mt-4 text-[2.25rem] text-foreground md:text-[3rem]">{title}</h1>
          {metaLines.length > 0 && (
            <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              {metaLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          )}
          <div className="mt-12 text-base leading-[1.7] text-muted-foreground">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h2 className="mt-14 text-xl font-semibold tracking-tight text-foreground">{children}</h2>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-14 text-xl font-semibold tracking-tight text-foreground">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 text-base font-semibold tracking-tight text-foreground">{children}</h3>
                ),
                p: ({ children }) => <p className="mt-5">{children}</p>,
                ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-5">{children}</ul>,
                ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-5">{children}</ol>,
                li: ({ children }) => <li className="leading-[1.7]">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                hr: () => <hr className="my-12 border-border" />,
                a: ({ href, children }) => {
                  const match = href ? INTERNAL.exec(href) : null;
                  if (match) {
                    return (
                      <Link
                        to={match[3].replace(/\/$/, "")}
                        className="text-cyan underline-offset-4 hover:underline"
                      >
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a
                      href={href}
                      className="text-cyan underline-offset-4 hover:underline"
                      {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {children}
                    </a>
                  );
                },
                table: ({ children }) => (
                  <div className="mt-6 w-full overflow-x-auto">
                    <table className="w-full min-w-[420px] border-collapse rounded-sm border border-border text-sm">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => <thead className="bg-cyan-soft">{children}</thead>,
                th: ({ children }) => (
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                    {children}
                  </th>
                ),
                td: ({ children }) => <td className="border border-border px-4 py-3 align-top">{children}</td>,
              }}
            >
              {body}
            </ReactMarkdown>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
