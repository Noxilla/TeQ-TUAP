import type { Metadata } from "next";
import Link from "next/link";
import { OnboardingChecklist } from "@/components/onboarding-checklist";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Everything you need to start strong as a TeQster.",
};

export default function OnboardingPage() {
  return (
    <>
      <PageHero
        eyebrow="🌱 Onboarding"
        title="Everything you need to start strong as a TeQster."
        lead="Complete the steps below to understand the TUAP ecosystem and unlock TUAP tools. Follow each step one after the other — don't skip or jump a step."
      >
        <p className="text-sm text-muted">
          Phase 1 (Foundation Setup) happens when you{" "}
          <Link href="/apply" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
            apply
          </Link>
          . Your progress is saved in this browser.
        </p>
      </PageHero>
      <Section>
        <OnboardingChecklist />
      </Section>
    </>
  );
}
