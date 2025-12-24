"use client";

import { Check } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
    isOpen: boolean;
    onScanAnother: () => void;
    locationName: string;
    locationNameAr: string;
}

export function SuccessModal({ isOpen, onScanAnother, locationName, locationNameAr }: SuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4 font-inter">
            <div
                className="relative w-full max-w-[420px] rounded-[24px] bg-[#1F2937] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col items-center text-center"
            >
                {/* Icon */}
                <div className="w-24 h-24 rounded-full bg-[#22C55E] flex items-center justify-center mb-6 shadow-lg shadow-[#22C55E]/20">
                    <Check className="w-12 h-12 text-white stroke-[3px]" />
                </div>

                {/* Title */}
                <h2 className="text-[32px] font-bold text-white mb-4">Success</h2>

                {/* English Text */}
                <p className="text-[#9CA3AF] text-base mb-2 px-4 leading-relaxed">
                    Your check-in at <span className="font-bold text-white">{locationName}</span> has been logged.
                </p>

                {/* Arabic Text */}
                <p className="text-[#9CA3AF] text-base font-cairo mb-8 px-4 leading-relaxed dir-rtl">
                    تم تسجيل وصولك في <span className="font-bold text-white">{locationNameAr}</span> بنجاح.
                </p>

                {/* Button */}
                <Button
                    onClick={onScanAnother}
                    className="w-full h-[56px] bg-[#374151] hover:bg-[#4B5563] text-white text-lg font-medium rounded-xl border-none transition-all flex flex-col justify-center items-center py-0"
                >
                    <span className="leading-tight">Scan Another / مسح رمز آخر</span>
                </Button>
            </div>
        </div>
    );
}
