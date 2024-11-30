'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function Landing() {
  const [landingContent, setLandingContent] = useState<LandingContent | null>(null);
  const [landingContentLoaded, setLandingContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchLandingContent = async () => {
      const response = await fetch('/api/v1/landing-content');
      const data = await response.json();

      if (data.data) {
        setTimeout(() => {
          setLandingContent(data.data);
          setLandingContentLoaded(true);
        }, 1500);
      }
    };

    fetchLandingContent();
  }, []);

  if (!landingContentLoaded) {
    return <Loader size={1} />;
  }

  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-y-6 2xl:gap-y-8">
      <div className="h-52 md:h-[160px] w-full relative overflow-hidden">
        <motion.div
          className="bg-[#8BC4FF] md:bg-white text-white md:text-[#40E2E8] font-poppins relative text-2xl font-extrabold rounded-lg px-3 py-[6px] w-max before:block before:content-[''] before:absolute before:w-2 before:h-2 before:rotate-45 before:top-10 before:bg-[#8BC4FF] md:before:bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}>
          개발자가 필요하신가요?
        </motion.div>

        <motion.div
          data-tooltip-id="landing-title"
          className="font-poppins text-white text-5xl absolute left-0 h-96 w-full"
          initial={{ opacity: 0, top: 100 }}
          animate={{
            opacity: 1,
            delay: 50,
            top: 60,
          }}>
          {landingContent?.title}
        </motion.div>
      </div>

      <div className="hidden md:flex h-[70px] relative w-full overflow-hidden">
        <motion.div
          className="w-full h-[70px] absolute left-0 gap-y-4 flex flex-col overflow-hidden"
          initial={{ opacity: 0, top: 100 }}
          animate={{
            opacity: 1,
            delay: 50,
            top: 0,
          }}>
          <div className="flex font-poppins text-white text-xl 2xl:text-2xl">
            {landingContent?.subtitle.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <div className="font-poppins text-white flex text-[18px]">{landingContent?.question}</div>
        </motion.div>
      </div>

      <div className="font-poppins text-white flex md:hidden text-[18px]">{landingContent?.desc}</div>

      <div className="font-poppins text-white hidden md:flex gap-x-4 2xl:gap-x-8">
        {landingContent?.offers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.3 * (index + 1),
              },
            }}>
            <div className="border-t-2 w-32 mb-2" />
            <p className="text-[16px] 2xl:text-[18px]">{item.name}</p>
            <p className="opacity-80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const LandingMobile = () => {
  const [landingContent, setLandingContent] = useState<LandingContent | null>(null);

  useEffect(() => {
    const fetchLandingContent = async () => {
      const response = await fetch('/api/v1/landing-content');
      const data = await response.json();

      if (data.data) {
        setTimeout(() => {
          setLandingContent(data.data);
        }, 1500);
      }
    };

    fetchLandingContent();
  }, []);

  return (
    <div className="flex flex-col gap-y-4 md:hidden font-poppins text-[18px] w-full">
      <div className="grid grid-cols-2 gap-2 text-white">
        {landingContent?.skills.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <input type="checkbox" checked readOnly className="w-4 h-4 accent-white" />
            <div className="">{item}</div>
          </div>
        ))}
      </div>
      <div className="text-[#FBFF23]">{landingContent?.question}</div>
    </div>
  );
};
