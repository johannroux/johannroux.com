import Link from "next/link";
import { NavLink } from "@/components/ui/NavLink";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className={cn(
            "group inline-flex items-center gap-2 rounded-full px-3 py-1.5",
            "transition-colors hover:bg-surface",
          )}
        >
          <span className="text-sm font-semibold tracking-tight">
            Johann Roux
          </span>
          <span className="hidden text-sm text-muted sm:inline">
            Engineering Manager · Full Stack
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <Link
            href="/contact"
            className={cn(
              "rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium shadow-soft",
              "transition-colors motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out",
              "hover:bg-surface/80 motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]",
              "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
            )}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

