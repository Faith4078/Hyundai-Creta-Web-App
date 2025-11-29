import React from 'react';

export default function Dashboard() {
  return (
    <div>
      {/* dashboard hero section */}
      {/* 2nd section */}
      <section className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-[#000] min-h-[50vh] py-[56px] lg:min-h-screen lg:py-[125px]">
        <h3 className="font-cairo font-black text-center text-white text-[1.8795rem] leading-[2.11rem] lg:text-[4rem] leading-[4.5rem]">
          تقدم التحدي الخاص بك
        </h3>
        <p className="text-white font-cairo font-normal text-center text-[0.7rem] leading-[0.96rem] mt-[27px] mb-[33px] lg:mt-[58px] lg:mb-[76px] lg:text-[1.5rem] lg:leading-[2.0625rem] ">
          تتبع رحلتك عبر تحدي الاكتشاف لمدة 10 أيام
        </p>
      </section>
    </div>
  );
}
