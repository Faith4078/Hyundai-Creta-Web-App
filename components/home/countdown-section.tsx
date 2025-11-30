import React from 'react';
import ChallengeSectionCountdownBoxes from './countdown-boxes/challenge-section-countdown-boxes';

export default function CountdownSection() {
  return (
    <section className="bg-linear-to-r min-h-[50vh] py-[42px]   from-[#0F1520] via-[#3B82F6] to-[#000001] flex flex-col gap-y-[40px] lg:gap-y-[65px] lg:min-h-screen lg:py-[77px] ">
      <div className="max-w-[813px] w-full mx-auto">
        <h3 className="font-cairo   text-[1.29rem] leding-[1.45rem] text-white text-center  font-black lg:text-[4rem] lg:leading-18">
          العد التنازلي لإطلاق التحدي
        </h3>
        <p className="font-cairo text-[0.48rem] leading-[0.66rem] text-white text-center max-w-[813px] w-full font-normal mx-auto mt-[20px]  lg:text-[1.5rem] lg:leading-8.25 lg:mt-[55px]   ">
          ترقبوا! التحدي سينطلق قريبًا - سجّلوا أولاً وابدأوا رحلة الصيد.
        </p>
      </div>
      <ChallengeSectionCountdownBoxes />
      <button
        type="button"
        className="text-[#1E293B] w-[172px] h-[41px] text-center flex items-center justify-center mx-auto bg-white rounded-[100px] font-cairo font-bold text-[0.92138rem] leading-[3.68556rem] lg:h-[67px]  lg:w-[281px] lg: lg:text-[1.5rem] lg:leading-24 hover:cursor-pointer"
      >
        احصل على الإشعارات
      </button>
    </section>
  );
}
