import Link from "next/link";
import {cn} from "@/lib/cn";

type InstitutionChipProps = {
    name: string;
    href?: string;
    className?: string;
    children: React.ReactNode;
};

export function InstitutionChip(
    {name, href, className, children}: Readonly<InstitutionChipProps>,
) {
    const classNames = cn(
        "inline-flex align-middle items-center gap-2.5 rounded-full border border-border bg-surface px-5 py-2.5",
        "text-base font-semibold tracking-tight shadow-soft",
        href
            ? cn(
                "cursor-pointer !no-underline",
                "transition-colors motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out",
                "motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]",
                "hover:border-border/80 hover:bg-surface/80",
                "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )
            : null,
        className,
    );

    const logo = (
        <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center text-foreground/90"
        >
      {children}
    </span>
    );

    if (href) {
        return (
            <Link href={href} className={classNames} target="_blank" rel="noreferrer">
                {logo}
                {name}
            </Link>
        );
    }

    return (
        <span className={classNames}>
      {logo}
            {name}
    </span>
    );
}
