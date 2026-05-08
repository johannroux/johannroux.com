import * as React from "react";
import fs from "node:fs";
import path from "node:path";
import { cn } from "@/lib/cn";

const RAW_SVG = fs.readFileSync(
    path.join(process.cwd(), "public/icons/companies/ada.svg"),
    "utf8",
);

// Make the dark-navy paths theme-aware: in dark mode, --ada-navy is set to
// white in globals.css. We rewrite the presentation attribute to a `style`
// declaration because `var()` only resolves inside CSS, not in SVG attribute
// values (notably in Safari).
const SVG_MARKUP = RAW_SVG.replace(
    /fill="#283753"/g,
    'style="fill: var(--ada-navy, #283753)"',
);

type AdaLogoProps = Readonly<
    Omit<
        React.HTMLAttributes<HTMLSpanElement>,
        "children" | "dangerouslySetInnerHTML"
    >
>;

export function AdaLogo({ className, ...props }: AdaLogoProps) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                "inline-flex h-5 w-5 items-center justify-center [&>svg]:block [&>svg]:h-full [&>svg]:w-full",
                className,
            )}
            dangerouslySetInnerHTML={{ __html: SVG_MARKUP }}
            {...props}
        />
    );
}
