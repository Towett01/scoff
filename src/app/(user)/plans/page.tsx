import Container from "@/components/container";
import HotDeals from "@/components/TopUpNow";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Plans & Packages - Top Up Now",
  description:
    "Browse all SSTOPUP Exchange packages — airtime, data, Bonga Points, calls, SMS, Bingwa Sokoni, Flex Packages, Hot Deals & All-in-One bundles. Buy via website, WhatsApp, or offline.",
};

export default function Airtime() {
  return (
    <div className="overflow-hidden">
      <Container>
        <HotDeals />
      </Container>
    </div>
  );
}