
import Container from "@/components/container";
import CallAndMunites from "@/components/callsMunites";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "scofservices - Call & Munites",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
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