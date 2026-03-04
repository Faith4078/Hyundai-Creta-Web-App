'use client';
import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import ChallengeSectionCountdownBoxes from './countdown-boxes/challenge-section-countdown-boxes';

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

export default function CountdownSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-linear-to-r min-h-[300px] py-[42px]   from-[#0F1520] via-[#3B82F6] to-[#000001] flex flex-col gap-y-[40px] lg:gap-y-[65px] lg:min-h-fit lg:py-[77px] justify-center ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[813px] w-full mx-auto"
      >
        <motion.h3
          variants={fadeInUp}
          className="font-cairo   text-[1.29rem] leding-[1.45rem] text-white text-center  font-black lg:text-[4rem] lg:leading-18"
        >
          العد التنازلي لإطلاق التحدي
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="font-cairo text-[0.48rem] leading-[0.66rem] text-white text-center max-w-[813px] w-full font-normal mx-auto mt-[20px]  lg:text-[1.5rem] lg:leading-8.25 lg:mt-[55px]   "
        >
          ترقبوا! التحدي سينطلق قريبًا - سجّلوا أولاً وابدأوا رحلة الصيد.
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <ChallengeSectionCountdownBoxes />
      </motion.div>

      {/* <motion.button
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden w-[172px] h-[41px] text-center flex items-center justify-center mx-auto bg-white rounded-[100px] font-cairo font-bold text-[0.92138rem] leading-[3.68556rem] lg:h-[67px] lg:w-[281px] lg:text-[1.5rem] lg:leading-24 cursor-pointer"
      >
        <span
          style={{
            position: 'relative',
            zIndex: 10,
            color: isHovered ? 'white' : '#1E293B',
            transition: 'color 0.3s',
          }}
        >
          احصل على الإشعارات
        </span>
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, #000, #000)',
            borderRadius: '100px',
            transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }}
        ></span>
      </motion.button> */}
    </section>
  );
}
