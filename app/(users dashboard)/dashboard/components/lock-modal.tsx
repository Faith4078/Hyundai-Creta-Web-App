"use client";

import { X } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

interface LockModalProps {
    isOpen: boolean;
    onClose: () => void;
    dayNumber: string;
}

export function LockModal({ isOpen, onClose, dayNumber }: LockModalProps) {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
            <div
                className="relative w-full max-w-[582px] rounded-[20px] bg-[#111827] border border-[#3B82F6] p-6 pt-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                dir="rtl"
            >
                <button
                    onClick={onClose}
                    className="absolute left-4 top-4 text-white/70 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center text-center">
                    <h2 className="font-cairo text-center text-[#3B82F6] font-[800] text-[1.25rem] leading-[2.0625rem] lg:text-[1.8rem] mb-6">
                        اللغز الرقمي {dayNumber} – الصورة الغامضة
                    </h2>

                    <p className="font-cairo text-white text-center font-normal text-[0.875rem] leading-[1.6rem] lg:text-[1.125rem] lg:leading-[2rem] max-w-[480px] mb-8">
                        بينّ الصور تختبئ الأرقام بخفاء انظرّ جيدًا... فالإشارةُ أمامك
                        دون نداءٍ شريحةٌ واحدةٌ تُخفي الرقمَ وراءَ الجمالِ اكتشفها،
                        وأكملْ طريقك نحو السؤال التالي
                    </p>

                    <button
                        onClick={() => router.push("/dashboard/qr-code-scan-page")}
                        className="w-full max-w-[397px] h-[50px] lg:h-[65px] rounded-[100px] bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] font-cairo text-[#0F172A] font-bold text-[1.1rem] lg:text-[1.5rem] flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                        الإجابة
                    </button>
                </div>
            </div>
        </div>
    );
}
