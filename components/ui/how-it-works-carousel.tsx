// 'use client';
// import React, {
//   useEffect,
//   useRef,
//   useState,
//   createContext,
//   useContext,
// } from 'react';
// import {
//   IconArrowNarrowLeft,
//   IconArrowNarrowRight,
//   IconX,
// } from '@tabler/icons-react';
// import { cn } from '@/lib/utils';
// import { AnimatePresence, motion } from 'motion/react';
// import Image, { ImageProps } from 'next/image';
// import { useOutsideClick } from '@/hooks/use-outside-click';

// interface CarouselProps {
//   items: JSX.Element[];
//   initialScroll?: number;
// }

// type Card = {
//   icon: string;
//   heading: string;
//   description: string;
//   buttonText: string;
// };

// export const CarouselContext = createContext<{
//   onCardClose: (index: number) => void;
//   currentIndex: number;
// }>({
//   onCardClose: () => {},
//   currentIndex: 0,
// });

// export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
//   const carouselRef = React.useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = React.useState(false);
//   const [canScrollRight, setCanScrollRight] = React.useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (carouselRef.current) {
//       // Calculate initial scroll based on screen size
//       const isMobileView = window.innerWidth < 768;

//       if (isMobileView) {
//         // Mobile: start at index 1, centered with adjacent cards partially visible
//         const cardWidth = 230; // mobile card width
//         const gap = 4; // mobile gap
//         const containerWidth = carouselRef.current.clientWidth;
//         const paddingLeft = 16; // pl-4 = 16px
//         // Center the card at index 1
//         const scrollToIndex1 =
//           paddingLeft +
//           (cardWidth + gap) * 1 -
//           (containerWidth - cardWidth) / 2;
//         carouselRef.current.scrollLeft = scrollToIndex1;
//         setCurrentIndex(1);
//       } else {
//         // Desktop: use provided initialScroll
//         carouselRef.current.scrollLeft = initialScroll;
//       }

//       checkScrollability();
//     }
//   }, [initialScroll]);

//   const checkScrollability = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
//     }
//   };

//   const scrollLeft = () => {
//     if (carouselRef.current) {
//       const isMobileView = window.innerWidth < 768;

//       if (isMobileView) {
//         // Mobile: scroll one card at a time, centered
//         const cardWidth = 230;
//         const gap = 4;
//         const containerWidth = carouselRef.current.clientWidth;
//         const paddingLeft = 16; // pl-4 = 16px
//         const newIndex = Math.max(0, currentIndex - 1);
//         const scrollPosition =
//           paddingLeft +
//           (cardWidth + gap) * newIndex -
//           (containerWidth - cardWidth) / 2;

//         carouselRef.current.scrollTo({
//           left: scrollPosition,
//           behavior: 'smooth',
//         });
//         setCurrentIndex(newIndex);
//       } else {
//         carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//       }
//     }
//   };

//   const scrollRight = () => {
//     if (carouselRef.current) {
//       const isMobileView = window.innerWidth < 768;

//       if (isMobileView) {
//         // Mobile: scroll one card at a time, centered
//         const cardWidth = 230;
//         const gap = 4;
//         const containerWidth = carouselRef.current.clientWidth;
//         const paddingLeft = 16; // pl-4 = 16px
//         const newIndex = Math.min(items.length - 1, currentIndex + 1);
//         const scrollPosition =
//           paddingLeft +
//           (cardWidth + gap) * newIndex -
//           (containerWidth - cardWidth) / 2;

//         carouselRef.current.scrollTo({
//           left: scrollPosition,
//           behavior: 'smooth',
//         });
//         setCurrentIndex(newIndex);
//       } else {
//         carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//       }
//     }
//   };

