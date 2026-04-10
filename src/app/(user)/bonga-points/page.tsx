import Container from "@/components/container";
import BongaPoint from "@/components/bongaPoints";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bonga Points - Buy, Redeem & Convert to Cash",
  description:
    "Buy Safaricom Bonga Points, redeem for airtime or cash through SSTOPUP Exchange. Fast, secure, and affordable.",
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