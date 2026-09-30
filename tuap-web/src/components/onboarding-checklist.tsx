"use client";

import Link from "next/link";
import { useState } from "react";
import { onboardingPhases } from "@/data/tuap";
import { useStoredState } from "@/lib/use-stored-state";

const EMPTY: Record<string, boolean> = {};
const totalTasks = onboardingPhases.reduce((n, p) => n + p.tasks.length, 0);

export function OnboardingChecklist() {
  const [done, setDone] = useStoredState<Record<string, boolean>>("tuap:onboarding", EMPTY);
  const [expanded, setExpanded] = useState<string | null>(null);

  const phaseStats = onboardingPhases.map((phase) => {
    const completed = phase.tasks.filter((t) => done[`${phase.id}:${t.id}`]).length;
    return { completed, complete: completed === phase.tasks.length };
  });
  const currentIndex = phaseStats.findIndex((s) => !s.complete);
  const completedTasks = phaseStats.reduce((n, s) => n + s.completed, 0);
  const percent = Math.round((completedTasks / totalTasks) * 100);
  const allDone = currentIndex === -1;

  function toggle(key: string) {
    setDone({ ...done, [key]: !done[key] });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-line">
          <ProgressRing percent={percent} />
          <p className="mt-4 text-center text-sm text-muted">
            {completedTasks} of {totalTasks} steps complete
          </p>
          <ol className="mt-6 space-y-1">
            {onboardingPhases.map((phase, i) => {
              const stat = phaseStats[i];
              const locked = !allDone && i > currentIndex;
              return (
                <li key={phase.id}>
                  <a
                    href={`#${phase.id}`}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                      i === currentIndex ? "bg-brand-50 font-semibold text-brand-700" : locked ? "text-muted" : ""
                    }`}
                  >
                    <StatusDot complete={stat.complete} locked={locked} />
                    <span className="flex-1">{phase.title}</span>
                    <span className="text-xs tabular-nums text-muted">
                      {stat.completed}/{phase.tasks.length}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
          {completedTasks > 0 && (
            <button
              type="button"
              onClick={() => setDone(EMPTY)}
              className="mt-4 w-full text-center text-xs font-medium text-muted hover:text-ink"
            >
              Reset progress
            </button>
          )}
        </div>
      </aside>

      <div className="space-y-4">
        {allDone && (
          <div className="rounded-3xl bg-brand-600 p-7 text-white" role="status">
            <p className="text-3xl" aria-hidden>
              🎉
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold">Congratulations — you&apos;re an Active TeQster!</h2>
            <p className="mt-2 text-white/80">
              Activated, aligned, and ready to grow. From here, you rise to TeQstar… and maybe even TeQGrandstar.
            </p>
            <Link
              href="/growth"
              className="mt-5 inline-flex rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white"
            >
              See how to earn points
            </Link>
          </div>
        )}

        {onboardingPhases.map((phase, i) => {
          const stat = phaseStats[i];
          const locked = !allDone && i > currentIndex;
          const isOpen = expanded ? expanded === phase.id : i === currentIndex;
          return (
            <section
              key={phase.id}
              id={phase.id}
              className={`scroll-mt-24 rounded-3xl bg-white ring-1 ${
                i === currentIndex ? "ring-2 ring-brand-500" : "ring-line"
              } ${locked ? "opacity-60" : ""}`}
            >
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? "__none" : phase.id)}
                aria-expanded={isOpen}
                aria-controls={`${phase.id}-tasks`}
                className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
              >
                <StatusDot complete={stat.complete} locked={locked} large />
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">{phase.label}</p>
                  <h2 className="font-display text-xl font-bold">{phase.title}</h2>
                  {phase.purpose && <p className="mt-0.5 text-sm text-muted">{phase.purpose}</p>}
                </div>
                <span className="text-sm tabular-nums text-muted">
                  {stat.completed} of {phase.tasks.length}
                </span>
              </button>

              {isOpen && (
                <div id={`${phase.id}-tasks`} className="border-t border-line px-5 pb-5 sm:px-6">
                  {locked && (
                    <p className="mt-4 rounded-xl bg-paper px-4 py-3 text-sm text-muted">
                      🔒 Finish the previous phase first. Follow each step one after the other — don&apos;t skip or
                      jump a step.
                    </p>
                  )}
                  <ul className="mt-2">
                    {phase.tasks.map((task) => {
                      const key = `${phase.id}:${task.id}`;
                      const checked = !!done[key];
                      const external = task.href?.startsWith("http");
                      return (
                        <li key={task.id} className="flex items-center gap-3 border-b border-line/60 py-3 last:border-0">
                          <input
                            id={key}
                            type="checkbox"
                            checked={checked}
                            disabled={locked}
                            onChange={() => toggle(key)}
                            className="size-5 shrink-0 accent-brand-600"
                          />
                          <label
                            htmlFor={key}
                            className={`flex-1 text-sm ${checked ? "text-muted line-through" : ""} ${
                              locked ? "" : "cursor-pointer"
                            }`}
                          >
                            {task.text}
                          </label>
                          {task.href &&
                            (external ? (
                              <a
                                href={task.href}
                                target="_blank"
                                rel="noreferrer"
                                className="shrink-0 text-xs font-semibold text-brand-700 hover:underline"
                              >
                                Open ↗
                              </a>
                            ) : (
                              <Link href={task.href} className="shrink-0 text-xs font-semibold text-brand-700 hover:underline">
                                Open →
                              </Link>
                            ))}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

function StatusDot({ complete, locked, large = false }: { complete: boolean; locked: boolean; large?: boolean }) {
  const size = large ? "size-8 text-sm" : "size-5 text-[10px]";
  if (complete)
    return (
      <span className={`grid shrink-0 place-items-center rounded-full bg-brand-600 text-white ${size}`} aria-label="Complete">
        ✓
      </span>
    );
  if (locked)
    return (
      <span className={`grid shrink-0 place-items-center rounded-full bg-paper ring-1 ring-line ${size}`} aria-label="Locked">
        🔒
      </span>
    );
  return <span className={`shrink-0 rounded-full ring-2 ring-brand-500 ${size}`} aria-label="In progress" />;
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto size-36">
      <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden>
        <circle cx="60" cy="60" r={r} fill="none" strokeWidth="10" className="stroke-brand-50" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (percent / 100) * c}
          className="stroke-brand-600 transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-3xl font-extrabold tabular-nums">{percent}%</span>
      </div>
    </div>
  );
}
