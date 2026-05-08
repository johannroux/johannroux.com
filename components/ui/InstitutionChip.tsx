import Link from "next/link";
import { cn } from "@/lib/cn";
import React from "react";

import { CHIP_LOGO_SLOT_CLASS, CHIP_ROOT_CLASS, } from "@/components/ui/chip-shared";

type InstitutionChipProps = {
    name: string;
    href?: string;
    className?: string;
    children: React.ReactNode;
};

export function InstitutionChip({
                                    name,
                                    href,
                                    className,
                                    children,
                                }: Readonly<InstitutionChipProps>) {
    const classNames = cn(
        "inline-flex select-none items-center gap-2",
        CHIP_ROOT_CLASS,
        href
            ? cn(
                "group",
                "cursor-pointer !no-underline",
                "transition-colors motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out",
                "hover:border-border/90 hover:bg-surface/85",
                "motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_1px_0_rgba(17,17,18,0.05),0_14px_38px_rgba(17,17,18,0.08)]",
                "motion-safe:active:translate-y-0 motion-safe:active:shadow-[0_1px_0_rgba(17,17,18,0.05),0_10px_28px_rgba(17,17,18,0.06)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )
            : null,
        className,
    );

    const logo = (
        <span aria-hidden="true" className={CHIP_LOGO_SLOT_CLASS}>
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
