import * as React from "react";
import fs from "node:fs";
import path from "node:path";
import { cn } from "@/lib/cn";

const RAW_SVG = fs.readFileSync(
    path.join(process.cwd(), "public/icons/education/grenoble-inp.svg"),
    "utf8",
);

// Make the darkest paths (the lettering) theme-aware: in dark mode, --inp-dark
// is set to white in globals.css. We rewrite the presentation attribute to a
// `style` declaration because `var()` only resolves inside CSS, not in SVG
// attribute values (notably in Safari). #18161b and #19171c are the same color
// modulo design-tool rounding, so we collapse them under a single variable.
const SVG_MARKUP = RAW_SVG.replace(
    /fill="#18161b"/g,
    'style="fill: var(--inp-dark, #18161b)"',
).replace(/fill="#19171c"/g, 'style="fill: var(--inp-dark, #18161b)"');

type GrenobleInpLogoProps = Readonly<
    Omit<
        React.HTMLAttributes<HTMLSpanElement>,
        "children" | "dangerouslySetInnerHTML"
    >
>;

export function GrenobleInpLogo({ className, ...props }: GrenobleInpLogoProps) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                "inline-flex size-5 items-center justify-center [&>svg]:block [&>svg]:h-full [&>svg]:w-full",
                className,
            )}
            dangerouslySetInnerHTML={{ __html: SVG_MARKUP }}
            {...props}
        />
    );
}
