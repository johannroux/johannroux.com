import Link from "next/link";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/johannroux/" },
  { label: "GitHub", href: "https://github.com/johannroux" },
  { label: "Email", href: "mailto:hello@johannroux.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="text-sm text-muted">
          <div>
            <span className="font-medium text-foreground">Johann Roux</span>
            <span className="mx-2 text-border">·</span>
            <span>Berlin</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/80 underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-[color:var(--color-accent)]"
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

