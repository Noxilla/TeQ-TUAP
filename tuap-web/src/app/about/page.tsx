import type { Metadata } from "next";
import { RankLadder } from "@/components/rank-ladder";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { departments } from "@/data/tuap";
import { toneClasses } from "@/lib/tones";

export const metadata: Metadata = {
  title: "About",
  description: "What TUAP stands for, our mission, and the story behind the TeQ Tribe.",
};

const buildingFor = [
  "TeQ and its initiatives",
  "Partner organisations",
  "Sponsor brands",
  "Businesses and clients",
  "Community and campus initiatives",
  "Independent creative and professional projects",
];

const mission = [
  { verb: "Learn", text: "relevant communication, creative, digital, and professional skills." },
  { verb: "Build", text: "practical experience through projects, collaboration, and portfolio development." },
  { verb: "Grow", text: "through mentorship, feedback, leadership, and professional exposure." },
  { verb: "Create value", text: "for brands, businesses, communities, and organisations." },
  {
    verb: "Access opportunities",
    text: "that can lead to internships, freelance work, partnerships, and career advancement.",
  },
];

const values = [
  { emoji: "📈", name: "Growth", text: "We are committed to continuous learning, improvement, and personal development." },
  { emoji: "💬", name: "Clarity", text: "We communicate with purpose, honesty, understanding, and professionalism." },
  { emoji: "💡", name: "Creativity", text: "We bring fresh thinking, ideas, and innovative solutions to the work we do." },
  { emoji: "🤝", name: "Community", text: "We grow together through collaboration, support, mentorship, and shared progress." },
  {
    emoji: "🌟",
    name: "Excellence",
    text: "We take pride in producing quality work and representing ourselves and TeQ professionally.",
  },
];

const stages = [
  {
    emoji: "📚",
    name: "Learn",
    items: ["Bootcamps and workshops", "Industry experts and professionals", "Department-based learning", "Learning resources and challenges", "Mentorship and feedback"],
  },
  {
    emoji: "🛠️",
    name: "Build",
    items: ["Practical projects", "Collaborating across departments", "Supporting TeQ initiatives", "Contributing to campaigns", "Selected sponsor or business projects", "Portfolios and professional experience"],
  },
  {
    emoji: "💼",
    name: "Earn",
    items: ["Paid projects", "Freelance opportunities", "Creative collaborations", "Internships", "Partnerships", "Professional referrals"],
  },
];

const futureRoles = ["Campus Lead", "Certified TeQ Creator", "TeQ Freelancer", "TeQ Partner", "TeQ Instructor", "TeQ Consultant"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TUAP"
        title="Learning should prepare people to create value in the real world."
        lead="TUAP is a practical learning, creative development, and career-building community powered by TheEnglish CliniQ (TeQ) Ltd."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="🌍 Who we are" title="We help bridge the gap between school and work." />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                While traditional education provides important academic knowledge, many students leave school without
                enough practical experience, industry exposure, professional networks, or portfolio-worthy work to
                confidently transition into the labour market.
              </p>
              <p>
                We bring together ambitious students interested in communication, creativity, digital work, leadership,
                and professional growth — and give them opportunities to learn from industry professionals, collaborate
                across departments, and apply their knowledge to meaningful projects.
              </p>
              <p className="font-medium text-ink">
                TUAP is not simply about representing a brand. It is a place to learn, build, contribute, and grow.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-line">
            <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase">🎯 What we are building</p>
            <p className="mt-4 text-lg leading-relaxed">
              A practical alternative learning ecosystem where TeQsters contribute to projects for:
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {buildingFor.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-ink/80">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 font-display text-xl font-bold text-brand-700">
              Move beyond learning about work — and start learning through work.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Our vision" title="Practical, creative, career-ready young professionals." />
            <p className="mt-4 leading-relaxed text-muted">
              To build a generation who can communicate ideas, solve problems, create value, and thrive in the modern
              world of work.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">💡 Our mission — we help TeQsters</p>
            <ol className="mt-5 space-y-3">
              {mission.map((m, i) => (
                <li key={m.verb} className="flex gap-4 rounded-2xl bg-paper p-4 ring-1 ring-line">
                  <span className="font-display text-lg font-bold text-brand-500">{i + 1}</span>
                  <p className="text-ink/80">
                    <strong className="text-ink">{m.verb}</strong> {m.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="⚖️ Core values"
          title="How we learn, communicate, collaborate, and contribute."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.name} className="rounded-3xl bg-white p-6 ring-1 ring-line">
              <span className="text-2xl" aria-hidden>
                {v.emoji}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{v.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="🏢 The department system"
          title="Grow through a specialised area of interest."
          lead="Unlike a traditional ambassador programme where everyone performs the same promotional tasks, TUAP departments reflect real functions within the communication and creative industry."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <li key={d.slug} className={`flex items-center gap-3 rounded-2xl p-4 ${toneClasses[d.tone].soft}`}>
              <span className={`size-3 shrink-0 rounded-full ${toneClasses[d.tone].dot}`} aria-hidden />
              <span className="font-display font-bold">{d.name}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="🔄 How TUAP works" title="Three connected stages." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {stages.map((s) => (
            <div key={s.name} className="rounded-3xl bg-white p-7 ring-1 ring-line">
              <p className="font-display text-3xl font-extrabold">
                <span aria-hidden>{s.emoji}</span> {s.name}
              </p>
              <ul className="mt-5 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink/80">
                    <span className="text-brand-500" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-xl font-bold text-balance text-brand-700">
          Learning gives you knowledge. Building gives you experience. Creating value can create opportunities.
        </p>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="🤝 Meet the TeQsters"
          title="Your rank reflects how you grow and the value you create."
          lead="Not simply how long you've been here."
        />
        <div className="mt-12">
          <RankLadder />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="🔗 Our connection to TeQ"
              title="TUAP can be the beginning of your professional journey."
            />
            <p className="mt-5 leading-relaxed text-muted">
              TheEnglish CliniQ (TeQ) is building a communication and creative industry ecosystem that helps people turn
              their communication abilities, knowledge, and creativity into professional value. TUAP identifies,
              develops, and exposes emerging student talent within it. For some, the journey may lead toward becoming:
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {futureRoles.map((r) => (
                <li key={r} className="rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-line">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-700 p-8 text-white">
            <p className="text-xs font-semibold tracking-widest text-lime uppercase">🌱 The TUAP promise</p>
            <p className="mt-4 leading-relaxed text-white/80">
              We cannot promise that every TeQster will immediately get a job, become successful, or earn money. But we
              are committed to building an environment where committed individuals can gain:
            </p>
            <p className="mt-5 font-display text-xl leading-snug font-bold">
              The knowledge, experience, relationships, discipline, and opportunities needed to become more prepared for
              the real world.
            </p>
            <p className="mt-6 border-t border-white/15 pt-5 text-white/80">
              TUAP provides the environment. <strong className="text-lime">You bring the commitment.</strong>
            </p>
          </div>
        </div>
      </Section>

      <CtaBand title="Welcome to the tribe. Learn. Build. Earn." />
    </>
  );
}
