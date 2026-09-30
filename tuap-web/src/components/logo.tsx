export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid size-9 place-items-center rounded-xl font-display text-lg font-extrabold ${
          inverted ? "bg-lime text-ink" : "bg-brand-600 text-white"
        }`}
        aria-hidden
      >
        Q
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold tracking-tight ${inverted ? "text-white" : "text-ink"}`}>
          TUAP
        </span>
        <span className={`block text-[11px] font-medium ${inverted ? "text-white/60" : "text-muted"}`}>
          by TheEnglish CliniQ
        </span>
      </span>
    </span>
  );
}
