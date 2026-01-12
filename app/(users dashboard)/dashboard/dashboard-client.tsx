'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView, Variants } from 'motion/react';
import { useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { CluesGrid } from './components/clues-grid';
import {
    challengePreviewData,
    clueBoxData,
    countdownTimer,
    dailyCluesCheckboxes,
    dashboardData,
    notificationsData,
} from '@/lib/data';
import Image from 'next/image';
import { getUserDays } from '@/supabase/client';
import { authClient } from '@/lib/better-auth/auth-client';


interface DashboardClientProps {
    welcomeMessage: string;
}
// Define the type for user data
interface UserData {
    days: number;
    created_at: string;
    days_completed: number[]; // 👈 IMPORTANT
  }

// Animation variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
        },
    },
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const slideInFromRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

// Component for animated section with intersection observer
function AnimatedSection({
    children,
    className,
    id,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ delay }}
        >
            {children}
        </motion.section>
    );
}

export default function DashboardClient({
    welcomeMessage,
}: DashboardClientProps) {
    const { data: session } = authClient.useSession()
    console.log("data", session);
    const [userData, setUserData] = useState<UserData>({
        days: 0,
        created_at: "",
        days_completed: []
      });
      
  // totalDays can come from your data, e.g., length of challenges array
  const totalDays = dailyCluesCheckboxes?.length ?? 10; // fallback to 10 if clues is undefined

    useEffect(() => {
      if (!session?.user?.id) return;
    
      (async () => {
        const data = await getUserDays(session.user.id);
        setUserData(data); // store full object
        console.log("userData", data);
      })();
    }, [session?.user?.id]);

      // Calculate percentage
  const completedDays = userData?.days ?? 0;
  const progressPercent = Math.min(
    Math.round((completedDays / totalDays) * 100),
    100
  );

// Example text
const progressText = `تم إكمال ${completedDays} من ${totalDays} تحديات`;

const TOTAL_DAYS = 10;

const remainingDays = Math.max(TOTAL_DAYS - completedDays, 0);

const createdAt = userData?.created_at;

let unlockedDays = 1; // day 1 always unlocked

if (createdAt) {
  const createdTime = new Date(createdAt).getTime();
  const now = Date.now();

  const diffInMs = now - createdTime;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  unlockedDays = Math.min(diffInDays + 1, TOTAL_DAYS);
}
const activeDays =
  unlockedDays > completedDays
    ? unlockedDays - completedDays
    : 0;



const dynamicClueBoxData = [
    {
      heading: String(remainingDays).padStart(2, "0"),
      description: "متبقي",
      descriptionClassname:
        "font-cairo text-white text-[0.74781rem] font-normal leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]",
      headingClassname:
        "font-cairo text-white text-center font-bold text-[0.74781rem] leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]",
    },
    {
      heading: String(activeDays).padStart(2, "0"),
      description: "نشيط",
      descriptionClassname:
        "font-cairo text-white text-[0.74781rem] font-normal leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]",
      headingClassname:
        "font-cairo text-[#EAB308] text-center font-bold text-[0.74781rem] leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]",
    },
    {
      heading: String(completedDays).padStart(2, "0"),
      description: "مكتمل",
      descriptionClassname:
        "font-cairo text-white text-[0.74781rem] font-normal leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]",
      headingClassname:
        "font-cairo text-[#22C55E] text-center font-bold text-[0.74781rem] leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]",
    },
  ];
  
    // if (session?.user?.id) {
    //     getUserDays(session?.user?.id).then(days => {
    //       console.log("getuserdays", days);
    //     }).catch(console.error);
    //   }
      
      
    return (
        <main>
            {/* dashboard hero section */}
            <AnimatedSection
                id="dashboard-hero-section"
                className="bg-[url(/assets/background-user-dashboard.png)] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center min-h-[50vh] py-[85px] lg:min-h-screen lg:py-[117px]"
            >
                <motion.div
                    className="px-6 max-w-[763px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <h3 className="font-cairo text-white font-black text-[3.13425rem] text-center leading-[2.6865rem] lg:text-[5.25rem] lg:leading-[4.5rem]">
                        {welcomeMessage}
                    </h3>
                    <p className="font-cairo  text-white font-medium text-center  text-[0.8955rem] leading-[1.67906rem] mt-[30px] mb-[49px] lg:text-[1.5rem] lg:leading-[2.8125rem] lg:mt-[63px] lg:mb-[75px]">
                        هل أنت مستعد لخوض غمار تحدي اليوم؟ تابع تقدمك وتابع العد التنازلي
                        أدناه. رحلتك لاكتشاف هيونداي المثالية مستمرة!
                    </p>
                </motion.div>
                <motion.div
                    className="flex gap-x-[13px] lg:gap-x-[45px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {dashboardData.map(({ heading, description }) => (
                        <motion.button
                            type="button"
                            key={heading}
                            variants={scaleIn}
                            className="bg-[#06080E] border border-white flex flex-col justify-center w-[118px] h-[50px] rounded-[7px] py-[11px] lg:w-[253px] lg:h-[107px] lg:py-[22px]  lg:rounded-[15px] lg:hover:cursor-pointer transition-all duration-300 lg:hover:scale-105 lg:hover:bg-gradient-to-r from-blue-500 to-cyan-400"
                        >
                            <h3
                                className="font-cairo font-bold text-white text-[0.81775rem] leading-[2.80375rem] text-center lg:text-[1.75rem] lg:leading-[6rem]"
                                dir="rtl"
                            >
                                {heading}
                            </h3>
                            <p className="font-cairo font-normal text-[#488EFF] text-[0.58413rem] leading-[0.96381rem] text-center -translate-y-3 lg:text-[1.25rem] lg:leading-[2.0625rem] lg:-translate-y-6 ">
                                {description}
                            </p>
                        </motion.button>
                    ))}
                </motion.div>
            </AnimatedSection>

            {/* 2nd section */}
            <AnimatedSection className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-[#000] min-h-[100vh] px-4 py-[56px] lg:min-h-screen lg:py-[125px]">
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="font-cairo font-black text-center text-white text-[1.8795rem] leading-[2.11rem] lg:text-[4rem] leading-[4.5rem]"
                >
                    تقدم التحدي الخاص بك
                </motion.h3>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    className="text-white font-cairo font-normal text-center text-[0.7rem] leading-[0.96rem] mt-[27px] mb-[33px] lg:mt-[58px] lg:mb-[76px] lg:text-[1.5rem] lg:leading-[2.0625rem] "
                >
                    تتبع رحلتك عبر تحدي الاكتشاف لمدة 10 أيام
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleIn}
                    className=" max-w-[1180px] mx-auto w-full bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[10px] p-[1.5px]"
                >
                    <div className="w-full flex flex-col rounded-[10px] bg-[#0A0A0A] px-[20px] lg:px-[70px] pb-[20px] lg:pb-[40px]">
                        <div className="w-full flex items-center justify-between py-[20px] lg:py-[40px]">
                            <p className="font-cairo text-white font-normal text-[0.90725rem] leading-[1.2475rem] lg:text-[1.5rem] lg:leading-[2.0625rem]">
                                {progressText}
                            </p>
                            <p className="font-cairo font-normal text-white text-[1.5rem] leading-[2.0625rem]">
                            {progressPercent}%
                            </p>
                        </div>
                        {/* progress bar */}
                        <Progress
                            value={progressPercent}
                            className="bg-[#3B82F6] h-[20px] lg:h-[20px]"
                        />
                        {/* daily clues popping div */}
                         <CluesGrid clues={dailyCluesCheckboxes} userData={userData} />
                        {/* 3 divs block  */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="w-full flex gap-x-[8px] mb-0 lg:gap-x-[20px] xl:gap-x-[61px] "
                        >
                            {dynamicClueBoxData?.map(
  ({ heading, description, descriptionClassname, headingClassname }, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
      className="border-[0.997px] border-[#3B82F6] rounded-[7px] bg-[#0F1727] flex-1 h-[53px] flex flex-col justify-center items-center lg:border-2 lg:rounded-[15px] lg:h-[107px] gap-y-[5px] lg:gap-y-[21px] transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-[#1E293B]"
    >
      <h3 className={headingClassname}>{heading}</h3>
      <p className={descriptionClassname}>{description}</p>
    </motion.div>
  )
)}

                        </motion.div>
                    </div>
                </motion.div>
            </AnimatedSection>

            {/* third section */}
            <AnimatedSection className="bg-[#0F1520] py-[52px] min-h-[50vh] flex flex-col justify-center items-center lg:min-h-screen lg:py-[87px]">
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-white font-cairo text-center font-black text-[1.83738rem] leading-[2.06706rem] lg:text-[4rem] lg:leading-[4.5rem] "
                >
                    سيتم فتح الدليل التالي في
                </motion.h3>
                <motion.div
                    id="four-blocks"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className=" pt-[30px] pb-[20px] flex gap-x-[14px] px-4 lg:gap-x-[30px] lg:pt-[68px] lg:pb-[45px]"
                >
                    {countdownTimer.map(({ heading, description }) => (
                        <motion.div
                            key={heading}
                            variants={scaleIn}
                            className="bg-[#0F1727] rounded-[6px]  flex flex-col justify-center w-[55px] h-[64px] lg:w-[121px] lg:h-[141px] lg:rounded-[13.18px]"
                        >
                            <h3 className="font-cairo font-bold text-white text-center text-[1.81588rem] leading-[3.63181rem] lg:text-[3.95325rem] lg:leading-[7.90656rem]">
                                {heading}
                            </h3>
                            <p className="font-cairo font-normal text-white text-center text-[0.75663rem] leading-[1.24844rem] -translate-y-3 lg:-translate-y-6 lg:text-[1.64719rem] lg:leading-[2.71788rem]">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="font-cairo text-white font-normal text-center text-[0.689rem] leading-[0.94738rem] pb-[32px] lg:text-[1.5rem] lg:leading-[2.0625rem] lg:lg:pb-[68px]"
                >
                    تحدي اليوم الرابع سيكون متاحًا قريبًا!
                </motion.p>

                <motion.div
                    id="button-group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="mx-auto flex justify-center gap-x-[7px] lg:gap-x-[51px]"
                >
                    <motion.button
                        type="button"
                        variants={fadeInUp}
                        className="bg-[#0F1727] w-[129px] h-[30px] text-white font-cairo font-bold flex items-center justify-center text-[0.689rem] leading-[2.75606rem] rounded-[100px] lg:text-[1.5rem] lg:leading-[6rem] lg:w-[281px] lg:h-[67px] transition-all duration-300 hover:scale-105 hover:bg-[#1E293B]"
                    >
                        أعلمني
                    </motion.button>
                    <motion.button
                        type="button"
                        variants={fadeInUp}
                        className="bg-[#0F1727] w-[129px] h-[30px] text-white font-cairo font-bold text-[0.689rem] rounded-[100px] flex items-center justify-center leading-[2.75606rem] lg:text-[1.5rem] lg:leading-[6rem] lg:w-[281px] lg:h-[67px] transition-all duration-300 hover:scale-105 hover:bg-[#1E293B]"
                    >
                        مغلق
                    </motion.button>
                </motion.div>
            </AnimatedSection>

            {/* fourth section */}
            <AnimatedSection className="bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col justify-center items-center  py-[50px] min-h-screen px-4 lg:py-[125px]">
                <motion.h4
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="font-cairo font-black text-white text-center text-[2.33838rem] leading-[2.63069rem] lg:text-[4rem] lg:leading-[4.5rem]"
                >
                    تحدي اليوم
                </motion.h4>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    className="text-white font-cairo text-center font-normal mt-[30px] text-[0.87688rem] leading-[1.20575rem] lg:text-[1.5rem] lg:leading-[2.0625rem] lg:mt-[61px]"
                >
                    دليلك الحالي جاهز للحل
                </motion.p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={scaleIn}
                    className="bg-[linear-gradient(103deg,#0F1520_0.86%,#3B82F6_129.88%)] max-w-[1180px] w-full mx-auto rounded-[20px] border-[3px] flex flex-col items-center border-[#3B82F6] mt-[41px] mb-[35px] py-[40px] px-[21px] lg:py-[80px] lg:px-[56px] lg:min-h-[844px] lg:mt-[61px] lg:mb-[105px]"
                >
                    <div className="space-y-[49px] max-w-[784px]">
                        <h4 className="font-cairo text-white text-center font-black text-[1.69819rem] leading-[2.54725rem] lg:text-[3rem] lg:leading-[4.5rem]">
                            دليل اليوم الثالث متاح
                        </h4>
                        <p className="font-cairo text-white text-center font-normal text-[0.84906rem] leading-[1.1675rem] lg:text-[1.5rem] lg:leading-[2.0625rem]">
                            دليلك التالي متاح الآن! انقر أدناه لبدء الحل والحصول على شارتك
                            التالية. سيختبر هذا التحدي معرفتك بميزات هيونداي المبتكرة.
                        </p>
                    </div>
                    <div className="w-full min-h-[301px] bg-[linear-gradient(90deg,#0F1520_0%,#0F172A_50%,#000001_100%)]  rounded-[20px]   mt-[27px] flex flex-col justify-center gap-y-[38px] mb-[39px] lg:space-y-[36px] py-[40px] lg:py-[54px] lg:mt-[61px] lg:mb-[38px]">
                        <h4 className="font-cairo text-center text-white font-extrabold text-[1.5rem] leading-[2.0625rem]">
                            معاينة التحدي
                        </h4>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="w-[116px] mx-auto flex flex-col gap-y-[63px] lg:w-[757px] lg:flex-row lg:justify-between"
                        >
                            {challengePreviewData.map(
                                ({ icon, heading, description, descriptionClassname }) => (
                                    <motion.div
                                        key={heading}
                                        variants={fadeInUp}
                                        className="flex flex-col justify-center items-center gap-y-[20px]"
                                    >
                                        <Image
                                            src={icon}
                                            width={36}
                                            height={36}
                                            alt="hyundai creta"
                                        />
                                        <h4 className="font-cairo text-center text-white font-medium text-[1.5rem] leading-[2.0625rem]">
                                            {heading}
                                        </h4>
                                        <p className={descriptionClassname} dir="rtl">
                                            {description}
                                        </p>
                                    </motion.div>
                                )
                            )}
                        </motion.div>
                    </div>

                    <button
                        type="button"
                        className=" rounded-[15px] bg-gradient-to-r from-blue-500 to-cyan-400 font-cairo text-center text-[#1E293B] font-bold text-[1.17838rem] leading-[1.62025rem] lg:text-[1.5rem] lg:leading-[2.0625rem] w-[311px] h-[64px] lg:w-[397px] lg:h-[82px] transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                    >
                        عرض الدليل
                    </button>
                    <p className="font-cairo text-white text-center py-[29px] font-normal text-[1.17838rem] leading-[ 1.62025rem] lg:py-[38px] lg:text-[1.5rem] lg:leading-[2.0625rem]">
                        ينتهي التحدي خلال 23 ساعة و 42 دقيقة
                    </p>
                </motion.div>

                {/* lower col */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    className="max-w-[1180px] w-full mx-auto "
                >
                    <div className="flex justify-between items-center ">
                        <p className="font-cairo text-white font-semibold text-[1.02063rem] leading-[3.06188rem] lg:text-[1.5rem] lg:leading-[4.5rem] cursor-pointer transition-colors duration-300 hover:text-blue-400">
                            تحديد الكل كمقروء
                        </p>
                        <p className="font-cairo text-white font-semibold text-[2.08631rem] leading-[3.12944rem] lg:text-[3rem] lg:leading-[4.5rem]">
                            الإشعارات
                        </p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-col gap-y-[18px] mt-[23px] lg:mt-[41px]"
                    >
                        {notificationsData.map(({ icon, heading, description, id }) => (
                            <motion.div
                                key={id}
                                variants={slideInFromRight}
                                className="w-full bg-[linear-gradient(90deg,#0F1520_0%,#0D121D_100%)] rounded-[25px] flex justify-end items-center  h-[77px] py-[30px] px-[17px] gap-x-[29px] lg:gap-x-[63px] lg:py-[48px] lg:px-[27px] lg:h-[163px] transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:brightness-110"
                            >
                                <div>
                                    <h5 className="font-cairo text-white font-bold text-right text-[0.93975rem] leading-[2.11438rem] lg:text-[2rem] lg:leading-[4.5rem]">
                                        {heading}
                                    </h5>
                                    <p className="font-cairo text-white font-normal text-right text-[0.58731rem] leading-[2.11438rem] lg:text-[1.25rem] lg:leading-[4.5rem]">
                                        {description}
                                    </p>
                                </div>
                                <Image
                                    src={icon}
                                    width={89}
                                    height={89}
                                    alt="hyundai creta hunt"
                                    className="hidden lg:block"
                                />
                                <Image
                                    src={icon}
                                    width={41}
                                    height={41}
                                    alt="hyundai creta hunt"
                                    className="block lg:hidden"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </AnimatedSection>
        </main>
    );
}
