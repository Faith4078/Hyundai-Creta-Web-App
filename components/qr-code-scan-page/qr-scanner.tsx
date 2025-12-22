import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function QrScanner() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[17px] lg:gap-y-[67px]">
      <Image
        src={'/assets/qr-scanner-image.png'}
        height={402}
        width={482}
        alt="hyundai creta"
        className="hidden lg:block"
      />
      <Image
        src={'/assets/qr-scanner-image.png'}
        height={282}
        width={282}
        alt="hyundai creta"
        className="block lg:hidden"
      />
      <AlertDialogDemo />
    </div>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          className="bg-[#1E293B] flex font-cairo text-white text-[0.73569rem] w-[282px] h-[35px] font-bold leading-[1.1035rem]  lg:text-[1.25531rem] lg:leading-[1.88294rem] lg:w-[482px] lg:h-[60px] "
        >
          <Image
            src={'/assets/camera-icon.svg'}
            height={17}
            width={20}
            alt="hyundai creta"
          />
          Start Scanning / ابدأ المسح
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="px-0 h-[550px]">
        <div className="min-h-[462px] rounded-[10px] order-3 lg:order-3 bg-[rgba(20,83,45,0.20)] flex-1 flex flex-col items-center pt-[43px]">
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
            بنجاح.<span className="font-bold">مقهى الإبداع</span>تم تسجيل وصولك
            في
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
      </AlertDialogContent>
    </AlertDialog>
  );
}
