"use client";

import { useState, useSyncExternalStore } from "react";
import { events, type TuapEvent } from "@/data/tuap";

// "Today" is read in the browser only, so a statically built page never shows stale upcoming/past splits.
const noopSubscribe = () => () => {};
const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const statusStyles: Record<TuapEvent["status"] | "Ended", string> = {
  "Registration open": "bg-[#fff4d6] text-[#8a5a00]",
  Planning: "bg-[#e6eefd] text-[#1f55c2]",
  "Pending review": "bg-[#fde8f1] text-[#b3276a]",
  "Not started": "bg-paper text-muted",
  Done: "bg-brand-50 text-brand-700",
  Ended: "bg-brand-50 text-brand-700",
  Cancelled: "bg-[#fde7e7] text-[#bb2f33]",
};

// Past events still marked as open or planned in Notion are shown as "Ended".
function displayStatus(e: TuapEvent, isPast: boolean) {
  return isPast && e.status !== "Done" && e.status !== "Cancelled" ? "Ended" : e.status;
}

const formatFilters = ["All formats", "In person", "Virtual"] as const;

function formatDate(iso: string, opts: Intl.DateTimeFormatOptions) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", opts);
}

export function EventsBrowser() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [format, setFormat] = useState<(typeof formatFilters)[number]>("All formats");
  const today = useSyncExternalStore(noopSubscribe, todayIso, () => null);

  const list = events
    .filter((e) => {
      if (today === null) return false;
      const lastDay = e.end ?? e.start;
      return tab === "upcoming" ? lastDay >= today : lastDay < today;
    })
    .filter((e) => format === "All formats" || e.formats.includes(format))
    .sort((a, b) => (tab === "upcoming" ? a.start.localeCompare(b.start) : b.start.localeCompare(a.start)));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-full bg-white p-1 ring-1 ring-line" role="tablist" aria-label="Event timing">
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize ${
                tab === t ? "bg-ink text-white" : "text-muted hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by format">
          {formatFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFormat(f)}
              aria-pressed={format === f}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
                format === f ? "bg-brand-600 text-white" : "bg-white ring-1 ring-line hover:ring-ink/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {today === null ? (
        <div className="mt-10 h-48 animate-pulse rounded-3xl bg-white ring-1 ring-line" aria-hidden />
      ) : list.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-white px-6 py-16 text-center ring-1 ring-line">
          <p className="text-4xl" aria-hidden>
            🗓️
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold">
            {tab === "upcoming" ? "No upcoming events yet" : "No past events"}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted">
            {tab === "upcoming"
              ? "New campaigns, challenges, and campus activations are announced in the TeQster community first."
              : "Try a different format filter."}
          </p>
          {tab === "upcoming" && (
            <button
              type="button"
              onClick={() => setTab("past")}
              className="mt-6 rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-line hover:ring-ink/30"
            >
              See past events
            </button>
          )}
        </div>
      ) : (
        <ol className="mt-10 space-y-4">
          {list.map((e) => (
            <li key={e.name} className="grid gap-4 sm:grid-cols-[7rem_1fr]">
              <div className="flex items-baseline gap-2 sm:block">
                <p className="font-display text-3xl font-extrabold">{formatDate(e.start, { day: "2-digit" })}</p>
                <p className="text-sm font-medium text-muted">{formatDate(e.start, { month: "short", year: "numeric" })}</p>
              </div>
              <article className="rounded-3xl bg-white p-6 ring-1 ring-line">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[displayStatus(e, tab === "past")]}`}
                  >
                    {displayStatus(e, tab === "past")}
                  </span>
                  <span className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium ring-1 ring-line">{e.category}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">{e.name}</h3>
                <p className="mt-2 text-sm text-muted">
                  {e.end
                    ? `${formatDate(e.start, { day: "numeric", month: "long", year: "numeric" })} – ${formatDate(e.end, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}`
                    : formatDate(e.start, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </p>
                <p className="mt-3 flex flex-wrap gap-3 text-sm">
                  {e.formats.map((f) => (
                    <span key={f} className="inline-flex items-center gap-1.5">
                      <span aria-hidden>{f === "Virtual" ? "💻" : "📍"}</span>
                      {f}
                    </span>
                  ))}
                </p>
              </article>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
