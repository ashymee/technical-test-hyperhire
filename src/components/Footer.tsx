'use client';

import { useEffect, useState } from 'react';
import { Icons } from './Icons';
import Loader from './Loader';

export default function Footer() {
  const [footerContent, setFooterContent] = useState<FooterContent | null>(null);
  const [footerContentLoaded, setFooterContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchFooterContent = async () => {
      const response = await fetch('/api/v1/footer-content');
      const data = await response.json();

      if (data.data) {
        setTimeout(() => {
          setFooterContent(data.data);
          setFooterContentLoaded(true);
        }, 2000);
      }
    };

    fetchFooterContent();
  }, []);

  if (!footerContentLoaded) {
    return <Loader size={12} />;
  }

  return (
    <footer className="w-full flex items-center justify-center py-8 mt-10 md:mt-0">
      <div className="2xl:w-[1200] h-max px-4 pb-6 2xl:px-0 2xl:pb-0 flex flex-col gap-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6">
          <div className="min-h-20 col-span-4 md:col-span-4 flex flex-col gap-2 font-bold">
            <div className="mb-6">
              <Icons name="logo-md" />
            </div>
            <div className="text-[14]">{footerContent?.desc}</div>
            <div className="text-[14]">{footerContent?.phone}</div>
            <div className="text-[14]">{footerContent?.email}</div>
          </div>

          {footerContent?.services.map((item, index) => (
            <div className="min-h-20 py-4 flex flex-col gap-4 col-span-2 text-[14]" key={index}>
              <div className="px-4 h-8 flex items-center">
                <Icons name={item.icon} />
              </div>
              <div className="font-bold">{item.name}</div>
              <button className="flex items-center gap-1 w-fit group">
                <div className="text-[#5E626F]">바로가기</div>
                <div className="group-hover:translate-x-1 transition-all group-active:translate-x-2">
                  <Icons name="icon-arrow" />
                </div>
              </button>
            </div>
          ))}

          {footerContent?.details.map((item, index) => (
            <div
              key={index}
              className={`w-full flex flex-col gap-2 font-extrabold ${
                index === 0 || index === 2
                  ? 'col-span-3'
                  : index === footerContent.details.length - 1
                  ? 'col-span-4'
                  : 'col-span-2'
              }`}>
              <div>{item.title}</div>
              <div>{item.name}</div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="font-bold text-[13]">ⓒ {new Date().getFullYear()} Hyperhire</div>
      </div>
    </footer>
  );
}
