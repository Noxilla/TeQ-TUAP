"use client";

import { useState } from "react";
import { activities, rankFor, ranks } from "@/data/tuap";

const MAX_POINTS = 120;

export function PointsEstimator() {
  const [counts, setCounts] = useState<Record<string, number>>({ onboarding: 1 });

  const total = activities.reduce((sum, a) => sum + (counts[a.id] ?? 0) * a.points, 0);
  const rank = rankFor(total);
  const next = ranks.find((r) => r.min > total);

  const limitFor = (id: string) => (id === "onboarding" ? 1 : 20);

  function change(id: string, delta: number) {
    setCounts((prev) => {
      const value = Math.min(limitFor(id), Math.max(0, (prev[id] ?? 0) + delta));
      return { ...prev, [id]: value };
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <ul className="divide-y divide-line rounded-3xl bg-white ring-1 ring-line">
        {activities.map((a) => {
          const count = counts[a.id] ?? 0;
          return (
            <li key={a.id} className="flex items-center gap-3 p-4">
              <span className="text-xl" aria-hidden>
                {a.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{a.name}</p>
                <p className="text-xs text-muted">
                  {a.points} pts each{a.bonus ? ` ${a.bonus}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-1" role="group" aria-label={`${a.name} count`}>
                <StepButton label={`Remove one: ${a.name}`} onClick={() => change(a.id, -1)} disabled={count === 0}>
                  −
                </StepButton>
                <span className="w-7 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                  {count}
                </span>
                <StepButton
                  label={`Add one: ${a.name}`}
                  onClick={() => change(a.id, 1)}
                  disabled={count >= limitFor(a.id)}
                >
                  +
                </StepButton>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-3xl bg-ink p-7 text-white">
          <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">Estimated total</p>
          <p className="mt-2 font-display text-6xl font-extrabold tabular-nums">
            {total}
            <span className="ml-1 text-2xl text-white/50">pts</span>
          </p>
          <p className="mt-3 text-lg">
            Rank: <strong className="text-lime">{rank.emoji} {rank.name}</strong>
          </p>

          <div className="mt-6" aria-hidden>
            <div className="relative h-3 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-lime transition-[width] duration-300"
                style={{ width: `${Math.min(100, (total / MAX_POINTS) * 100)}%` }}
              />
              {ranks.slice(1).map((r) => (
                <span
                  key={r.name}
                  className="absolute top-0 h-full w-0.5 bg-ink"
                  style={{ left: `${(r.min / MAX_POINTS) * 100}%` }}
                />
              ))}
            </div>
            <div className="relative mt-2 h-4 text-[11px] text-white/60">
              {ranks.map((r) => (
                <span
                  key={r.name}
                  className="absolute -translate-x-0"
                  style={{ left: `${(r.min / MAX_POINTS) * 100}%` }}
                >
                  {r.min}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm text-white/75">
            {next ? (
              <>
                <strong className="text-white">
                  {next.min - total} {next.min - total === 1 ? "pt" : "pts"}
                </strong>{" "}
                to {next.emoji} {next.name}. Also
                required: {next.eligibility.toLowerCase()}.
              </>
            ) : (
              <>Top rank reached. Also required: {rank.eligibility.toLowerCase()}.</>
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCounts({ onboarding: 1 })}
          className="mt-3 text-sm font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
        >
          Reset estimator
        </button>
      </div>
    </div>
  );
}

function StepButton({
  children,
  label,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid size-8 place-items-center rounded-full bg-paper text-lg leading-none font-semibold ring-1 ring-line hover:bg-brand-50 disabled:opacity-40"
    >
      {children}
    </button>
  );
}
