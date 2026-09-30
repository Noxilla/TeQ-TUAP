"use client";

import { useState } from "react";
import { departments } from "@/data/tuap";
import { toneClasses } from "@/lib/tones";

export function DepartmentGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {departments.map((dept) => {
        const tone = toneClasses[dept.tone];
        const open = openSlug === dept.slug;
        return (
          <article
            key={dept.slug}
            className={`flex flex-col rounded-3xl p-6 ring-1 ring-black/5 transition-shadow ${tone.soft} ${
              open ? "shadow-lg" : "hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`grid size-11 place-items-center rounded-2xl font-display font-bold text-white ${tone.bg}`}>
                {dept.number}
              </span>
              <span className={`text-xs font-semibold tracking-widest uppercase ${tone.text}`}>Department</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{dept.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{dept.tagline}</p>

            {open && (
              <div id={`dept-${dept.slug}`} className="mt-5 space-y-4 border-t border-black/10 pt-5">
                <p className="text-sm leading-relaxed text-ink/80">{dept.summary}</p>
                <div>
                  <p className={`text-xs font-semibold tracking-widest uppercase ${tone.text}`}>You&apos;ll explore</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {dept.explore.map((topic) => (
                      <li key={topic} className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-ink/80">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={`text-xs font-semibold tracking-widest uppercase ${tone.text}`}>You&apos;ll build</p>
                  <p className="mt-1.5 text-sm text-ink/80">{dept.build}</p>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpenSlug(open ? null : dept.slug)}
              aria-expanded={open}
              aria-controls={`dept-${dept.slug}`}
              className={`mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-semibold ${tone.text}`}
            >
              {open ? "Show less" : "What you'll learn"}
              <svg
                viewBox="0 0 20 20"
                className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M5 8l5 5 5-5" />
              </svg>
            </button>
          </article>
        );
      })}
    </div>
  );
}
