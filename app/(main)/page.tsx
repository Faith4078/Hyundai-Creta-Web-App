import CountdownSection from '@/components/home/countdown-section';
import Hero from '@/components/home/hero';
import HowItWorksSection from '@/components/home/how-it-works-section';
import LaunchVideoSection from '@/components/home/launch-video-section';
import WhatYouCanWinSection from '@/components/home/what-you-can-win-section';

export default function Home() {
  return (
    <main className=" overflow-x-clip min-h-screen w-full  ">
      <Hero />
      <LaunchVideoSection />
      <CountdownSection />
      <HowItWorksSection />
      <WhatYouCanWinSection />
    </main>
  );
}
