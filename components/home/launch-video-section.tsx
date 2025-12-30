'use client';

import { motion, Variants } from 'motion/react';
import Image from 'next/image';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function LaunchVideoSection() {
  return (
    <section className="  bg-linear-to-br from-[#0A0A0A] via-[#111827] to-[#000] w-full flex flex-col justify-center min-h-[50vh] py-[42px]   lg:min-h-screen lg:py-[111px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1286px] w-full mx-auto"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.h3
            variants={fadeInUp}
            className="font-cairo   text-white text-center font-black text-[1.716rem] leading-[1.930rem] lg:text-[4rem] lg:leading-18"
          >
            تجربة الإثارة
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="font-cairo  text-white text-[0.643rem] leading-[0.88rem] text-center   w-full font-normal  mx-auto my-[24px] w-[335px] px-6 lg:px-0  lg:text-[1.5rem] lg:leading-8.25 lg:mt-[55px] lg:mb-[52px] lg:w-[891px]"
          >
            شاهد كيف تُحوّل هيونداي كريتا كل رحلة إلى مغامرة شيّقة. استعد لعشرة
            أيام من الاكتشاف والسرعة والمكافآت القيّمة.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={'/assets/creta-launch-image.png'}
            alt="creta-website-launch-image"
            width={1286}
            height={613}
            className="hidden lg:block mx-auto"
            loading="eager"
          />
          <Image
            src={'/assets/creta-launch-image.png'}
            alt="creta-website-launch-image"
            width={386}
            height={183}
            loading="eager"
            className="block mx-auto lg:hidden"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
