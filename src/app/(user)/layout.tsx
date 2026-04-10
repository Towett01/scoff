import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import Footer from "@/components/footer";
import ReferPopup from "@/components/ReferPopup";

export const metadata: Metadata = {
  title: "SSTOPUP Exchange | Buy Airtime, Data & Bundles - Scof Services",
  description:
    "Buy affordable airtime, data bundles, Bonga Points, Okoa Jahazi, calls & SMS in Kenya. Top up via website, WhatsApp Bot, or offline. 24/7 service.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      {children}
      <Footer />
      <ReferPopup />
    </>
  );
}