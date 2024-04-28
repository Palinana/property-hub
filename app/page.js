import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Homepage/Hero';
import InfoBoxes from '@/components/Homepage/InfoBoxes';
import HomeProperties from '@/components/Homepage/HomeProperties';

const HomePage = () => {
  return (
    <>
        <Hero />
        <InfoBoxes />
        <HomeProperties />
    </>
  )
}

export default HomePage
