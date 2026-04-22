import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type CompanyChipProps = {
  name: string;
  logoSrc: string;
  href?: string;
  className?: string;
};

export function CompanyChip(
  { name, logoSrc, href, className }: Readonly<CompanyChipProps>,
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

  if (href) {
    return (
      <Link href={href} className={classNames} target="_blank" rel="noreferrer">
        <Image
          src={logoSrc}
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
        {name}
      </Link>
    );
  }

  return (
    <span className={classNames}>
      <Image
        src={logoSrc}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
      />
      {name}
    </span>
  );
}

