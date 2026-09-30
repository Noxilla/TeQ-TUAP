import type { Metadata } from "next";
import { ResourcesBrowser } from "@/components/resources-browser";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources Hub",
  description: "Templates, branding kits, caption banks, and performance trackers for TeQ Ambassadors.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="💼 Resources hub"
        title="We don't just give you a title — we give you the tools to lead like a pro."
        lead="Whether you're posting online, running a prep group, or speaking on stage, this hub has your back."
      >
        <p className="inline-flex max-w-2xl gap-2 rounded-2xl bg-[#fff4d6] px-4 py-3 text-sm text-[#6b4700]">
          <span aria-hidden>🔒</span>
          All resources are for official TeQ Ambassador use only and are shared with you during onboarding. Please do
          not share them outside the tribe.
        </p>
      </PageHero>
      <Section>
        <ResourcesBrowser />
      </Section>
    </>
  );
}
