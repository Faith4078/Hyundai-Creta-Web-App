import { footerLinks, footerSocialIcons } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    // <section className="flex flex-col justify-center ">
    //   <div className="bg-gradient-to-br min-h-screen from-[#0A0A0A] via-[#111827] to-[#000] flex flex-col justify-center  py-[75px] px-4">
    //     <div className="grid  grid-cols-[_0.5fr_0.5fr] gap-4 items-stretch lg:grid-cols-[1fr_1fr_1fr_299px] ">
    //       {footerLinks.map(({ mainLink, subLinks }, index) => {
    //         return (
    //           <div
    //             className="space-y-[41px] flex flex-col items-end"
    //             key={index}
    //           >
    //             <Link
    //               href={'#'}
    //               className=" font-cairo  text-white text-right text-[1.28475rem] leading-[3.30369rem]  font-extrabold lg:text-[1.75rem] lg:leading-18"
    //             >
    //               {mainLink}
    //             </Link>
    //             {subLinks.map((item, index) => {
    //               return (
    //                 <div key={index} className="space-y-6">
    //                   <Link
    //                     href={'#'}
    //                     className="font-cairo font-normal  text-white text-right text-[1.10125rem] leading-[1.51419rem] lg:text-[1.5rem] lg:leading-8.25"
    //                   >
    //                     {item}
    //                   </Link>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <div className="flex-1">
    //       {/* logo */}
    //       <Image
    //         src={'/assets/hyundai-logo.png'}
    //         className="ml-auto mt-9 mb-[41px]"
    //         alt="hyundai logo"
    //         width={199}
    //         height={28}
    //       />
    //       <p className="text-white font-cairo text-[1.5rem] ml-auto font-normal leading-8.25 text-right w-[299px]">
    //         تجربة قيادة مستقبلية. اكتشف هيونداي كريتا الجديدة.
    //       </p>
    //       <div className=" flex justify-end gap-[25px] mt-[41px]">
    //         {footerSocialIcons.map(({ icon }, index) => (
    //           <Image
    //             src={icon}
    //             key={index}
    //             alt={'hyundai socials'}
    //             width={75}
    //             height={75}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* mobile menu navigation links */}

    //   {/* Copyright */}
    //   <div className="bg-gradient-to-r from-[#0F1520] via-[#0F172A] to-[#000001] h-[113px] flex items-center justify-center">
    //     <p className="text-centers font-cairo text-white  font-normal text-[0.849rem] leading-[1.16813rem] lg:text-[1.25rem] lg:leading-8.25">
    //       © 2025 هيونداي السعودية – جميع الحقوق محفوظة
    //     </p>
    //   </div>
    // </section>
    <section className="">
      <div className="bg-gradient-to-br min-h-[300px] from-[#0A0A0A] via-[#111827] to-[#000] flex flex-col justify-center py-[35px] px-4 lg:min-h-fit lg:py-[60px]">
        <div className=" flex justify-between items-baseline flex-wrap gap-y-6 lg:no-wrap ">
          {footerLinks.map(({ mainLink, subLinks }, index) => {
            return (
              <div
                className="flex flex-col items-end justify-items-start "
                key={index}
              >
                <Link
                  href={'#'}
                  className="font-cairo text-white text-right text-[1.28475rem] leading-[3.30369rem] font-extrabold lg:text-[1.75rem] lg:leading-18 mb-[41px] transition-colors duration-300 hover:text-blue-400"
                >
                  {mainLink}
                </Link>
                <div className="flex flex-col gap-y-6">
                  {subLinks.map((item, subIndex) => {
                    return (
                      <Link
                        key={subIndex}
                        href={'#'}
                        className="font-cairo font-normal text-white text-right text-[1.10125rem] leading-[1.51419rem] lg:text-[1.5rem] lg:leading-8.25 transition-colors duration-300 hover:text-blue-400"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* 4th column - Logo and description */}
          <div className="self-stretch flex flex-col justify-baseline items-end gap-y-[45px] mt-5 lg:mt-[15px] lg:gap-y-[60px]  ">
            <Image
              src={'/assets/hyundai-logo.png'}
              className="transition-opacity duration-300 hover:opacity-80"
              alt="hyundai logo"
              width={199}
              height={28}
            />
            <p className="text-white font-cairo w-[166px] text-[0.83769rem] leading-[1.15181rem] font-normal  text-right  lg:text-[1.5rem] lg:leading-8.25 lg:w-[299px]">
              تجربة قيادة مستقبلية. اكتشف هيونداي كريتا الجديدة.
            </p>
            <div className="flex justify-end gap-[25px] ">
              {footerSocialIcons.map(({ icon, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={icon}
                    alt={'hyundai socials'}
                    width={75}
                    height={75}
                    className="hidden lg:block cursor-pointer transition-transform duration-300 hover:scale-110"
                  />
                  <Image
                    src={icon}
                    alt={'hyundai socials'}
                    className="block lg:hidden cursor-pointer transition-transform duration-300 hover:scale-110"
                    width={41}
                    height={41}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gradient-to-r from-[#0F1520] via-[#0F172A] to-[#000001] h-[113px] flex items-center justify-center">
        <p className="text-center font-cairo text-white font-normal text-[0.849rem] leading-[1.16813rem] lg:text-[1.25rem] lg:leading-8.25">
          © 2025 هيونداي البحرين – جميع الحقوق محفوظة
        </p>
      </div>
    </section>
  );
}
