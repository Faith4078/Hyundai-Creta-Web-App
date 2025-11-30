import { countdownTimer } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

export default function ChallengeSectionCountdownBoxes() {
  return (
    <section className="max-w-[355px] w-full mx-auto px-4  flex justify-center  lg:max-w-[577px]">
      <div className="flex justify-center gap-x-[19px]">
        {countdownTimer.map(({ heading, description }, index) => (
          <article
            key={index}
            className=" w-[74.47px] h-[86.61px] flex items-center justify-center  rounded-[0.82363rem] border-[1.5px] border-white bg-white/10 backdrop-blur-sm p-[15px] lg:p-[25px] lg:w-[121px] lg:h-[141px] "
          >
            <div className="flex flex-col  justify-center mt-[-15px] lg:gap-y-[23px]">
              <h4 className="text-white text-center  font-bold text-[2rem] leading-[4.85rem] lg:text-[4rem]">
                {heading}
              </h4>
              <p className="text-white text-center mt-[-20px] font-normal text-[1rem] leading-[1.6rem] lg:mt-[-20px] lg:text-[1.6rem] ">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
