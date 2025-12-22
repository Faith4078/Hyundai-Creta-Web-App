import { Button } from '@/components/ui/button';
import React from 'react';

export default function CluesPage() {
  return (
    <main className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] px-4 to-black flex flex-col items-center">
      {/* last section */}
      <section className="min-h-[800px] max-w-[1286px] w-full mx-auto rounded-[25px] lg:pt-[75px] lg:pb-[55px] lg:px-[66px] lg:rounded-[25px]">
        <h3 className="font-cairo text-white text-right font-bold text-[1.79275rem] leading-[4.78075rem] lg:text-[2.25rem] lg:leading-[6rem]">
          أدخل إجابتك
        </h3>
        <div className="flex w-full gap-x-[16px] lg:gap-x-[23px]">
          <Button className="w-[30%] bg-[#EF4444] h-[44px] rounded-[5px] lg:rounded-[10px] font-cairo text-white font-semibold text-[0.87994rem] leading-[1.03706rem] lg:text-[1.75rem] lg:leading-[2.0625rem] lg:h-[66px] lg:w-[30%]">
            هل تحتاج إلى تلميح؟
          </Button>
          <Button className="w-[50%] bg-gradient-to-r from-blue-500 to-cyan-400 h-[44px] rounded-[5px] lg:rounded-[10px] lg:h-[66px]  lg:w-[70%] font-cairo text-[#1E293B] font-extrabold text-[0.87994rem] leading-[1.03706rem] lg:text-[2rem] lg:leading-[2.0625rem]">
            إرسال الإجابة
          </Button>
        </div>
      </section>
    </main>
  );
}
