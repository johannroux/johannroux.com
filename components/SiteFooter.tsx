import Link from "next/link";
import type React from "react";

type SocialLabel = "LinkedIn" | "GitHub" | "Email";
type SocialLink = { label: SocialLabel; href: string };

const links: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/johannroux/" },
  { label: "GitHub", href: "https://github.com/johannroux" },
  { label: "Email", href: "mailto:hello@johannroux.com" },
];

function LinkedInIcon(props: Readonly<React.SVGProps<SVGSVGElement>>) {
    return (
        <svg viewBox="0 0 50 50" fill="currentColor" {...props}>
            <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
        </svg>
    );
}

function GitHubIcon(props: Readonly<React.SVGProps<SVGSVGElement>>) {
    return (
        <svg viewBox="0 0 50 50" fill="currentColor" {...props}>
            <path
                d="M24.99166666666667 2.6750000000000003a22.887500000000003 22.887500000000003 0 0 0 -7.233333333333333 44.608333333333334c1.1416666666666668 0.19791666666666669 1.5041666666666667 -0.4729166666666667 1.5041666666666667 -1.0770833333333334 0 -0.5479166666666667 0.0125 -2.0645833333333337 0 -3.979166666666667 -6.36875 1.3791666666666669 -7.6833333333333345 -3.0166666666666666 -7.6833333333333345 -3.0166666666666666a6.05625 6.05625 0 0 0 -2.541666666666667 -3.347916666666667c-2.0770833333333334 -1.4208333333333336 0.15625 -1.3937500000000003 0.15625 -1.3937500000000003a4.80625 4.80625 0 0 1 3.5062500000000005 2.35625 4.875 4.875 0 0 0 6.660416666666667 1.9041666666666668 4.875 4.875 0 0 1 1.4520833333333334 -3.0500000000000003c-5.081250000000001 -0.58125 -10.425 -2.541666666666667 -10.425 -11.316666666666668a8.850000000000001 8.850000000000001 0 0 1 2.3583333333333334 -6.141666666666667 8.2125 8.2125 0 0 1 0.22291666666666668 -6.05625s1.9250000000000003 -0.6145833333333334 6.291666666666667 2.35a21.670833333333334 21.670833333333334 0 0 1 11.464583333333334 0c4.379166666666666 -2.9625 6.2875 -2.35 6.2875 -2.35 0.8437500000000001 1.916666666666667 0.925 4.083333333333334 0.22708333333333336 6.05625a8.839583333333335 8.839583333333335 0 0 1 2.3541666666666665 6.145833333333334c0 8.797916666666667 -5.352083333333334 10.729166666666668 -10.450000000000001 11.291666666666668a5.425000000000001 5.425000000000001 0 0 1 1.5666666666666669 4.220833333333333v6.335416666666667c0 0.6125 0.36875 1.2895833333333333 1.53125 1.0666666666666669a22.887500000000003 22.887500000000003 0 0 0 -7.250000000000001 -44.60625Z" />
        </svg>
    );
}

function MailIcon(props: Readonly<React.SVGProps<SVGSVGElement>>) {
    return (
        <svg viewBox="0 0 50 50" fill="currentColor" {...props}>
            <path
                d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z" />
        </svg>
    );
}

type SocialIcon = (
    props: Readonly<React.SVGProps<SVGSVGElement>>,
) => React.ReactElement;

function iconFor(label: SocialLabel): SocialIcon {
    switch (label) {
        case "LinkedIn":
            return LinkedInIcon;
        case "GitHub":
            return GitHubIcon;
        case "Email":
            return MailIcon;
        default: {
            return label;
        }
    }
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
        <div
            className="mx-auto flex max-w-5xl flex-row flex-wrap items-center justify-between gap-4 px-5 py-10 sm:px-8">
        <div className="text-sm text-muted">
          <div>
            <span className="font-medium text-foreground">Johann Roux</span>
            <span className="mx-2 text-border">·</span>
            <span>Berlin</span>
          </div>
        </div>
            <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2">
                {links.map((l) => {
                    const Icon = iconFor(l.label);
                    return (
                        <Link
                            key={l.label}
                            href={l.href}
                            aria-label={l.label}
                            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                            target={l.href.startsWith("http") ? "_blank" : undefined}
                            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                <span
                    className="grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-background/40 shadow-soft transition-colors group-hover:border-border">
                  <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                      focusable="false"
                  />
                </span>
                            <span
                                aria-hidden="true"
                                className="hidden underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-(--color-accent) sm:inline"
                            >
                  {l.label}
                </span>
                            <span className="sr-only">{l.label}</span>
                        </Link>
                    );
                })}
        </div>
      </div>
    </footer>
  );
}
