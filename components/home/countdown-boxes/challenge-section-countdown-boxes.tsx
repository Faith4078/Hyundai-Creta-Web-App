'use client';
import { countdownTimer } from '@/lib/data';
import React from 'react';

export default function ChallengeSectionCountdownBoxes() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    // Set the target date to 10 days from the current assumed start date (Dec 29, 2025).
    // Target: Jan 8, 2026
    const countDownDate = new Date('Jan 8, 2026 00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // Initial call to avoid delay
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerData = [
    {
      heading: timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days,
      description: 'أيام',
    },
    {
      heading: timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours,
      description: 'ساعات',
    },
    {
      heading: timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes,
      description: 'دقائق',
    },
    {
      heading: timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds,
      description: 'ثواني',
    },
  ];

  return (
    <section className="max-w-[355px] w-full mx-auto px-4  flex justify-center  lg:max-w-[577px]">
      <div className="flex justify-center gap-x-[19px]">
        {timerData.map(({ heading, description }, index) => (
          <article
            key={index}
            className=" w-[74.47px] h-[86.61px] flex items-center justify-center  rounded-[0.82363rem] border-[1.5px] border-white bg-white/10 backdrop-blur-sm p-[15px] lg:p-[25px] lg:w-[121px] lg:h-[141px] "
          >
            <div className="flex flex-col  justify-center mt-[-15px] lg:gap-y-[23px]">
              <h4 className="text-white text-center  font-bold text-[2rem] leading-[4.85rem] lg:text-[4rem]">
                {heading}
              </h4>
              <p className="text-white text-center mt-[-20px] font-normal text-[1rem] leading-[1.6rem] lg:mt-[-20px] lg:text-[1.6rem] ">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
