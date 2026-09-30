import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { socials, telegramCommunity } from "@/data/tuap";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Get in touch with your squad supervisor or TUAP HQ.",
};

const channelStyles: Record<string, string> = {
  WhatsApp: "bg-[#1f9d55] text-white",
  Telegram: "bg-[#2f6feb] text-white",
  Instagram: "bg-[#e4508f] text-white",
  X: "bg-ink text-white",
  TikTok: "bg-[#7c5cfa] text-white",
  Facebook: "bg-[#1f55c2] text-white",
};

export default function ContactPage() {
  const channels = [
    { label: "Telegram", handle: telegramCommunity.label, href: telegramCommunity.href },
    ...socials,
  ];

  return (
    <>
      <PageHero
        eyebrow="✉️ Contact & support"
        title="Get in touch with TUAP HQ."
        lead="Reach your squad supervisor or the TUAP team on any of our official channels."
      />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex h-full min-h-44 flex-col justify-between rounded-3xl p-6 transition-transform hover:-translate-y-0.5 ${
                  channelStyles[c.label] ?? "bg-white ring-1 ring-line"
                }`}
              >
                <span className="text-sm font-medium opacity-75">{c.handle}</span>
                <span className="flex items-end justify-between gap-3">
                  <span className="font-display text-3xl font-bold">{c.label}</span>
                  <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden>
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
