import Image from 'next/image';
import React from 'react';
import { auth } from '@/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function WinnerPage() {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });
  // if (!session) {
  //   redirect('/sign-in');
  // }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-[#000]">
      <section className="max-w-[1296px] w-full min-h-screen mx-auto px-4">
        <div className="mx-auto flex flex-col items-center gap-y-[42px] pt-[37px] lg:pt-[153px]">
          <Image
            src={'/assets/trophy.svg'}
            width={300}
            height={122}
            alt="hyundai creta car image"
            className="hidden lg:block"
          />
          <Image
            src={'/assets/trophy.svg'}
            width={106}
            height={106}
            alt="hyundai creta car image"
            className="size-[106px] block lg:hidden"
          />
          <h1 className="font-inter text-white text-center font-bold text-[3.45638rem] leading-[1.81069rem] lg:text-[6rem] lg:leading-[3.14319rem]">
            مبروك!
          </h1>
          <p className="font-inter font-bold text-center text-white text-[1.62963rem] leading-[1.81069rem] lg:text-[2.82888rem] lg:leading-[3.14319rem]">
            لقد فزت بالجائزة الكبرى!
          </p>
        </div>
        <Image
          src={'/assets/winner-car.png'}
          width={1296}
          height={613}
          alt="hyundai creta car image"
          className="my-[37px] w-full lg:my-[72px]"
        />
        <div className="mx-auto flex flex-col gap-y-[36px] items-center pb-[37px] lg:pb-[126px]">
          <h4 className="text-white font-inter text-center font-bold text-[1.50088rem] leading-[2.09669rem] lg:text-[2.25rem] lg:leading-[3.14319rem]">
            شارك فرحتك مع العالم!
          </h4>
          <button
            type="button"
            className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-[334px] h-[46px] rounded-[10px] text-[#0F172A] text-center flex items-center justify-center font-extrabold  text-[0.83869rem] leading-[1.258rem] lg:w-[501px] lg:h-[70px] lg:rounded-[15px]  lg:text-[1.25731rem]  lg:leading-[6rem] hover:cursor-pointer"
          >
            شارك عبر إنستغرام
          </button>
        </div>
      </section>
    </main>
  );
}
