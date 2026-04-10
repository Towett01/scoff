import Container from "@/components/container";
import CallAndMunites from "@/components/callsMunites";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Calls & Minutes - Affordable Voice Bundles",
  description:
    "Buy affordable call minutes and voice bundles for Safaricom. Manage your calls easily with SSTOPUP Exchange.",
};

export default function Airtime() {
  return (
    <div className="overflow-hidden">
      <Container>
        <CallAndMunites />
      </Container>
    </div>
  );
}