import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-brand-600 uppercase">
      <span className="size-1.5 rounded-full bg-brand-500" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{lead}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-brand-50/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-lime/40 blur-3xl"
      />
      <Container className="relative py-16 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
}) {
  const styles = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
    secondary: "bg-white text-ink ring-1 ring-line hover:ring-ink/30",
    light: "bg-lime text-ink hover:bg-white",
  }[variant];
  const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

export function CtaBand({
  title = "Ready to build the career behind your passion?",
  lead = "You don't need to have everything figured out. You need the willingness to learn, build, contribute, and grow.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-14 text-white sm:px-14">
        <div aria-hidden className="absolute -right-20 -bottom-24 size-80 rounded-full bg-lime/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/75">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/apply" variant="light">
              Become an Ambassador <Arrow />
            </ButtonLink>
            <Link
              href="/how-it-works"
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/10"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
