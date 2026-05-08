import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type CompanyChipProps = {
  name: string;
    logoSrc?: string;
  href?: string;
  className?: string;
    /**
     * When true, render the logo as a CSS mask tinted with the current text
     * color. Useful for monochrome SVG marks that should adapt to light/dark
     * mode (e.g., black on light, white on dark). Ignored if `logo` is provided.
     */
    monochrome?: boolean;
    /**
     * Custom React node to render as the logo. When provided, this replaces
     * the default `<Image>` (or mask) rendering and is used as-is. Useful for
     * inline SVG components that need to react to CSS (e.g., theme-adaptive
     * fills via CSS variables or `currentColor`).
     *
     * Equivalent to passing the same node as `children` (children take
     * precedence when both are set). Children are useful in MDX, where JSX
     * expressions in attribute values don't get resolved through the
     * components map.
     */
    logo?: React.ReactNode;
    children?: React.ReactNode;
};

export function CompanyChip({
                                name,
                                logoSrc,
                                href,
                                className,
                                monochrome = false,
                                logo,
                                children,
                            }: Readonly<CompanyChipProps>) {
  const classNames = cn(
    "inline-flex align-middle items-center gap-2.5 rounded-full border border-border bg-surface px-5 py-2.5",
    "text-base font-semibold tracking-tight shadow-soft",
      "select-none",
      "transition-colors motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out",
      "motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]",
      "hover:border-border/80 hover:bg-surface/80",
      "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
      href
          ? cn(
              "cursor-pointer !no-underline",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )
      : null,
    className,
  );

    let logoNode: React.ReactNode = null;
    if (children) {
        logoNode = children;
    } else if (logo) {
        logoNode = logo;
    } else if (logoSrc) {
        logoNode = monochrome ? (
            <span
                aria-hidden="true"
                className="inline-block h-5 w-5 bg-foreground"
                style={{
                    WebkitMaskImage: `url(${logoSrc})`,
                    maskImage: `url(${logoSrc})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                }}
            />
        ) : (
            <Image
                src={logoSrc}
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
            />
        );
    }

    if (href) {
        return (
            <Link href={href} className={classNames} target="_blank" rel="noreferrer">
                {logoNode}
        {name}
      </Link>
    );
  }

  return (
    <span className={classNames}>
      {logoNode}
      {name}
    </span>
  );
}
