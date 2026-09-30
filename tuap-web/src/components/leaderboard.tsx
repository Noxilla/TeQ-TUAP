"use client";

import { Fragment, useState } from "react";
import { departments, institutions, rankFor, ranks, sampleLeaderboard } from "@/data/tuap";
import { toneClasses } from "@/lib/tones";

const medals = ["🥇", "🥈", "🥉"];

export function Leaderboard() {
  const [institution, setInstitution] = useState("All");
  const rows = sampleLeaderboard
    .filter((r) => institution === "All" || r.institution === institution)
    .sort((a, b) => b.points - a.points);

  return (
    <div className="rounded-3xl bg-white ring-1 ring-line">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line p-4 sm:p-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by institution">
          {["All", ...institutions].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setInstitution(option)}
              aria-pressed={institution === option}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
                institution === option ? "bg-ink text-white" : "bg-paper ring-1 ring-line hover:ring-ink/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <span className="rounded-full bg-[#fff4d6] px-3 py-1 text-xs font-semibold text-[#8a5a00]">Sample data</span>
      </div>

      <ol>
        {rows.map((row, i) => {
          const dept = departments.find((d) => d.slug === row.department)!;
          const rank = rankFor(row.points);
          const prev = rows[i - 1];
          const zone = prev ? ranks.find((r) => r.min > row.points && r.min <= prev.points) : undefined;
          return (
            <Fragment key={row.name}>
              {zone && (
                <li className="flex items-center gap-3 px-5 py-2 text-xs font-semibold tracking-widest text-brand-600 uppercase">
                  <span className="h-px flex-1 bg-brand-100" aria-hidden />
                  ↑ {zone.name} zone · {zone.min}+ pts
                  <span className="h-px flex-1 bg-brand-100" aria-hidden />
                </li>
              )}
              <li className={`flex items-center gap-3 px-4 py-3 sm:px-5 ${i < 3 ? "bg-brand-50/50" : ""}`}>
                <span className="w-7 text-center font-display font-bold text-muted">
                  {medals[i] ?? i + 1}
                </span>
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${
                    toneClasses[dept.tone].bg
                  }`}
                  aria-hidden
                >
                  {row.name[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{row.name}</p>
                  <p className="truncate text-xs text-muted">
                    {row.institution} · {dept.name}
                  </p>
                </div>
                <span className="hidden text-xs font-medium text-muted sm:inline">
                  {rank.emoji} {rank.name}
                </span>
                <span className="w-16 text-right font-display font-bold tabular-nums">{row.points} pts</span>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
}
