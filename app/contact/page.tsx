import Link from "next/link";
import {getPage} from "@/lib/content";
import {renderMdx} from "@/lib/mdx";
import {Button} from "@/components/ui/Button";
import {PhotoBanner} from "@/components/PhotoBanner";
import {sitePhotos} from "@/lib/photos";

export const dynamic = "force-static";

export default async function ContactPage() {
  const page = await getPage("contact");
  const content = await renderMdx(page.content);

  return (
    <main>
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Contact
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.frontmatter.title}
          </h1>
          {page.frontmatter.description ? (
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {page.frontmatter.description}
            </p>
          ) : null}
        </div>

        <PhotoBanner
          photo={sitePhotos.fakarava3}
          className="mt-8 w-full"
          priority
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="text-sm font-semibold tracking-tight">Email</div>
            <p className="mt-2 text-sm text-muted">
              The fastest way to reach me.
            </p>
            <div className="mt-5">
              <Button
                  href="mailto:hello@johannroux.com"
                  external
                  variant="primary"
              >
                hello@johannroux.com
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="text-sm font-semibold tracking-tight">Links</div>
            <p className="mt-2 text-sm text-muted">Find more context here.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://github.com/johannroux"
                className="text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </Link>
              <Link
                href="https://www.linkedin.com/in/johannroux/"
                className="text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </Link>
            </div>
          </div>
        </div>

        <article className="prose mt-10 max-w-none">{content}</article>
      </div>
    </main>
  );
}
