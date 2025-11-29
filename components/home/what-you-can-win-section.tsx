import { whatYouCanWinData } from '@/lib/data';
import Image from 'next/image';

export default function WhatYouCanWinSection() {
  return (
    <section className="min-h-screen pt-[76px] pb-[58px] bg-linear-to-br from-[#0A0A0A] via-[#111827] to-[#000] flex flex-col justify-center">
      <div className="space-y-[53px]">
        <h3 className="font-cairo text-[4rem] font-black leading-18 text-white text-center">
          ما يمكنك الفوز به
        </h3>
        <p className="font-cairo text-[1.5rem] font-normal text-white leading-8.25 text-center">
          اكتشف الجوائز المذهلة التي تنتظرك طوال التحدي
        </p>
      </div>

      <div className="max-w-[1286px] w-full mx-auto flex gap-[71px] pt-[76px] pb-[44px] px-4">
        {whatYouCanWinData.map(
          ({ icon, heading, list, description, buttonText }, index) => {
            return (
              <div
                key={index}
                className="w-[385px] h-[599px] rounded-[15px]  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF]  p-[1.5px]"
              >
                <div className="w-full h-full flex flex-col justify-evenly rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer">
                  <Image
                    src={icon}
                    width={127}
                    height={127}
                    alt="creta treasure hunt"
                    className="mx-auto"
                  />
                  <h3 className="text-[1.75rem] text-center text-white font-extrabold">
                    {heading}
                  </h3>
                  {description && (
                    <p className="text-center font-cairo text-[1.5rem] font-normal leading-8.25">
                      {description}
                    </p>
                  )}
                  {list.map((item, index) => (
                    <ul key={index}>
                      <li className="font-cairo text-[1.25rem] font-normal leading-8.25 text-right">
                        {item}
                      </li>
                    </ul>
                  ))}
                  <button className="w-[343px] h-[78px] mx-auto z-40 rounded-[15px] font-cairo font-semibold text-[1.5rem] flex items-center justify-center text-center leading-[2.0625rem] text-white bg-[#142A4F]">
                    {buttonText}
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
      <button className="mx-auto mt-[78px] rounded-[100px] font-cairo text-[#1E293B] text-[2rem] font-extrabold leading-24 w-[393px] h-[82.59px] text-center flex justify-center items-center gap-[13px] bg-gradient-to-r from-[#3B82F6] to-[#0FF] ">
        <Image
          src={'/assets/arrow.svg'}
          width={48}
          height={48}
          alt="arrow icon"
        />
        عرض جميع الجوائز
      </button>
    </section>
  );
}
