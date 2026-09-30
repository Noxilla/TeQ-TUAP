"use client";

import { useState } from "react";
import { resourceCategories } from "@/data/tuap";

export function ResourcesBrowser() {
  const [active, setActive] = useState("all");
  const visible = resourceCategories.filter((c) => active === "all" || c.id === active);
  const total = resourceCategories.reduce((n, c) => n + c.items.length, 0);

  return (
    <div>
      <div
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        role="group"
        aria-label="Filter by category"
      >
        {[{ id: "all", emoji: "✨", name: `All (${total})` }, ...resourceCategories].map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c.id)}
            aria-pressed={active === c.id}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap ${
              active === c.id ? "bg-ink text-white" : "bg-white ring-1 ring-line hover:ring-ink/30"
            }`}
          >
            <span aria-hidden>{c.emoji}</span> {c.name}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-12">
        {visible.map((category) => (
          <section key={category.id} aria-labelledby={`cat-${category.id}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id={`cat-${category.id}`} className="font-display text-2xl font-bold">
                <span aria-hidden>{category.emoji}</span> {category.name}
              </h2>
              <p className="text-sm text-muted">{category.audience}</p>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <li key={item.name} className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-line">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper text-lg" aria-hidden>
                    {item.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <span className="mt-1.5 inline-block rounded-md bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                      {item.type}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
