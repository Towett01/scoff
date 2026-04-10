import HomeBanner from "@/components/homeBanner";
import Container from "@/components/container";
import OurService from "@/components/OurServices";
import WhyUs from "@/components/WhyUs";

export default async function Home() {
  return (
    <div className="overflow-hidden">
      <Container>
        <HomeBanner />
        <OurService/>
        <WhyUs/>
      </Container>
    </div>
  );
}