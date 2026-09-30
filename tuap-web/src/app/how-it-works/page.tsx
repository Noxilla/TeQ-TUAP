import type { Metadata } from "next";
import { RankLadder } from "@/components/rank-ladder";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { departments, ecosystemPath, pillars } from "@/data/tuap";
import { toneClasses } from "@/lib/tones";

export const metadata: Metadata = {
  title: "How it works",
  description: "The TUAP structure, departments, growth journey, ranking system, and reward model.",
};

const realWork = [
  "TeQ projects and campaigns",
  "Sponsor and partner brand projects",
  "Content and media productions",
  "Brand communication briefs",
  "Digital campaigns",
  "Community activations",
  "Events and workshops",
  "Creative challenges",
  "Cross-department projects",
  "Internal TUAP initiatives",
];

const journey = [
  { name: "Onboarding", text: "Understand TeQ, TUAP, your department, expectations, systems, and growth framework." },
  { name: "Learning", text: "Participate in training, workshops, challenges, mentorship, and self-development." },
  { name: "Building", text: "Apply your skills through projects, assignments, campaigns, collaborations, and real-world briefs." },
  { name: "Contribution", text: "Take initiative, support projects, and demonstrate your growing capabilities." },
  { name: "Progression", text: "Earn Growth Points, receive feedback, build your record, and progress through the ranks." },
  {
    name: "Opportunity",
    text: "Become eligible for leadership, project, freelance, instructional, partnership, or other opportunities.",
  },
];

const online = ["Digital campaigns", "Content creation", "Social media projects", "Virtual training", "Digital strategy", "Online communities", "Remote collaboration"];
const offline = ["Campus activations", "Events & workshops", "Community outreach", "Brand activations", "Partnerships", "Student engagement", "Project execution"];

const expected = [
  "Participating in department training",
  "Completing practical assignments",
  "Contributing to TeQ or partner projects",
  "Creating content or visual assets",
  "Supporting campaigns",
  "Participating in community initiatives",
  "Collaborating across departments",
  "Attending relevant meetings and sessions",
  "Taking part in challenges",
  "Supporting events and activations",
  "Referring suitable people to TeQ opportunities",
  "Documenting your progress and contributions",
];

const recognition = [
  "Digital recognition and badges",
  "Certificates",
  "TeQ merchandise",
  "Leadership opportunities",
  "Department responsibilities",
  "Mentorship opportunities",
  "Portfolio-building projects",
  "Professional recommendations",
  "Industry exposure",
  "Training opportunities",
  "Creative collaborations",
  "Project and freelance opportunities",
];

const outcomes = [
  { name: "Skills", text: "Practical communication, creative, digital, leadership, and professional skills." },
  { name: "Experience", text: "Evidence that you have worked on projects, solved problems, and delivered outcomes." },
  { name: "Portfolio", text: "Work that demonstrates what you can actually do." },
  { name: "Network", text: "Connections with TeQsters, practitioners, mentors, partners, and professionals." },
  { name: "Confidence", text: "The ability to communicate ideas and contribute in professional environments." },
  { name: "Opportunity readiness", text: "Positioning for internships, freelance work, employment, and partnerships." },
];

const tools = [
  { name: "Notion", purpose: "Onboarding, learning resources, project information, documentation, and growth tracking" },
  { name: "WhatsApp", purpose: "Community communication, announcements, and coordination" },
  { name: "Tally / Forms", purpose: "Applications, check-ins, submissions, referrals, and reporting" },
  { name: "Zoom / Google Meet", purpose: "Virtual training, meetings, and workshops" },
  { name: "TeQ Tools & Resources", purpose: "Templates, guides, briefs, assets, checklists, and practical resources" },
];

