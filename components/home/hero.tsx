'use client';

import { countdownTimer } from '@/lib/data';
import { useTypewriter } from '@/hooks/useTypewriter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  const typedText1 = useTypewriter('امتلكه.', 100);
  const typedText2 = useTypewriter('ابحث عنه.', 100);

  return (
    <div className="bg-[url(/assets/creta-background.png)] bg-center bg-no-repeat bg-cover w-full  px-4 py-[40px] min-h-[50vh] lg:min-h-screen lg:pt-[87px] lg:pb-[99px]">
      <div className="max-w-[1296px] w-full mx-auto flex justify-end">
        {/* right-col */}

        <div className="text-right flex flex-col items-end">
          <div className="w-[156px] h-[36px] mb-[47px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-full p-[1.5px] ml-auto lg:w-[234px] g:h-[78px]">
            <button
              type="button"
              className="w-full h-full flex items-center justify-center rounded-full bg-[#0A0A0A] text-white font-normal font-cairo text-[0.67rem]  leading-[4rem] lg:text-base lg:leading-24 hover:cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95"
            >
              التحدي النهائي في انتظارك
            </button>
          </div>
          <h1 className="font-cairo text-white font-black text-[2.65rem] leading-[2.27rem] lg:text-[5.25rem] lg:leading-[4.5rem] flex">
            <span className="text-[#3B82F6]" style={{ marginRight: '0.5rem' }}>
              {typedText1}
            </span>
            <span>{typedText2}</span>
          </h1>

          <p className="font-cairo text-white  font-bold text-right text-[1.1rem] mt-[23.7px] lg:text-[2.25rem] lg:leading-[4.5rem] lg:mt-[47px] ">
            تحدي هيونداي كريتا النهائي
          </p>
          <p className="font-cairo  text-white  text-right  ml-auto mt-[23.3px] text-[0.5rem] font-normal leading-4 lg:w-[671px]  lg:text-base  lg:leading-[2.0625rem]">
            انضم إلى رحلة البحث عن الكنز التفاعلية التي تستمر لعشرة أيام، واحصل
            على فرصة للفوز بسيارة هيونداي كريتا الجديدة كليًا. اتبع الأدلة،
            وأكمل المهام اليومية، وتسابق للفوز بالجائزة الكبرى.
          </p>
          <div className="space-y-8 mt-[33px] lg:mt-[58px]">
            <p className="text-[#3B82F6] font-cairo text-right  font-extrabold text-base leading-[1.37rem] lg:text-[1.5rem] lg:leading-[2.0625rem] ">
              يبدأ التحدي في:
            </p>
            {/* boxes */}
            <div className="flex justify-end gap-x-4">
              {countdownTimer.map(({ heading, description }, index) => (
                <article
                  key={index}
                  className="w-[67.55px] h-[90.59px] rounded-[15px]  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] p-[1.5px] lg:w-[92px] lg:h-[107px]"
                >
                  <div className="w-full h-full flex flex-col  justify-center rounded-[13px] bg-[#0A0A0A]  font-cairo hover:cursor-pointer ">
                    <h3 className=" text-center text-white mt-[-20px]  font-bold text-[2rem] leading-[4rem] lg:text-[3rem] lg:leading-[6rem]">
                      {heading}
                    </h3>
                    <p className="text-center  text-[#488EFF] mt-[-10px]  font-normal text-[0.8rem] leading-[1rem] lg:mt-[-25px] lg:text-[1.25rem] lg:leading-[2.0625rem]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            id="button-group"
            className="flex gap-[17px] justify-end mt-[58px]"
          >
            <div className="w-[200px] h-[33px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-full p-[1.5px] ml-auto lg:w-[343px] lg:h-[67px]">
              <button
                type="button"
                className="w-full h-full flex items-center gap-x-4 justify-center rounded-full bg-[#0A0A0A] text-white font-bold font-cairo text-[0.74rem] leading-[2.98rem] lg:text-[1.5rem] lg:leading-24  hover:cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95"
              >
                <Image
                  src={'/assets/play-music-icon.svg'}
                  width={24}
                  height={24}
                  className="hidden lg:block"
                  alt="play-video-icon"
                />
                <Image
                  src={'/assets/play-music-icon.svg'}
                  width={12}
                  height={12}
                  alt="play-video-icon"
                  className="block  lg:hidden"
                />
                التحدي النهائي في انتظارك
              </button>
            </div>
            <Link
              href={'/sign-up'}
              className="w-[99px]  h-[33px] bg-gradient-to-l from-[#3B82F6] to-[#0FF] rounded-[100px] text-[#1E293B] font-cairo  font-bold  flex items-center justify-center text-[0.74rem]  leading-[2.9rem]  lg:text-[1.5rem] lg:leading-[6rem] lg:w-[200px] lg:h-[67px] hover:scale-105 transition-transform duration-300 active:scale-95"
            >
              سجل الآن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