//   const handleCardClose = (index: number) => {
//     if (carouselRef.current) {
//       const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
//       const gap = isMobile() ? 4 : 8;
//       const scrollPosition = (cardWidth + gap) * (index + 1);
//       carouselRef.current.scrollTo({
//         left: scrollPosition,
//         behavior: 'smooth',
//       });
//       setCurrentIndex(index);
//     }
//   };

//   const isMobile = () => {
//     return window && window.innerWidth < 768;
//   };

//   return (
//     <CarouselContext.Provider
//       value={{ onCardClose: handleCardClose, currentIndex }}
//     >
//       <div className="relative w-full">
//         <div
//           className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
//           ref={carouselRef}
//           onScroll={checkScrollability}
//         >
//           <div
//             className={cn(
//               'absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l'
//             )}
//           ></div>

//           <div
//             className={cn(
//               'flex flex-row justify-start gap-4 pl-4',
//               'mx-auto max-w-7xl' // remove max-w-4xl if you want the carousel to span the full width of its container
//             )}
//           >
//             {items.map((item, index) => (
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   transition: {
//                     duration: 0.5,
//                     delay: 0.2 * index,
//                     ease: 'easeOut',
//                     once: true,
//                   },
//                 }}
//                 key={'card' + index}
//                 className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-center gap-2">
//           <button
//             className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
//             onClick={scrollLeft}
//             disabled={!canScrollLeft}
//           >
//             <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
//           </button>
//           <button
//             className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
//             onClick={scrollRight}
//             disabled={!canScrollRight}
//           >
//             <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
//           </button>
//         </div>
//       </div>
//     </CarouselContext.Provider>
//   );
// };

// export const Card = ({
//   card,
//   index,
//   layout = false,
// }: {
//   card: Card;
//   index: number;
//   layout?: boolean;
// }) => {
//   const [open, setOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { onCardClose, currentIndex } = useContext(CarouselContext);
//   const { icon, description, buttonText, heading } = card;

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === 'Escape') {
//         handleClose();
//       }
//     }

//     if (open) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     window.addEventListener('keydown', onKeyDown);
//     return () => window.removeEventListener('keydown', onKeyDown);
//   }, [open]);

//   useOutsideClick(containerRef, () => handleClose());

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     onCardClose(index);
//   };

//   return (
//     <motion.article
//       className=" flex flex-col justify-between gap-y-[78px]"
//       key={index}
//     >
//       <motion.div>
//         <motion.img
//           src={icon}
//           width={148}
//           height={148}
//           className="mx-auto"
//           alt="creta car image"
//         />
//         <motion.h3 className="text-[2rem] text-center font-cairo text-white font-black leading-18 ">
//           {heading}
//         </motion.h3>
//         <motion.p className="max-w-[406px] text-[1.5rem] font-cairo text-white text-center font-normal leading-8.25">
//           {description}
//         </motion.p>
//       </motion.div>
//       <motion.div className="w-[343px] h-[78px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[15px] p-[1.5px]">
//         <motion.button
//           type="button"
//           className="w-full h-full flex items-center justify-center rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer"
//         >
//           {buttonText}
//         </motion.button>
//       </motion.div>
//     </motion.article>
//   );
// };

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CardData = {
  icon: string;
  heading: string;
  description: string;
  buttonText: string;
};

interface CarouselProps {
  items: CardData[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768;

      if (isMobileView) {
        const cardWidth = 343;
        const gap = 16;
        const containerWidth = carouselRef.current.clientWidth;
        const paddingLeft = 16;
        const scrollToIndex1 =
          paddingLeft +
          (cardWidth + gap) * 1 -
          (containerWidth - cardWidth) / 2;
        carouselRef.current.scrollLeft = scrollToIndex1;
        setCurrentIndex(1);
      } else {
        carouselRef.current.scrollLeft = initialScroll;
      }

      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768;

      if (isMobileView) {
        const cardWidth = 343;
        const gap = 16;
        const containerWidth = carouselRef.current.clientWidth;
        const paddingLeft = 16;
        const newIndex = Math.max(0, currentIndex - 1);
        const scrollPosition =
          paddingLeft +
          (cardWidth + gap) * newIndex -
          (containerWidth - cardWidth) / 2;

        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
        setCurrentIndex(newIndex);
      } else {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768;

      if (isMobileView) {
        const cardWidth = 343;
        const gap = 16;
        const containerWidth = carouselRef.current.clientWidth;
        const paddingLeft = 16;
        const newIndex = Math.min(items.length - 1, currentIndex + 1);
        const scrollPosition =
          paddingLeft +
          (cardWidth + gap) * newIndex -
          (containerWidth - cardWidth) / 2;

        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
        setCurrentIndex(newIndex);
      } else {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full block lg:hidden">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth  [scrollbar-width:none] md:py-20"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 w-full">
          {items.map((card, index) => {
            const { icon, description, buttonText, heading } = card;

            return (
              <article
                className="w-[343px] min-w-[343px] flex flex-col justify-between   gap-y-[27px] lg:gap-y-[78px]"
                key={index}
              >
                <div className="flex flex-col gap-y-4">
                  <Image
                    src={icon}
                    width={148}
                    height={148}
                    className="mx-auto hidden lg:block"
                    alt="creta car image"
                  />
                  <Image
                    src={icon}
                    width={85}
                    height={85}
                    className="mx-auto block lg:hidden"
                    alt="creta car image"
                  />
                  <h3
                    className="text-[1.15856rem] leading-[2.60669rem] text-center font-cairo text-white font-black lg:text-[2rem]"
                    style={{ lineHeight: '1.125' }}
                  >
                    {heading}
                  </h3>
                  <p
                    className="w-[235px] mx-auto font-cairo text-white text-center font-normal text-[0.86888rem] leading-[1.19475rem] lg:w-[406px] lg:text-[1.5rem]"
                    style={{ lineHeight: '1.375' }}
                  >
                    {description}
                  </p>
                </div>

                {/* <div className="w-[198px] h-[45px] mx-auto bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[8px] p-[1.5px] lg:w-[343px] lg:rounded-[15px]">
                  <button
                    type="button"
                    className="w-full h-full flex items-center justify-center rounded-[8px] bg-[#0A0A0A] text-white font-normal font-cairo text-[0.86888rem] leading-[1.19475rem] lg:rounded-[8px] lg:text-[1.5rem] hover:cursor-pointer"
                  >
                    {buttonText}
                  </button>
                </div> */}
                <div
                  className="w-[198px] h-[45px] mx-auto rounded-[8px] p-[1.5px] lg:w-[343px] lg:rounded-[15px]"
                  style={{
                    background:
                      'linear-gradient(90deg, #3B82F6, #00FFFF, #3B82F6, #00FFFF)',
                    backgroundSize: '200% 100%',
                    animation: 'gradientShift 3s linear infinite',
                  }}
                >
                  <button
                    type="button"
                    className="w-full h-full flex items-center justify-center rounded-[8px] bg-[#0A0A0A] text-white font-normal font-cairo text-[0.86888rem] leading-[1.19475rem] lg:rounded-[8px] lg:text-[1.5rem] hover:cursor-pointer"
                  >
                    {buttonText}
                  </button>

                  <style jsx>{`
                    @keyframes gradientShift {
                      0% {
                        background-position: 0% 50%;
                      }
                      100% {
                        background-position: 200% 50%;
                      }
                    }
                  `}</style>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center my-[23px]">
        <button
          className="flex items-center justify-center rounded-full disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="text-[#29A7F8] size-[36px]" />
        </button>
        <button
          className="flex items-center justify-center rounded-full disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ChevronRight className="text-[#29A7F8] size-[36px]" />
        </button>
      </div>
    </div>
  );
};
{
  /* export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        'h-full w-full transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'hyundai creta image'}
      {...rest}
    />
  );
}; */
}
