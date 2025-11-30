import Image from 'next/image';
import { SlideForHowItWorksSection } from '../global/slide-for-how-it-works';

export default function LaunchVideoSection() {
  return (
    <section className="  bg-linear-to-br from-[#0A0A0A] via-[#111827] to-[#000] w-full flex flex-col justify-center min-h-[50vh] py-[42px]   lg:min-h-screen lg:py-[111px]">
      <div className="max-w-[1286px] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-cairo   text-white text-center font-black text-[1.716rem] leading-[1.930rem] lg:text-[4rem] lg:leading-18">
            تجربة الإثارة
          </h3>
          <p className="font-cairo  text-white text-[0.643rem] leading-[0.88rem] text-center  max-w-[891px] w-full font-normal  mx-auto my-[24px]  lg:text-[1.5rem] lg:leading-8.25 lg:mt-[55px] lg:mb-[52px]">
            شاهد كيف تُحوّل هيونداي كريتا كل رحلة إلى مغامرة شيّقة. استعد لعشرة
            أيام من الاكتشاف والسرعة والمكافآت القيّمة.
          </p>
        </div>
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
      </div>
    </section>
  );
}
