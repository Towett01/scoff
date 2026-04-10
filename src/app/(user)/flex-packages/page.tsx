import Container from "@/components/container";
import HotDeals from "@/components/hotDeals";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hot Deals - Limited Time Offers & Discounts",
  description:
    "Don't miss SSTOPUP Exchange hot deals — limited-time discounts on airtime, data bundles, and Safaricom packages in Kenya.",
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