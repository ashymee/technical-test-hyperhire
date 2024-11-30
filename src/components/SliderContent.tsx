'use client';

import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Icons } from './Icons';
import Loader from './Loader';

export default function SliderContent() {
  const [sliderContent, setSliderContent] = useState<SliderContent[]>([]);
  const [sliderContentLoaded, setSliderContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchSliderContent = async () => {
      const response = await fetch('/api/v1/slider-content');
      const data = await response.json();

      if (data.data) {
        setTimeout(() => {
          setSliderContent(data.data);
          setSliderContentLoaded(true);
        }, 2500);
      }
    };

    fetchSliderContent();
  }, []);

  return (
    <div className="hidden md:flex flex-none items-start justify-start w-full overflow-hidden rounded-lg">
      {!sliderContentLoaded ? (
        <Loader size={1} isSlider />
      ) : (
        <Marquee pauseOnHover pauseOnClick speed={50}>
          <div className="flex items-center text-white">
            {sliderContent.map((item, index) => (
              <div
                className="w-[332] h-[88] mr-4 bg-white/20 hover:bg-white/30 cursor-pointer transition-all rounded-xl flex items-center p-4 gap-6"
                key={index}>
                <div className="bg-white/20 rounded-lg p-4">
                  <Icons name={item.icon} />
                </div>

                <div className="text-2xl">{item.title}</div>
              </div>
            ))}
          </div>
        </Marquee>
      )}
    </div>
  );
}
