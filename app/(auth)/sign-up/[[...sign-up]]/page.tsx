'use client';
import SignUpForm from '@/components/sign-up/sign-up-form';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function SignUpPage() {
  return (
    <main className="bg-[url(/assets/creta-background.png)] min-h-[50vh] py-[45px] bg-center bg-no-repeat bg-cover  w-full lg:pt-[61px] lg:pb-[116px]  lg:min-h-screen">
      <div className="max-w-[1296px] w-full mx-auto px-4 flex flex-col justify-between items-center lg:flex-row">
        {/* sign up form */}
        <SignUpForm />
        {/* right col */}
        <div className=" max-w-full  my-[45px]  w-full mx-auto order-1 flex flex-col gap-y-[35px] items-end lg:max-w-[420px] lg:gap-y-[56px] lg:order-2 lg:max-w-full lg:my-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[177px] h-[54px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-full p-[1.5px] "
          >
            <Link
              href={'/sign-in'}
              className="w-full h-full flex items-center gap-x-4 justify-center rounded-full bg-[#0A0A0A] text-white font-normal font-cairo text-[0.66025rem] leading-[3.96138rem] lg:text-base lg:leading-24 hover:cursor-pointer transition-colors hover:bg-[#111]"
            >
              تحدي حصري
            </Link>
          </motion.div>
          <h1 className="text-white font-cairo  text-right font-black text-[2.3875rem] leading-[2.04644rem] lg:text-[3.61rem] lg:leading-[3.09956rem]">
            سجل لبدء التحدي
          </h1>
          <p
            className="font-cairo text-white w-[341px] text-[0.82531rem] leading-[1.36175rem] font-normal lg:w-[517px] lg:text-[1.25rem] lg:leading-[2.0625rem]"
            dir="rtl"
          >
            انضم إلى آلاف المشاركين في مسابقة للعثور على سيارة هيونداي كريتا
            الجديدة كليًا والفوز بها. أكمل تسجيلك أدناه للبدء.
          </p>
          <div className="mr-4">
            <ul
              className="list-disc ml-5 marker:text-white flex items-center gap-x-[40px] lg:gap-x-[50px]"
              dir="rtl"
            >
              <li className="font-cairo text-white text-right font-normal text-[ 0.66025rem] leading-[1.36175rem] lg:text-[1rem] lg:leading-[2.0625rem]">
                يبدأ التحدي بعد 3 أيام
              </li>
              <li className="font-cairo text-white text-right font-normal text-[ 0.66025rem] leading-[1.36175rem] lg:text-[1rem] lg:leading-[2.0625rem]">
                يبدأ التحدي بعد 3 أيام
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