const isList = [
  "A practical learning ecosystem",
  "A career-development environment",
  "A place to develop industry-relevant skills",
  "A platform for real project experience",
  "A community of learners, creators, and future professionals",
  "A bridge between what you learn and what the real world requires",
];
const isNotList = [
  "Just a social media promotion programme",
  "A recruitment competition",
  "A traditional student club",
  "A place to collect a title without contributing",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works · Offline. Online. On campus. In control."
        title="A practical ecosystem to develop skills, gain real experience, and create value."
        lead="Through structured learning, practical projects, collaboration, mentorship, and professional exposure, TeQsters learn skills, build experience, and position themselves for opportunities."
      >
        <nav aria-label="On this page" className="flex flex-wrap gap-2 text-sm">
          {[
            ["#pillars", "Three pillars"],
            ["#departments", "Departments"],
            ["#journey", "Growth journey"],
            ["#ranks", "Ranks"],
            ["#expectations", "Expectations"],
            ["#ecosystem", "Ecosystem"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-full bg-white px-3.5 py-1.5 font-medium ring-1 ring-line hover:ring-ink/30">
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section id="pillars">
        <SectionHeading eyebrow="🧭 How TUAP works" title="Built around three core pillars." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.name} className={`rounded-3xl p-7 ${i === 2 ? "bg-ink text-white" : "bg-white ring-1 ring-line"}`}>
              <p className="text-3xl" aria-hidden>
                {p.emoji}
              </p>
              <h3 className="mt-4 font-display text-3xl font-extrabold uppercase">{p.name}</h3>
              <p className={`mt-3 leading-relaxed ${i === 2 ? "text-white/75" : "text-muted"}`}>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-2xl font-bold text-balance text-brand-700">
          Learn the skill. Build the evidence. Earn the opportunity.
        </p>
      </Section>

      <Section className="bg-white" id="departments">
        <SectionHeading
          eyebrow="🏢 Your department is your practice environment"
          title="Where you develop core skills, collaborate, and contribute to real projects."
        />
        <ol className="mt-12 divide-y divide-line rounded-3xl ring-1 ring-line">
          {departments.map((d) => (
            <li key={d.slug} className="grid gap-2 p-5 sm:grid-cols-[4rem_16rem_1fr] sm:items-center sm:p-6">
              <span className={`font-display text-2xl font-extrabold ${toneClasses[d.tone].text}`}>{d.number}</span>
              <span className="font-display text-lg font-bold">{d.name}</span>
              <span className="text-sm text-muted">{d.explore.slice(0, 7).join(", ")}.</span>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="font-display text-2xl font-bold">🔨 Learn through real work</h3>
            <p className="mt-3 text-muted">
              Depending on your department and level, you may work on these — some individually, others across
              departments.
            </p>
            <p className="mt-5 font-display text-lg font-bold text-brand-700">
              Don&apos;t just learn the theory. Learn how to use it.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {realWork.map((w) => (
              <li key={w} className="rounded-full bg-paper px-4 py-2 text-sm font-medium ring-1 ring-line">
                {w}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="journey">
        <SectionHeading
          eyebrow="📆 Your growth journey"
          title="Progressive — not one-size-fits-all."
          lead="Your journey depends on your participation, development, and contribution."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((step, i) => (
            <li key={step.name} className="relative rounded-3xl bg-white p-6 ring-1 ring-line">
              <span className="font-display text-sm font-bold text-brand-500">0{i + 1}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{step.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="🌐 Online + offline"
          title="You don't have to be online 24/7 to be valuable."
          lead="What matters is the value you create."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { title: "Online", items: online, className: "bg-[#e6eefd]" },
            { title: "Offline", items: offline, className: "bg-[#e3f5ea]" },
          ].map((col) => (
            <div key={col.title} className={`rounded-3xl p-7 ${col.className}`}>
              <h3 className="font-display text-2xl font-bold">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-2 text-ink/80">
                    <span aria-hidden>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ranks">
        <SectionHeading
          eyebrow="🪜 The 3 TeQster ranks"
          title="Your rank reflects growth, contribution, consistency, and impact."
          lead="Growth considers learning, creativity, contribution, leadership, collaboration, referrals, project performance, and measurable impact."
        />
        <div className="mt-12">
          <RankLadder showEligibility />
        </div>
      </Section>

      <Section className="bg-white" id="expectations">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="📌 What you may be expected to do" title="Your involvement shapes your growth." />
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {expected.map((e) => (
                <li key={e} className="flex gap-2 text-sm text-ink/80">
                  <span className="text-brand-500" aria-hidden>
                    ✓
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="🎁 Recognition & opportunities" title="Earned through competence and consistency." />
            <ul className="mt-8 flex flex-wrap gap-2">
              {recognition.map((r) => (
                <li key={r} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Opportunities are not automatically guaranteed by rank. They are earned through competence, consistency,
              professionalism, and demonstrated value.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="🧠 What you will build" title="Leave with more than a certificate." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.name} className="rounded-3xl bg-white p-6 ring-1 ring-line">
              <h3 className="font-display text-xl font-bold">{o.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="🧰 Your digital workspace" title="The systems that support your journey." />
            <dl className="mt-8 divide-y divide-line rounded-3xl ring-1 ring-line">
              {tools.map((t) => (
                <div key={t.name} className="grid gap-1 p-5 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-semibold">{t.name}</dt>
                  <dd className="text-sm text-muted">{t.purpose}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl bg-[#fff4d6] p-8">
            <p className="text-xs font-semibold tracking-widest text-[#8a5a00] uppercase">⚠️ Participation & inactivity</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Voluntary doesn&apos;t mean consequence-free.</h3>
            <p className="mt-4 leading-relaxed text-ink/80">
              Consistent unexplained inactivity may affect your department participation, Growth Points, rank
              progression, access to opportunities, and eligibility for recognition or certification.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              We understand you have school, work, family, and life responsibilities. If you need to step back, talk to
              your Department Lead. What we expect is communication, responsibility, and professionalism.
            </p>
          </div>
        </div>
      </Section>

      <Section id="ecosystem">
        <SectionHeading
          eyebrow="🧩 The bigger TeQ ecosystem"
          title="Your journey can extend beyond TUAP."
          lead="Not everyone will follow the same path. Your direction depends on your skills, interests, performance, experience, and opportunities."
        />
        <ol className="mt-10 flex flex-wrap items-center gap-2">
          {ecosystemPath.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  i < 3 ? "bg-brand-600 text-white" : "bg-white ring-1 ring-line"
                }`}
              >
                {step}
              </span>
              {i < ecosystemPath.length - 1 && (
                <span className="text-muted" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-brand-50 p-7">
            <h3 className="font-display text-2xl font-bold">TUAP is</h3>
            <ul className="mt-4 space-y-2">
              {isList.map((x) => (
                <li key={x} className="flex gap-2">
                  <span aria-hidden>✅</span> {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-7 ring-1 ring-line">
            <h3 className="font-display text-2xl font-bold">TUAP is not</h3>
            <ul className="mt-4 space-y-2">
              {isNotList.map((x) => (
                <li key={x} className="flex gap-2">
                  <span aria-hidden>❌</span> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand title="Welcome to TUAP. Your journey starts here." />
    </>
  );
}
