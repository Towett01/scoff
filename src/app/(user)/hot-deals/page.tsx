
import Container from "@/components/container";
import HotDeals from "@/components/hotDeals";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "scofservices - HotDeals",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
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