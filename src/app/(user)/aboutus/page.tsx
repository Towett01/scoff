import AboutBanner from "@/components/aboutBanner";
import AboutContent from "@/components/AboutContent";
import Container from "@/components/container";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us - Who We Are",
  description:
    "Learn about Scof Services and SSTOPUP Exchange — Kenya's trusted platform for affordable airtime, data bundles, Bonga Points, and more.",
};

export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Container>
        <AboutBanner />
      </Container>
      <AboutContent />
    </div>
  );
}