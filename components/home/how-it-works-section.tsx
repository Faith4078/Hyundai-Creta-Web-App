import { dataForHowItWorksSection } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { SlideForHowItWorksSection } from '../global/slide-for-how-it-works';

export default function HowItWorksSection() {
  return (
    <section className="min-h-[50vh] py-[50px] bg-linear-to-br from-[#0A0A0A] via-[#111827] to-[#000] flex flex-col justify-center lg:min-h-screen  lg:py-[111px]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-cairo   text-white text-center  font-black text-[1.89rem] leading-[2.13631rem] lg:text-[4rem] lg:leading-18">
          كيف يعمل
        </h3>
        <p className="font-cairo  text-white text-center  max-w-[293px] w-full font-normal mt-[31px] mb-[53px] mx-auto text-[0.71213rem] leading-[0.97913rem] lg:mt-[55px] lg:mb-[52px] lg:max-w-[813px] lg:text-[1.5rem] lg:leading-8.25">
          ثلاث خطوات بسيطة للانضمام إلى تحدي هيونداي كريتا النهائي والفوز بجوائز
          مذهلة
        </p>
      </div>
      <div className="max-w-[1296px] w-full mx-auto px-4  ">
        <div className=" hidden w-full lg:flex justify-center gap-[39px] ">
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
        <SlideForHowItWorksSection />
      </div>
      <button className="mx-auto mt-0 rounded-[100px]  font-cairo text-[#1E293B] text-[1.30275rem] font-extrabold leading-[3.90825rem] w-[170px] h-[43px] text-center flex justify-center items-center gap-[13px] bg-gradient-to-r from-[#3B82F6] to-[#0FF] lg:w-[261px] lg:h-[67px] lg:text-[2rem] lg:leading-24  lg:mt-[78px]">
        <Image
          src={'/assets/arrow.svg'}
          width={48}
          height={48}
          className="hidden lg:block"
          alt="arrow icon"
        />
        <Image
          src={'/assets/arrow.svg'}
          width={35}
          height={35}
          className="block lg:hidden"
          alt="arrow icon"
        />
        ابدأ الآن
      </button>
    </section>
  );
}
