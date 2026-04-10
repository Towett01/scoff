import Channels from "@/components/AtYourService";
import Container from "@/components/container";
import ServiceBanner from "@/components/servicesBanner"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Services - Airtime, Data, Bonga Points & More",
  description:
    "Explore SSTOPUP Exchange services — buy airtime, data bundles, Bonga Points, Okoa Jahazi, calls, SMS, Bingwa Sokoni, Flex Packages & Hot Deals in Kenya.",
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