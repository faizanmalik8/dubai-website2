import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Dynamically import below-the-fold components to improve Speed Index and reduce initial JS bundle size
const Pricing = dynamic(() => import('@/components/Pricing'));
const HowToBuy = dynamic(() => import('@/components/HowToBuy'));
const ImageGrid = dynamic(() => import('@/components/ImageGrid'));
const WhyBest = dynamic(() => import('@/components/WhyBest'));
const Devices = dynamic(() => import('@/components/Devices'));
const WhyChooseService = dynamic(() => import('@/components/WhyChooseService'));
const Stats = dynamic(() => import('@/components/Stats'));
const Carousel = dynamic(() => import('@/components/Carousel'));
const Features = dynamic(() => import('@/components/Features'));
const Installation = dynamic(() => import('@/components/Installation'));
const FAQ = dynamic(() => import('@/components/FAQ'));

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
