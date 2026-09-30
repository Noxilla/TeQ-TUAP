import type { Metadata } from "next";
import { Leaderboard } from "@/components/leaderboard";
import { PointsEstimator } from "@/components/points-estimator";
import { RankLadder } from "@/components/rank-ladder";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/ui";
import { activities } from "@/data/tuap";

export const metadata: Metadata = {
  title: "Growth & Recognition",
  description: "Track your points, badges, and progress toward becoming a TeQGrandstar.",
};

const howItWorks = [
  "Every task you complete = points in your monthly report.",
  "Referrals and recruitment carry the highest scores to drive tribe-building.",
  "Scores are submitted via your Monthly TeQster Log.",
  "HQ reviews totals monthly and quarterly for recognition and rank upgrades.",
];

export default function GrowthPage() {
  const sorted = [...activities].sort((a, b) => b.points - a.points);

  return (
    <>
      <PageHero
        eyebrow="⭐ Growth & recognition"
        title="The more you show up, the faster you rise."
        lead="TUAP rewards TeQsters for completing tasks, leading campaigns, and bringing others into the tribe. Whether it's online sharing, offline recruiting, or personal contributions — every point counts."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading eyebrow="🎯 Scoring" title="Ways to earn points." />
            <h3 className="mt-10 font-display text-lg font-bold">🧮 How it works</h3>
            <ul className="mt-4 space-y-3">
              {howItWorks.map((line) => (
                <li key={line} className="flex gap-3 text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {sorted.map((a) => (
              <li key={a.id} className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-line">
                <span className="text-xl" aria-hidden>
                  {a.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{a.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{a.detail}</p>
                  {a.bonus && <p className="mt-1 text-xs font-semibold text-brand-700">{a.bonus}</p>}
                </div>
                <span className="h-fit shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
                  {a.points} pts
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="🪜 Rank progression" title="From TeQster to TeQGrandstar." />
        <div className="mt-12">
          <RankLadder showEligibility />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Try it"
          title="Estimate your points."
          lead="Add the activities you plan to do in a cycle and see where it puts you."
        />
        <div className="mt-12">
          <PointsEstimator />
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="🏅 Leaderboard"
          title="Top TeQsters this cycle."
          lead="A preview of the recognition tracker. Live rankings will appear here once connected."
        />
        <div className="mt-12">
          <Leaderboard />
        </div>
      </Section>

      <CtaBand title="Start earning your first points." />
    </>
  );
}
