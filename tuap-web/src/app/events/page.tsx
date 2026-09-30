import type { Metadata } from "next";
import { EventsBrowser } from "@/components/events-browser";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events & Campaigns",
  description: "Upcoming events, challenges, and campus initiatives.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="🎯 Events & campaigns"
        title="Events, challenges, and campus initiatives."
        lead="Real-world impact doesn't happen only on social media. Join campaigns, workshops, webinars, and activations — online and offline."
      />
      <Section>
        <EventsBrowser />
      </Section>
    </>
  );
}
