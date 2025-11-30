'use client';

import React from 'react';
import { Carousel } from '@/components/ui/how-it-works-carousel';
import { dataForHowItWorksSection } from '@/lib/data';

export function SlideForHowItWorksSection() {
  return <Carousel items={dataForHowItWorksSection} />;
}
