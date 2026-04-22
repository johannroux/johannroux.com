import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Callout";
import { Card, CardBody } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { HeroVisual } from "@/components/home/HeroVisual";

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
                I’m Johann, based in Berlin. I’ve led teams in regulated health
                tech, shipped backend platforms, and partnered closely with
                clinicians and AI engineers to deliver outcomes you can trust.
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
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-sm font-semibold tracking-tight">
                  Ada Health
                </div>
                <div className="text-xs text-muted">Berlin</div>
              </div>
              <p className="mt-2 text-sm text-muted">
                Backend engineer → engineering manager. Built and operated
                medical intelligence backend, working with clinicians and AI
                teams in a regulated context.
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
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-sm font-semibold tracking-tight">
                  BCG Digital Ventures (BCG X)
                </div>
                <div className="text-xs text-muted">Berlin</div>
              </div>
              <p className="mt-2 text-sm text-muted">
                Venture building across multiple products and stacks, with a
                strong bias for shipping and iteration.
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
