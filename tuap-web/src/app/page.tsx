import Link from "next/link";
import { DepartmentGrid } from "@/components/department-grid";
import { RankLadder } from "@/components/rank-ladder";
import { Arrow, ButtonLink, Container, CtaBand, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { departments, gains, pillars, realWorldQuestions } from "@/data/tuap";
import { toneClasses } from "@/lib/tones";

const collaboration = [
  { label: "Strategy", tone: "pink" },
  { label: "Content", tone: "blue" },
  { label: "Design", tone: "orange" },
  { label: "Media", tone: "green" },
  { label: "Digital", tone: "red" },
  { label: "Community", tone: "purple" },
] as const;

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-white">
        <Container className="grid gap-px overflow-hidden sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.name} className="py-7 sm:px-6 sm:first:pl-0">
              <p className="font-display text-2xl font-bold">
                <span aria-hidden>{p.emoji}</span> {p.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why TUAP exists"
              title="University teaches you theories. The real world asks more."
              lead={
                <>
                  There is often a gap between what students learn in school and what the real world expects them to
                  do. TUAP combines the structure of academic learning with the practicality of industry experience.
                </>
              }
            />
            <p className="mt-8 font-display text-2xl font-bold text-brand-700">TUAP exists to help you answer yes.</p>
          </div>
          <ul className="space-y-3">
            {realWorldQuestions.map((q, i) => (
              <li
                key={q}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-line sm:p-5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                  {i + 1}
                </span>
                <span className="font-medium">{q}</span>
                <span className="ml-auto text-xs font-bold tracking-widest text-brand-500 uppercase">Yes</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-white" id="departments">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="TUAP departments"
            title="Choose where you'll practise, build, and grow."
            lead="Each department is a professional learning environment facilitated by practitioners who show you not only what to learn, but how it's applied in the real world."
          />
          <ButtonLink href="/apply" variant="secondary">
            Pick yours when you apply <Arrow />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <DepartmentGrid />
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
          <Eyebrow>Cross-department collaboration</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            The real world doesn&apos;t work in isolated departments. Neither do we.
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">A single brand campaign may require:</p>
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            {collaboration.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2 sm:gap-3">
                <span
                  className={`rounded-full px-4 py-2 font-display text-lg font-bold text-white sm:text-xl ${toneClasses[c.tone].bg}`}
                >
                  {c.label}
                </span>
                {i < collaboration.length - 1 && (
                  <span className="text-2xl font-bold text-white/40" aria-hidden>
                    +
                  </span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-lg text-white/80">
            You don&apos;t just learn your department.{" "}
            <strong className="text-lime">You learn how your skill creates value alongside other skills.</strong>
          </p>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Ranking system"
            title="Three ranks. Each one earned."
            lead="Rank up through consistency, creative contributions, leadership, campaign participation, and community impact."
          />
          <ButtonLink href="/growth" variant="secondary">
            How points work <Arrow />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <RankLadder />
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="What you gain"
          title="You don't just graduate from TUAP knowing more. You leave having done more."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gains.map((g, i) => (
            <div key={g.title} className="rounded-3xl bg-paper p-6 ring-1 ring-line">
              <span className="font-display text-sm font-bold text-brand-500">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-brand-50 p-8 ring-1 ring-brand-100">
            <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase">🌍 Our vision</p>
            <p className="mt-4 font-display text-2xl leading-snug font-bold text-balance">
              A generation of African students who are professionally capable, creatively confident, and prepared to
              create value in the real world.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-line">
            <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase">🎯 Our mission</p>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              To bridge the gap between university education and industry readiness by providing students with
              practical learning, real-world experience, professional mentorship, collaborative opportunities, and
              pathways to build meaningful careers.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              More about TUAP <Arrow />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-lime/30 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-line">
            <span className="size-2 rounded-full bg-brand-500" aria-hidden />
            TeQ University Ambassador Programme
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Build the career behind your <span className="text-brand-600">passion.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            A career development and practical learning ecosystem for ambitious university students who want more than
            classroom knowledge. You don&apos;t simply join TUAP to represent TeQ.{" "}
            <strong className="text-ink">You join to build yourself.</strong>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/apply">
              Apply to join TUAP <Arrow />
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="secondary">
              How it works
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4" aria-hidden>
          {departments.map((d, i) => (
            <div
              key={d.slug}
              className={`flex aspect-[4/3] flex-col justify-between rounded-3xl p-4 text-white shadow-sm sm:p-5 ${
                toneClasses[d.tone].bg
              } ${i % 2 === 1 ? "translate-y-6" : ""}`}
            >
              <span className="font-display text-sm font-bold opacity-80">{d.number}</span>
              <span className="font-display text-base leading-tight font-bold sm:text-lg">{d.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
