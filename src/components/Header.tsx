'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Icons } from './Icons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full h-[60px] fixed top-0 flex items-center justify-center text-white z-[99] transition-all px-4 2xl:px-0 ${
        isScrolled ? 'bg-[#214689]/30 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
      <div className="w-full 2xl:w-[1200] flex items-center justify-between">
        <div className="md:w-[115px]">
          <Icons name="logo-sm" />
        </div>

        <div className="hidden md:flex gap-10">
          <div className="group relative cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="">채용</div>
              <div className="group-hover:-rotate-180 transition-all delay-500">
                <Icons name="icon-chevron-down" />
              </div>
            </div>

            <div className="absolute -z-50 group-hover:z-10 -top-[150px] group-hover:top-10 left-1/2 transform -translate-x-1/2 opacity-10 group-hover:opacity-100 transition-all delay-500">
              <div className="w-max px-8 py-4 bg-white rounded-xl flex flex-col items-start justify-center text-[#344054] shadow-2xl">
                <div className="font-poppins font-extrabold text-[14px]">채용</div>
                <Link className="text-[14px] opacity-75 hover:opacity-100" href="/">
                  해외 개발자 원격 채용
                </Link>
                <Link className="text-[14px] opacity-75 hover:opacity-100" href="/">
                  외국인 원격 채용 (비개발 직군)
                </Link>
                <Link className="text-[14px] opacity-75 hover:opacity-100" href="/">
                  한국어 가능 외국인 채용
                </Link>
              </div>
            </div>
          </div>

          <div className="font-extrabold">해외 개발자 활용 서비스</div>
        </div>

        <div className="w-[115px] hidden md:flex items-start justify-end">
          <button
            type="button"
            className="bg-white text-[#4A77FF] font-poppins py-[6px] px-6 rounded-lg active:translate-y-[1px] transition-all">
            문의하기
          </button>
        </div>

        {/* button for mobile */}
        <button type="button" className="flex md:hidden scale-50 active:translate-y-[1px]">
          <Icons name="icon-hamburger" />
        </button>
      </div>
    </header>
  );
}
