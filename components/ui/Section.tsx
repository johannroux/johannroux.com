import { cn } from "@/lib/cn";

export function Section({
  eyebrow,
  title,
  children,
  className,
}: Readonly<{
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

