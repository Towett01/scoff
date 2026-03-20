import AboutBanner from "@/components/aboutBanner";
import AboutSection1 from "@/components/OurServices";
import Container from "@/components/container";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "scofservices - About Us",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
};


export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Container>
        <AboutBanner />
        <AboutSection1 />
      </Container>
    </div>
  );
}
