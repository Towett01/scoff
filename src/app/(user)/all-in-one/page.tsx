
import Container from "@/components/container";
import AllInOne from "@/components/allInOne";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "scofservices - All In One",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
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