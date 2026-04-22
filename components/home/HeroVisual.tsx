"use client";

import { cn } from "@/lib/cn";
import { sitePhotos } from "@/lib/photos";
import Link from "next/link";
import * as React from "react";

const NATURE_BACKDROPS = [
  sitePhotos.greenland.src,
  sitePhotos.fakarava2.src,
  sitePhotos.marquesas.src,
];

function BackdropBlob({
  className,
  url,
}: Readonly<{
  className: string;
  url: string;
}>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-[32px] border border-border/60 shadow-soft",
        "bg-cover bg-center",
        "blur-[0.2px]",
        className,
      )}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}

export function HeroVisual({
  className,
}: Readonly<{
  className?: string;
}>) {
  const [imgOk, setImgOk] = React.useState<boolean | null>(null);
  const src = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.jpg`;

  React.useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch(src, { method: "HEAD" });
        if (!cancelled) setImgOk(res.ok);
      } catch {
        if (!cancelled) setImgOk(false);
      }
    }

    check();
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div
      className={cn(
        "relative isolate",
        "rounded-[28px] border border-border bg-surface/60 shadow-soft",
        "p-4 sm:p-5",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]"
      >
        <BackdropBlob
          url={NATURE_BACKDROPS[0]}
          className="-left-12 -top-10 h-44 w-56 rotate-[-8deg] opacity-55 sm:h-52 sm:w-72"
        />
        <BackdropBlob
          url={NATURE_BACKDROPS[1]}
          className="-right-14 top-10 h-40 w-56 rotate-[12deg] opacity-45 sm:h-48 sm:w-72"
        />
        <BackdropBlob
          url={NATURE_BACKDROPS[2]}
          className="left-10 -bottom-12 h-40 w-64 rotate-[-14deg] opacity-40 sm:left-14 sm:h-48 sm:w-[22rem]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent_65%)]" />
        <div className="absolute inset-0 bg-background/55 backdrop-blur-[10px]" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-semibold tracking-tight">Johann Roux</div>
          <Link
            href="/about"
            className="text-xs font-medium text-muted underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-[color:var(--color-accent)]"
          >
            About →
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="relative h-[92px] w-[92px] sm:h-[110px] sm:w-[110px]">
            {imgOk ? (
              <img
                src={src}
                alt="Portrait of Johann Roux"
                className={cn(
                  "h-full w-full object-cover",
                  "rounded-[26px]",
                  "ring-1 ring-border/70",
                  "shadow-[0_18px_60px_rgba(0,0,0,0.22)]",
                )}
                loading="eager"
                decoding="async"
              />
            ) : (
              <div
                aria-hidden="true"
                className={cn(
                  "h-full w-full rounded-[26px] ring-1 ring-border/70",
                  "bg-[radial-gradient(140%_110%_at_30%_20%,color-mix(in_oklab,var(--color-accent)_45%,transparent),transparent_55%),radial-gradient(120%_120%_at_70%_70%,color-mix(in_oklab,var(--color-accent2)_40%,transparent),transparent_60%)]",
                )}
              />
            )}

            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute -inset-3 -z-10",
                "rounded-[30px]",
                "bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_28%,transparent),transparent)]",
                "blur-xl opacity-70",
              )}
            />
          </div>

          <div>
            <div className="text-sm text-muted">
              Based in Berlin. I build reliable backends and lead teams with
              strong quality bars.
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Backend", "Leadership", "Product mindset"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-xs font-medium shadow-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

