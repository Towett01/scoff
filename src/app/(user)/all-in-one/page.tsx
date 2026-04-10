import Container from "@/components/container";
import AllInOne from "@/components/allInOne";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "All-in-One Packages - Data, Airtime, Calls & SMS Combined",
  description:
    "Get the best value with SSTOPUP Exchange All-in-One packages — data, airtime, calls, and SMS in a single affordable bundle.",
};

export default function Airtime() {
  return (
    <div className="overflow-hidden">
      <Container>
        <AllInOne />
      </Container>
    </div>
  );
}