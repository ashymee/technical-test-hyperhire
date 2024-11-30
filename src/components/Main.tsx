'use client';

import background from '@assets/images/background.png';
import Image from 'next/image';
import Carousel from './Carousel';
import Landing, { LandingMobile } from './Landing';
import SliderContent from './SliderContent';

export default function Main() {
  return (
    <main className="w-full flex items-center justify-center overflow-hidden p-4 2xl:p-0">
      <div className="h-full md:h-svh 2xl:h-[929px] w-full 2xl:w-[1200px] flex flex-col items-center justify-end gap-y-10 pb-4 md:pb-10 2xl:pb-[119px] pt-[100px] 2xl:pt-0">
        <div className="flex flex-1 flex-col md:flex-row w-full items-center justify-end md:gap-6 2xl:gap-2">
          <Landing />

          <Carousel />

          <LandingMobile />
        </div>

        <SliderContent />
      </div>

      {/* background */}
      <div className="include absolute top-0 left-0 right-0 bottom-0 -z-10 h-[950px] md:h-svh 2xl:h-[929px]">
        <Image
          src={background}
          alt="background"
          fill
          className="opacity-80 z-10 object-cover object-center md:object-bottom mix-blend-color-burn"
        />
        <div className="bg-gradient-to-br from-[#26C2B9] to-[#288BE7] h-full 2xl:h-[929px] w-full absolute top-0 left-0 z-0"></div>
      </div>
    </main>
  );
}
