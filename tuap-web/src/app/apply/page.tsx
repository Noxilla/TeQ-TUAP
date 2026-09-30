import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { PageHero, Section } from "@/components/ui";
import { applicationPrep } from "@/data/tuap";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to begin your TUAP journey.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Application zone"
        title="Apply to begin your TUAP journey."
        lead="It takes about 5 minutes. You don't need to have everything figured out — you need the willingness to learn, build, contribute, and grow."
      >
        <div className="max-w-2xl rounded-2xl bg-white p-5 ring-1 ring-line">
          <p className="text-sm font-semibold">🔹 Phase 1 · Foundation setup — before you apply</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3">
            {applicationPrep.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className="text-brand-500" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageHero>
      <Section>
        <ApplicationForm />
      </Section>
    </>
  );
}
