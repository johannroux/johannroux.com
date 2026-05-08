import * as React from "react";
import fs from "node:fs";
import path from "node:path";
import { cn } from "@/lib/cn";

const RAW_SVG = fs.readFileSync(
    path.join(process.cwd(), "public/icons/education/kth.svg"),
    "utf8",
);

// Make the dark-navy paths theme-aware: in dark mode, --kth-navy is set to
// white in globals.css. The KTH SVG already uses an inline `<style>` block,
// where CSS `var()` resolves natively.
const SVG_MARKUP = RAW_SVG.replaceAll(
    '#000061',
    "var(--kth-navy, #000061)",
);

type KthLogoProps = Readonly<
    Omit<
        React.HTMLAttributes<HTMLSpanElement>,
        "children" | "dangerouslySetInnerHTML"
    >
>;

export function KthLogo({ className, ...props }: KthLogoProps) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                "inline-flex h-8 w-8 items-center justify-center [&>svg]:block [&>svg]:h-full [&>svg]:w-full",
                className,
            )}
            dangerouslySetInnerHTML={{ __html: SVG_MARKUP }}
            {...props}
        />
    );
}
