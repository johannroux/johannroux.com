import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {Callout} from "@/components/ui/Callout";
import {Card, CardBody} from "@/components/ui/Card";
import {Section} from "@/components/ui/Section";
import {HeroVisual} from "@/components/home/HeroVisual";
import {CompanyChip} from "@/components/ui/CompanyChip";
import {FitPrimersLogo} from "@/components/icons/FitPrimersLogo";
import {KhonsuLogo} from "@/components/icons/KhonsuLogo";

export default function Home() {
  return (
    <main>
      <div className="bg-grid">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-start gap-10 sm:grid-cols-12 sm:gap-12">
            <div className="sm:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                Engineering Manager · Backend Engineer
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                I build reliable systems and high-performing teams.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                I’m Johann, an engineering manager and backend engineer based in
                Berlin. I’ve built and scaled backend platforms across startups
                and consulting, led teams through delivery, and partnered with
                domain experts to ship software you can trust.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary">
                  Get in touch
                </Button>
                <Button href="/experience" variant="secondary">
                  View experience
                </Button>
              </div>
            </div>

            <div className="sm:col-span-5 sm:pt-2">
              <HeroVisual />
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3">
            <Callout title="Leadership">
              Led a team of 7 engineers, balancing quality, pace, and clarity.
            </Callout>
            <Callout title="Regulated systems">
              Built and shipped backend systems in high-stakes environments.
            </Callout>
            <Callout title="Product mindset">
              Focus on measurable outcomes, not just output.
            </Callout>
          </div>
        </div>
      </div>

      <Section eyebrow="Focus" title="What I’m good at">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardBody>
              <div className="text-sm font-semibold tracking-tight">
                Backend architecture
              </div>
              <p className="mt-2 text-sm text-muted">
                Systems that are observable, resilient, and easy to operate.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="text-sm font-semibold tracking-tight">
                Engineering management
              </div>
              <p className="mt-2 text-sm text-muted">
                Clear direction, strong standards, and a culture of ownership.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="text-sm font-semibold tracking-tight">
                Delivery & quality
              </div>
              <p className="mt-2 text-sm text-muted">
                Pragmatic processes, great reviews, and dependable releases.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Selected" title="Experience highlights">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardBody>
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <CompanyChip
                            name="Ada Health"
                            logoSrc="/icons/companies/ada.png"
                            className="px-4 py-2 text-sm"
                        />
                        <CompanyChip
                            name="BCG X"
                            logoSrc="/icons/companies/bcg-dv.png"
                            className="px-4 py-2 text-sm"
                        />
                    </div>
                <div className="text-xs text-muted">Berlin</div>
              </div>
              <p className="mt-4 text-sm text-muted">
                  Professional work across startups and consulting: backend
                  engineering, platform ownership, and team leadership—shipping in
                  regulated, high-stakes environments.
              </p>
              <div className="mt-4">
                <Link
                  href="/experience"
                  className="text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
                >
                  Full experience →
                </Link>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold tracking-tight">
                      Personal projects
                  </div>
                  <div className="text-xs text-muted">Builder mode</div>
              </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div
                        aria-hidden="true"
                        className="grid h-12 w-12 shrink-0 place-items-center transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.03]"
                    >
                        <FitPrimersLogo className="h-10 w-10" title="" aria-hidden/>
                    </div>
                    <div
                        aria-hidden="true"
                        className="grid h-12 w-12 shrink-0 place-items-center transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.03]"
                    >
                        <KhonsuLogo className="h-9 w-9" title="" aria-hidden/>
                    </div>
                    {[
                        {src: "/icons/khonsu/alphabets.png", bg: "#4EC3F7"},
                        {src: "/icons/khonsu/dinosaurs.png", bg: "#C0CA33"},
                        {src: "/icons/khonsu/freestyle.png", bg: "#FFB200"},
                    ].map((i) => (
                        <div
                            key={i.src}
                            aria-hidden="true"
                            className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] border border-border/60 shadow-soft transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.03]"
                            style={{backgroundColor: i.bg}}
                        >
                            <img
                                src={i.src}
                                alt=""
                                className="h-10 w-10 rounded-[14px] object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
              </div>
              <p className="mt-4 text-sm text-muted">
                  Side projects where I iterate fast, sweat the details, and ship
                  things end-to-end—from product to engineering.
              </p>
              <div className="mt-4">
                <Link
                  href="/projects"
                  className="text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
                >
                  Projects →
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>
    </main>
  );
}
