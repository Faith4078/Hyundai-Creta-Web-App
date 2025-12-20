import QrScanner from '@/components/qr-code-scan-page/qr-scanner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function QrCodeScanPage() {
  return (
    <main className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-black px-4 py-[24px] lg:pt-[0px] lg:pb-[0px] lg:pt-[58px] lg:pb-[47px]">
      <section className="max-w-[1296px] w-full mx-auto min-h-[1441px]  lg:min-h-[1747px]  ">
        {/* div block 1 */}
        <div className="flex flex-col lg:flex-row ">
          <div className="min-h-[462px] lg:h-[632px] rounded-[10px] lg:rounded-tl-[20px] lg:h-[632px] flex-1 bg-[#1F2937] order-2 lg:order-1"></div>
          <div className="min-h-[462px] lg:h-[632px] flex flex-col justify-center rounded-[10px] order-1 lg:order-2 lg:rounded-tr-[20px] lg flex-1 bg-gray-700/30">
            <QrScanner />
          </div>
        </div>
        {/* div block 2 */}
        <div className="flex flex flex-col lg:flex-row ">
          <div className="min-h-[462px] lg:h-[632px] rounded-[10px] rounded-bl-[20px] order-3 lg:order-3 bg-[rgba(20,83,45,0.20)] flex-1 flex flex-col items-center pt-[43px]">
            <Image
              src={'/assets/green-checkbox.svg'}
              width={120}
              height={120}
              alt="hyundai creta"
              className="hidden lg:block"
            />
            <Image
              src={'/assets/green-checkbox.svg'}
              width={72}
              height={72}
              alt="hyundai creta"
              className=" block lg:hidden"
            />
            <h4 className="font-cairo text-white text-center font-bold text-[1.42469rem] leading-[1.70963rem] lg:mt-[40px] lg:mb-[12px] lg:text-[2.35363rem] leading-[2.82438rem]">
              Visit Verified! تم تأكيد الزيارة!
            </h4>
            <p className="font-cairo font-normal  text-[#BBF7D0] text-[0.75981rem] leading-[1.13975rem] lg:text-[1.25531rem] lg:leading-[1.88294rem]">
              Your check-in at <span className="font-bold">Innovate Cafe</span>{' '}
              has been logged.
            </p>
            <p className="font-cairo text-[#BBF7D0]  text-[0.75981rem] leading-[1.13975rem] lg:text-[1.25531rem] lg:leading-[1.88294rem]">
              بنجاح.<span className="font-bold">مقهى الإبداع</span>تم تسجيل
              وصولك في
            </p>
            <div className="bg-[#1F2937] flex items-center rounded-[10px] justify-center w-[282px] h-[54px] lg:w-[466px] lg:h-[90px] lg:mt-[46px] lg:mb-[30px] hover:cursor-pointer">
              <p className=" font-cairo font-bold text-white text-[0.66488rem] leading-[0.94981rem] lg:text-[1.09838rem] lg:leading-[1.56913rem]">
                Timestamp: التوقيت
              </p>
            </div>
            <Button
              type="button"
              className="font-cairo text-white font-bold text-[0.75981rem]  lg:leading-[1.13975rem] text-[1.25531rem] lg:leading-[1.88294rem] w-[282px] h-[35px] lg:w-[466px] lg:h-[60px]"
            >
              Scan Another / مسح رمز آخر
            </Button>
          </div>
          <div className="min-h-[462px] order-4 lg:order-4 lg:h-[632px] rounded-[10px] rounded-br-[20px] flex-1 bg-[#1F2937] hidden lg:block"></div>
        </div>
      </section>
    </main>
  );
}
