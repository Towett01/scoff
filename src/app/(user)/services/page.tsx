import Channels from "@/components/AtYourService";
import Container from "@/components/container";
import ServiceBanner from "@/components/servicesBanner"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "scofservices - Services",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
};
export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Container>
        <ServiceBanner/>
        <Channels/>
      </Container>
    </div>
  );
}