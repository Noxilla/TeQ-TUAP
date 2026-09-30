import Link from "next/link";
import { nav, socials } from "@/data/tuap";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            The TeQ University Ambassador Programme is a career development and practical learning ecosystem by
            TheEnglish CliniQ (TeQ) Ltd.
          </p>
          <p className="mt-6 font-display text-2xl font-bold text-lime">Learn. Lead. Excel.</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest text-white/50 uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...nav, { href: "/onboarding", label: "Onboarding" }, { href: "/apply", label: "Apply" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest text-white/50 uppercase">Follow TeQ</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                  {s.label} <span className="text-white/40">· {s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} TheEnglish CliniQ (TeQ) Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
