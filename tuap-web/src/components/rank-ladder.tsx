import { ranks } from "@/data/tuap";

const styles = [
  { card: "bg-white", badge: "bg-brand-50 text-brand-700", bar: "bg-brand-500" },
  { card: "bg-white", badge: "bg-[#fff4d6] text-[#8a5a00]", bar: "bg-sun" },
  { card: "bg-ink text-white", badge: "bg-lime text-ink", bar: "bg-lime" },
];

export function RankLadder({ showEligibility = false }: { showEligibility?: boolean }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {ranks.map((rank, i) => {
        const s = styles[i];
        const dark = i === 2;
        return (
          <li key={rank.name} className={`relative flex flex-col rounded-3xl p-6 ring-1 ring-line ${s.card}`}>
            <div className="flex items-center gap-1.5" aria-hidden>
              {ranks.map((_, j) => (
                <span key={j} className={`h-1.5 flex-1 rounded-full ${j <= i ? s.bar : dark ? "bg-white/15" : "bg-line"}`} />
              ))}
            </div>
            <div className="mt-6 flex items-start justify-between gap-3">
              <div>
                <p className={`text-xs font-semibold tracking-widest uppercase ${dark ? "text-white/60" : "text-muted"}`}>
                  Rank {i + 1} · {rank.stage}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight">
                  <span aria-hidden>{rank.emoji}</span> {rank.name}
                </h3>
              </div>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${s.badge}`}>{rank.range}</span>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{rank.description}</p>
            {showEligibility && (
              <p
                className={`mt-auto pt-5 text-sm font-medium ${dark ? "text-lime" : "text-brand-700"}`}
              >
                Eligibility: {rank.eligibility}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
