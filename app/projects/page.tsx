import {getPage} from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import {Card, CardBody} from "@/components/ui/Card";
import {cn} from "@/lib/cn";
import {KhonsuLogo} from "@/components/icons/KhonsuLogo";
import {FitPrimersLogo} from "@/components/icons/FitPrimersLogo";
import {PhotoBanner} from "@/components/PhotoBanner";
import {sitePhotos} from "@/lib/photos";

export const dynamic = "force-static";

export default async function ProjectsPage() {
  const page = await getPage("projects");

  return (
    <main>
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Projects
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.frontmatter.title}
          </h1>
          {page.frontmatter.description ? (
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {page.frontmatter.description}
            </p>
          ) : null}
        </div>

        <PhotoBanner
          photo={sitePhotos.marquesas}
          className="mt-8 w-full"
          priority
        />

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card className="relative overflow-hidden">
            <CardBody>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold tracking-tight">
                      FitPrimers{" "}
                    <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      in progress
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    A fitness program companion focused on clarity, consistency,
                    and a backend that can grow with the product.
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="grid h-16 w-16 shrink-0 aspect-square place-items-center sm:h-20 sm:w-20"
                >
                  <FitPrimersLogo
                    className="h-14 w-14 sm:h-16 sm:w-16"
                    title=""
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Product iteration", "Mobile-first", "Reliable backend"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-xs font-medium shadow-soft"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href="https://www.fitprimers.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
                >
                  fitprimers.com →
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.eu.primers.fitprimers"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
                >
                  Open →
                </Link>
              </div>

              <div
                  className={cn("relative mt-7 h-[240px] w-full", "sm:h-[280px]")}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-10 top-6 h-44 w-44 rounded-full bg-[color:var(--color-accent)]/10 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 bottom-2 h-52 w-52 rounded-full bg-[color:var(--color-accent)]/10 blur-3xl"
                />

                <div className="absolute left-[10%] top-7 w-[190px] -rotate-[10deg] sm:left-[12%] sm:top-8 sm:w-[220px]">
                  <div className="rounded-[28px] border border-border/70 bg-background/70 p-2 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                    <Image
                      src="/fitprimers/1.png"
                      alt="FitPrimers exercise screen"
                      width={900}
                      height={1200}
                      className="h-auto w-full rounded-[22px] object-cover"
                      sizes="(min-width: 640px) 220px, 190px"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="absolute right-[8%] top-10 w-[200px] rotate-[8deg] sm:right-[10%] sm:top-11 sm:w-[235px]">
                  <div className="rounded-[28px] border border-border/70 bg-background/70 p-2 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                    <Image
                      src="/fitprimers/2.png"
                      alt="FitPrimers program screen"
                      width={900}
                      height={1200}
                      className="h-auto w-full rounded-[22px] object-cover"
                      sizes="(min-width: 640px) 235px, 200px"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="relative overflow-hidden">
            <CardBody>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold tracking-tight">
                      Khonsu Development{" "}
                    <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      since 2015
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Educational apps that turn curiosity into a treasure trove
                    of information—designed for deep dives, with quizzes to test
                    what you’ve learned.
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="grid h-14 w-14 shrink-0 aspect-square place-items-center"
                >
                    <KhonsuLogo
                        className="h-10 w-10"
                        title=""
                        aria-hidden="true"
                    />
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                {[
                  {
                    name: "World of Alphabets",
                    href: "https://play.google.com/store/apps/details?id=eu.khonsu.alphabets",
                    meta: "100K+ downloads",
                    subtext: "Learn writing systems from all around the world.",
                    iconSrc: "/icons/khonsu/alphabets.png",
                    iconBg: "#4EC3F7",
                  },
                  {
                    name: "World of Dinosaurs",
                    href: "https://play.google.com/store/apps/details?id=eu.khonsu.dinosaurs",
                    meta: "Educational deep dives",
                      subtext:
                          "Explore species, eras, and facts—then test yourself.",
                    iconSrc: "/icons/khonsu/dinosaurs.png",
                    iconBg: "#C0CA33",
                  },
                  {
                    name: "Freestyle Rap (collab)",
                    href: "https://play.google.com/store/apps/details?id=com.lyricspiration.freestyle",
                    meta: "With Lyricspiration",
                      subtext:
                          "Practice freestyle with prompts, beats, and wordplay.",
                    iconSrc: "/icons/khonsu/freestyle.png",
                    iconBg: "#FFB200",
                  },
                ].map((app) => (
                  <Link
                    key={app.name}
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "group rounded-[16px] border border-border/70 bg-surface/70 px-5 py-4 shadow-soft",
                      "transition-colors hover:border-border",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div
                          aria-hidden="true"
                          className="mt-0.5 grid h-14 w-14 shrink-0 aspect-square place-items-center rounded-[18px] border border-border/60 shadow-soft"
                          style={{ backgroundColor: app.iconBg }}
                        >
                          <img
                            src={app.iconSrc}
                            alt=""
                            className="h-12 w-12 rounded-[16px] object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div>
                          <div className="text-base font-semibold tracking-tight">
                            {app.name}
                          </div>
                          <div className="mt-1 text-sm text-muted">
                            {app.subtext}
                          </div>
                          <div className="mt-0.5 text-xs text-muted">
                            {app.meta}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 text-xs font-medium text-muted underline decoration-transparent underline-offset-4 transition-colors group-hover:text-foreground/85 group-hover:decoration-[color:var(--color-accent)]">
                      Open →
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="https://khonsu.eu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
                >
                  khonsu.eu →
                </Link>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="mt-10">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Previously
          </div>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              <Link
                  href="/experience"
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
              >
                  Teams and products I’ve helped ship
              </Link>
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              {
                name: "Ada Health",
                href: "https://ada.com/",
                logoSrc: "/icons/companies/ada.png",
              },
              {
                name: "BCG X",
                href: "https://www.bcg.com/x/",
                logoSrc: "/icons/companies/bcg-dv.png",
              },
              {
                name: "OpenSC",
                href: "https://opensc.org/",
                logoSrc: "/icons/companies/opensc.png",
              },
              {
                name: "LadenZeile",
                href: "https://www.linkedin.com/company/ladenzeile-gmbh/about/",
                logoSrc: "/icons/companies/ladenzeile.png",
              },
            ].map((c) => (
              <Link
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold tracking-tight shadow-soft",
                  "transition-colors motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out",
                  "motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]",
                  "hover:border-border/80 hover:bg-surface/80",
                  "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
                )}
              >
                <Image
                  src={c.logoSrc}
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
                {c.name}
              </Link>
            ))}
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            I like high standards, measurable outcomes, and systems that stay
            operable as they scale—technically and organizationally.
          </p>
        </section>
      </div>
    </main>
  );
}
