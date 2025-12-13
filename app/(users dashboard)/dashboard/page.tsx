import React from 'react';

export default function Dashboard() {
  return (
    <main>
      {/* dashboard hero section */}
      <section
        id="dashboard-hero-section"
        className="bg-[url(/assets/dashboard-hero.png)] flex flex-col justify-center items-center min-h-[50vh] py-[85px] lg:min-h-screen lg:py-[117px]"
      >
        <h3 className="font-cairo text-white font-black text-[3.13425rem] text-center leading-[2.6865rem] lg:text-[5.25rem] lg:leading-[4.5rem]">
          أهلا بك أحمد!
        </h3>
        <p className="font-cairo text-white font-medium text-center  text-[0.8955rem] leading-[1.67906rem] mt-[30px] mb-[49px] lg:text-[1.5rem] lg:leading-[2.8125rem] lg:mt-[63px] lg:mb-[75px]">
          هل أنت مستعد لخوض غمار تحدي اليوم؟ تابع تقدمك وتابع العد التنازلي
          أدناه. رحلتك لاكتشاف هيونداي المثالية مستمرة!
        </p>
      </section>
      {/* 2nd section */}
      <section className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-[#000] min-h-[50vh] py-[56px] lg:min-h-screen lg:py-[125px]">
        <h3 className="font-cairo font-black text-center text-white text-[1.8795rem] leading-[2.11rem] lg:text-[4rem] leading-[4.5rem]">
          تقدم التحدي الخاص بك
        </h3>
        <p className="text-white font-cairo font-normal text-center text-[0.7rem] leading-[0.96rem] mt-[27px] mb-[33px] lg:mt-[58px] lg:mb-[76px] lg:text-[1.5rem] lg:leading-[2.0625rem] ">
          تتبع رحلتك عبر تحدي الاكتشاف لمدة 10 أيام
        </p>
      </section>
      {/* third section */}
      <section className="bg-[#0F1520] py-[52px] min-h-[50vh] flex flex-col justify-center lg:min-h-screen lg:py-[87px]">
        <h3 className="text-white font-cairo text-center font-black text-[1.83738rem] leading-[2.06706rem] lg:text-[4rem] lg:leading-[4.5rem] ">
          سيتم فتح الدليل التالي في
        </h3>
        <div
          id="four-blocks"
          className=" pt-[30px] pb-[28px] lg:pt-[68px] lg:pb-[45px]"
        ></div>
        <p className="font-cairo text-white font-normal text-center text-[0.689rem] leading-[0.94738rem] pb-[32px] lg:text-[1.5rem] lg:leading-[2.0625rem] lg:lg:pb-[68px]">
          تحدي اليوم الرابع سيكون متاحًا قريبًا!
        </p>
        <div
          id="button-group"
          className="mx-auto flex justify-center gap-x-[51px]"
        >
          <button
            type="button"
            className="bg-[#0F1727] w-[129px] h-[30px] text-white font-cairo font-bold flex items-center justify-center text-[0.689rem] leading-[2.75606rem] rounded-[100px] lg:text-[1.5rem] lg:leading-[6rem] lg:w-[281px] lg:h-[67px]"
          >
            أعلمني
          </button>
          <button
            type="button"
            className="bg-[#0F1727] w-[129px] h-[30px] text-white font-cairo font-bold text-[0.689rem] rounded-[100px] flex items-center justify-center leading-[2.75606rem] lg:text-[1.5rem] lg:leading-[6rem] lg:w-[281px] h-[67px]"
          >
            مغلق
          </button>
        </div>
      </section>
      {/* fourth section */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col justify-center items-center min-h-[50vh] py-[50px] lg:min-h-screen lg:py-[125px]">
        <h4 className="font-cairo font-black text-white text-center text-[2.33838rem] leading-[2.63069rem] lg:text-[4rem] lg:leading-[4.5rem]">
          تحدي اليوم
        </h4>
        <p className="text-white font-cairo text-center font-normal mt-[30px] text-[0.87688rem] leading-[1.20575rem] lg:text-[1.5rem] lg:leading-[2.0625rem] lg:mt-[61px]">
          دليلك الحالي جاهز للحل
        </p>
      </section>
    </main>
  );
}
