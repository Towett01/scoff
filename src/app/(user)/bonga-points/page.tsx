
import Container from "@/components/container";
import BongaPoint from "@/components/bongaPoints";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "scofservices - Bonga Point",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
};

export default function Airtime() {
  return (
    <div className="overflow-hidden">
      <Container>
        <BongaPoint />
      </Container>
    </div>
  );
}