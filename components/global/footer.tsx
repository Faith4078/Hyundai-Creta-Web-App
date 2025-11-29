import { footerLinks, footerSocialIcons } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <section className="flex flex-col justify-center ">
      <div className="bg-gradient-to-br min-h-screen from-[#0A0A0A] via-[#111827] to-[#000] flex flex-col justify-center  py-[75px] px-4">
        <div className="   flex  max-w-[1286px] w-full mx-auto  ">
          <div className="grid grid-cols-3 justify-start gap-[40px]">
            {footerLinks.map(({ mainLink, subLinks }, index) => {
              return (
                <div
                  className="space-y-[41px] flex flex-col items-end"
                  key={index}
                >
                  <Link
                    href={'#'}
                    className=" font-cairo text-[1.75rem] text-white text-right leading-18 font-extrabold"
                  >
                    {mainLink}
                  </Link>
                  {subLinks.map((item, index) => {
                    return (
                      <ul key={index} className="space-y-6">
                        <li className="font-cairo font-normal text-[1.5rem] leading-8.25 text-white text-right">
                          <Link href={'#'} key={index}>
                            {item}
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="flex-1">
            {/* logo */}
            <Image
              src={'/assets/hyundai-logo.png'}
              className="ml-auto mt-9 mb-[41px]"
              alt="hyundai logo"
              width={199}
              height={28}
            />
            <p className="text-white font-cairo text-[1.5rem] ml-auto font-normal leading-8.25 text-right w-[299px]">
              تجربة قيادة مستقبلية. اكتشف هيونداي كريتا الجديدة.
            </p>
            <div className=" flex justify-end gap-[25px] mt-[41px]">
              {footerSocialIcons.map(({ icon }, index) => (
                <Image
                  src={icon}
                  key={index}
                  alt={'hyundai socials'}
                  width={75}
                  height={75}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0F1520] via-[#0F172A] to-[#000001] h-[113px] flex items-center justify-center">
        <p className="text-centers font-cairo text-white text-[1.25rem] leading-8.25 font-normal">
          © 2025 هيونداي السعودية – جميع الحقوق محفوظة
        </p>
      </div>
    </section>
  );
}
