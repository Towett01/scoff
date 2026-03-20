
import Container from "@/components/container";
import FlexPackages from "@/components/flexPackages";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "scofservices - Flex Packages",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
};

export default function Airtime() {
  return (
    <div className="overflow-hidden">
      <Container>
        <FlexPackages />
      </Container>
    </div>
  );
}