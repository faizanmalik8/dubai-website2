import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import HowToBuy from '@/components/HowToBuy';
import ImageGrid from '@/components/ImageGrid';
import WhyBest from '@/components/WhyBest';
import Devices from '@/components/Devices';
import WhyChooseService from '@/components/WhyChooseService';
import Stats from '@/components/Stats';
import Carousel from '@/components/Carousel';
import Features from '@/components/Features';
import Installation from '@/components/Installation';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <HowToBuy />
      <ImageGrid />
      <WhyBest />
      <Devices />
      <WhyChooseService />
      <Stats />
      <Carousel />
      <Features />
      <Installation />
      <FAQ />
    </>
  );
}
