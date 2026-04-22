import {cn} from "@/lib/cn";

export function Callout({
  title,
  children,
  className,
}: Readonly<{
  title: string;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-surface px-5 py-4 shadow-soft",
        className,
      )}
    >
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <div className="mt-1 text-sm text-muted">{children}</div>
    </div>
  );
}
