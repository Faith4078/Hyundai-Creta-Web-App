"use client";

import Image from "next/image";
import React, { useState } from "react";
import { LockModal } from "./lock-modal";

interface ClueItem {
    id: number;
    dayNumber: number;
    heading: string;
    boxclassName: string;
  }  

  interface UserData {
    days: number;
    created_at: string;
    days_completed: number[]; // 👈 IMPORTANT
  }  

interface CluesGridProps {
    clues: ClueItem[];
    userData: UserData;
}

export function CluesGrid({ clues, userData }: CluesGridProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState("");
    

    // const isLocked = (dayNumber: number) => {
    //     if (userDays === 0) return false;        // unlock all
    //     return dayNumber === userDays;           // lock only matching day
    //   };
      
      const handleClueClick = (clue: ClueItem) => {
        setSelectedDay(String(clue.dayNumber));
        setIsModalOpen(true);
      };

      const getUnlockedDays = (userData: UserData) => {
        const createdAt = new Date(userData.created_at);
        const now = new Date();
      
        const diffMs = now.getTime() - createdAt.getTime();
        const unlockedDays =
          Math.floor(diffMs / (24 * 60 * 60 * 1000)) + 1;
      
        return Math.min(unlockedDays, 10); // safety cap
      };      
      

      const getClueState = (dayNumber: number, userData: UserData) => {
        const unlockedDays = getUnlockedDays(userData);
        const index = dayNumber - 1;
      
        const isCompleted = userData.days_completed?.[index] === 1;
      
        // ✅ Completed
        if (isCompleted) {
          return {
            icon: '/assets/arrow-icon.svg',
            text: 'مكتمل',
            textColor: 'text-[#22C55E]',
            locked: false,
          };
        }
      
        // 🟡 Unlocked but not completed
        if (dayNumber <= unlockedDays) {
          return {
            icon: '/assets/yellow-padlock-icon.svg',
            text: 'حاضِر',
            textColor: 'text-[#EAB308]',
            locked: false,
          };
        }
      
        // 🔒 Locked
        return {
          icon: '/assets/countdown-padlock-icon.svg',
          text: 'مغلق',
          textColor: 'text-[#ADADAD]',
          locked: true,
        };
      };
      
      

    // const handleClueClick = (clue: ClueItem) => {
    //     // Check if the clue is locked (description is 'مغلق' or based on icon logic)
    //     if (clue.description === "مغلق" || clue.icon.includes("padlock")) {
    //         let dayNum = "9";
    //         if (clue.heading.includes("التاسع")) dayNum = "9";
    //         if (clue.heading.includes("العاشر")) dayNum = "10";
    //         if (clue.heading.includes("الثامن")) dayNum = "8";
    //         if (clue.heading.includes("السابع")) dayNum = "7";
    //         if (clue.heading.includes("السادس")) dayNum = "6";
    //         if (clue.heading.includes("الخامس")) dayNum = "5";
    //         if (clue.heading.includes("الرابع")) dayNum = "4";

    //         setSelectedDay(dayNum);
    //         setIsModalOpen(true);
    //     }
    // };

    return (
        <>
            <div className="grid grid-cols-3 gap-x-6 my-[28px] lg:my-[53px] lg:grid-cols-10">
             {clues?.map((clue) => {
    const state = getClueState(clue.dayNumber, userData);

    const canOpenModal = !state.locked && state.text === "حاضِر";

    return (
      <div
        key={clue.id}
        onClick={() => canOpenModal && handleClueClick(clue)}
        className={`${clue.boxclassName} ${
          state.locked || state.text === 'مكتمل' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <Image src={state.icon} width={95} height={95} alt={clue.heading} />
        <h3 className="font-cairo text-white text-center font-bold">{clue.heading}</h3>
        <p className={`font-cairo text-center font-bold ${state.textColor}`}>{state.text}</p>
      </div>
    );
  })}
            </div>

            <LockModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                dayNumber={selectedDay}
            />
        </>
    );
}
