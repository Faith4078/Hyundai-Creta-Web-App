"use client";

import Image from "next/image";
import React, { useState } from "react";
import { LockModal } from "./lock-modal";

interface ClueItem {
    id: number;
    icon: string;
    heading: string;
    description: string;
    headingclassName: string;
    boxclassName: string;
    className: string;
}

interface CluesGridProps {
    clues: ClueItem[];
}

export function CluesGrid({ clues }: CluesGridProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState("");

    const handleClueClick = (clue: ClueItem) => {
        // Check if the clue is locked (description is 'مغلق' or based on icon logic)
        if (clue.description === "مغلق" || clue.icon.includes("padlock")) {
            let dayNum = "9";
            if (clue.heading.includes("التاسع")) dayNum = "9";
            if (clue.heading.includes("العاشر")) dayNum = "10";
            if (clue.heading.includes("الثامن")) dayNum = "8";
            if (clue.heading.includes("السابع")) dayNum = "7";
            if (clue.heading.includes("السادس")) dayNum = "6";
            if (clue.heading.includes("الخامس")) dayNum = "5";
            if (clue.heading.includes("الرابع")) dayNum = "4";

            setSelectedDay(dayNum);
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-x-6 my-[28px] lg:my-[53px] lg:grid-cols-10">
                {clues.map((clue) => (
                    <div
                        key={clue.id}
                        className={`${clue.boxclassName} flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]`}
                        onClick={() => handleClueClick(clue)}
                    >
                        <Image
                            src={clue.icon}
                            width={95}
                            height={95}
                            alt={clue.heading}
                        />
                        <h3 className={clue.headingclassName}>{clue.heading}</h3>
                        <p className={clue.className}>{clue.description}</p>
                    </div>
                ))}
            </div>

            <LockModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                dayNumber={selectedDay}
            />
        </>
    );
}
