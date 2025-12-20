import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

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
      <Button
        type="button"
        className="bg-[#14B8A6] flex font-cairo text-white text-[0.73569rem] w-[282px] h-[35px] font-bold leading-[1.1035rem]  lg:text-[1.25531rem] lg:leading-[1.88294rem] lg:w-[482px] lg:h-[60px] "
      >
        <Image
          src={'/assets/camera-icon.svg'}
          height={17}
          width={20}
          alt="hyundai creta"
        />
        Start Scanning / ابدأ المسح
      </Button>
    </div>
  );
}
