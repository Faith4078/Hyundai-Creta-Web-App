import { dataForHowItWorksSection } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

export default function HowItWorksSection() {
  return (
    <section className="min-h-screen py-[111px] bg-linear-to-br from-[#0A0A0A] via-[#111827] to-[#000] flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-cairo  text-[4rem] text-white text-center leading-18 font-black">
          كيف يعمل
        </h3>
        <p className="font-cairo text-[1.5rem] text-white text-center leading-8.25 max-w-[813px] w-full font-normal mt-[55px] mb-[52px] mx-auto">
          ثلاث خطوات بسيطة للانضمام إلى تحدي هيونداي كريتا النهائي والفوز بجوائز
          مذهلة
        </p>
      </div>
      <div className="max-w-[1296px] w-full mx-auto px-4  mt-[111px] flex justify-center gap-[39px] ">
        {dataForHowItWorksSection.map(
          ({ icon, heading, description, buttonText }, index) => {
            return (
              <article
                className=" flex flex-col justify-between gap-y-[78px]"
                key={index}
              >
                <div>
                  <Image
                    src={icon}
                    width={148}
                    height={148}
                    className="mx-auto"
                    alt="creta car image"
                  />
                  <h3 className="text-[2rem] text-center font-cairo text-white font-black leading-18 ">
                    {heading}
                  </h3>
                  <p className="max-w-[406px] text-[1.5rem] font-cairo text-white text-center font-normal leading-8.25">
                    {description}
                  </p>
                </div>

                {/* <button
                  type="button"
                  className=" w-[343px] h-[78px] border-none outline-none  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] flex items-center justify-center rounded-[15px]  text-white font-normal font-cairo text-[1.5rem]  p-[1.5px]   hover:cursor-pointer "
                >
                  <div className="rounded-[15px] w-full h-full flex items-center justify-center bg-[#3B82F6]/10">
                    {buttonText}
                  </div>
                </button> */}
                <div className="w-[343px] h-[78px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[15px] p-[1.5px]">
                  <button
                    type="button"
                    className="w-full h-full flex items-center justify-center rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer"
                  >
                    {buttonText}
                  </button>
                </div>
              </article>
            );
          }
        )}
      </div>
      <button className="mx-auto mt-[78px] rounded-[100px]  font-cairo text-[#1E293B] text-[2rem] font-extrabold leading-24 w-[261px] h-[67px] text-center flex justify-center items-center gap-[13px] bg-gradient-to-r from-[#3B82F6] to-[#0FF] ">
        <Image
          src={'/assets/arrow.svg'}
          width={48}
          height={48}
          alt="arrow icon"
        />{' '}
        ابدأ الآن
      </button>
    </section>
  );
}
