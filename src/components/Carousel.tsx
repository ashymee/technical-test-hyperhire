'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { Icons } from './Icons';
import Loader from './Loader';

export default function Carousel() {
  const [carouselContent, setCarouselContent] = useState<CarouselContent[]>([]);
  const [carouselContentLoaded, setCarouselContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchCarouselContent = async () => {
      const response = await fetch('/api/v1/carousel-content');
      const data = await response.json();

      if (data.data) {
        setTimeout(() => {
          setCarouselContent(data.data);
          setCarouselContentLoaded(true);
        }, 2000);
      }
    };

    fetchCarouselContent();
  }, []);

  if (!carouselContentLoaded) {
    return <Loader size={1} />;
  }

  return (
    <div className="w-full min-h-[408] flex items-center md:gap-8 mt-6 md:mt-0">
      <div className="md:px-2">
        <button className="hover:-translate-x-1 transition-all" type="button">
          <Icons name="icon-chevron-left" width={32} height={32} />
        </button>
      </div>

      <div className="scale-[0.8] md:scale-100 flex-1 h-full flex gap-4 relative">
        {carouselContent.map((item, index) => (
          <div
            data-tooltip-id={`carousel-content-${index + 1}`}
            className={`p-9 h-[408] w-fit rounded-xl bg-white border gap-9 flex flex-col items-center justify-between absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              index === 0 ? 'z-10 scale-100' : 'scale-90'
            } ${index === 1 ? 'left-[30%]' : index === 2 ? 'left-[70%]' : 'left-1/2'}`}
            key={item.id}
            style={{
              boxShadow: index === 0 ? '0 0 0.5em #999' : '',
            }}>
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-[120] h-[120]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image src={item.avatar} alt={`avatar ${index + 1}`} width={400} height={200} />
                </div>

                <div className="h-[18] w-[25] absolute bottom-1 right-1 z-30">
                  <Image src={item.nationality} alt="nationality" width={400} height={200} className="rounded-[2px]" />
                </div>
              </div>

              <div className="gap-9">
                <div className="font-extrabold font-poppins text-2xl">{item.name}</div>
                <div className="text-[#4A77FF] text-base font-poppins text-center">
                  {item.experience[0]} · <span className="font-extrabold">{item.experience[1]}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-flow-row auto-cols-max gap-2 w-full h-fit">
              {item.skills.map((skill, skillIndex) => (
                <div
                  // className="py-1 px-1 border border-[#C1C5CF] border-dashed rounded-md m-auto"
                  className={`text-center px-4 py-1 rounded-md border border-[#C1C5CF] w-fit mx-auto ${
                    skillIndex < 2 ? 'col-span-2' : '' // Elemen pertama memakan 2 kolom
                  }`}
                  key={skillIndex}>
                  <div className="">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Tooltip id="carousel-content-1" place="top" className="!bg-white !text-[#00C696] font-poppins font-extrabold">
        <div className="flex items-center gap-4">
          <div className="">
            <Icons name="icon-dollar" />
          </div>
          <div>{carouselContent[0].rate}</div>
        </div>
      </Tooltip>

      <div className="md:px-2">
        <button className="hover:translate-x-1 transition-all" type="button">
          <Icons name="icon-chevron-right" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}
