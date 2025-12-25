"use client";

import React from 'react';
import { ChevronLeft, Lightbulb, HelpCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalPage() {
    return (
        <main className="min-h-screen bg-[#070b13] text-white p-4 font-cairo" dir="rtl">
            <div className="max-w-[1296px] mx-auto pt-6 px-4">
                {/* Header / Back Navigation - Aligned Left in image context relative to the screen */}
                <div className="flex justify-end mb-12">
                    <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#111827]/50 border border-white/5 text-[#9CA3AF] hover:text-white transition-all text-sm">
                        <ChevronLeft className="w-4 h-4" />
                        <span>المرحلة النهائية</span>
                    </button>
                </div>

                <div className="flex flex-col items-center max-w-[800px] mx-auto space-y-8 pb-20">
                    {/* Central Target Icon */}
                    <div className="relative mb-4">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(217,119,6,0.3)]">
                            <div className="w-12 h-12 border-[3.5px] border-white/90 rounded-full flex items-center justify-center relative">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="absolute inset-[-12px] border border-white/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Titles */}
                    <div className="text-center space-y-4">
                        <h1 className="text-[34px] lg:text-[46px] font-bold leading-tight tracking-tight">هذا هو الدليل النهائي</h1>
                        <p className="text-[#9CA3AF] text-sm lg:text-lg opacity-70 font-medium">
                            هذا هو اللغز الأخير، إذا حللته سيظهر موقع السيارة
                        </p>
                    </div>

                    {/* Instructions Section - Refined for exact match with close-up screenshot */}
                    <div className="w-full bg-[#111827] border border-white/[0.03] rounded-[24px] p-6 lg:p-10 relative overflow-hidden shadow-2xl ring-1 ring-white/5">
                        <div className="flex flex-col space-y-6">
                            {/* Top Row: Title and Bulb Icon Right Aligned */}
                            <div className="flex items-center justify-end gap-3 px-2">
                                <h3 className="text-[24px] lg:text-[28px] font-bold text-white">التعليمات</h3>
                                <div className="w-12 h-12 bg-[#1e293b] rounded-xl flex items-center justify-center text-[#3B82F6] ring-1 ring-white/10 shadow-lg">
                                    <Lightbulb className="w-7 h-7 fill-[#3B82F6]/20" />
                                </div>
                            </div>

                            {/* Middle Row: Text - Right Aligned with exact wording */}
                            <p className="text-[#9CA3AF] text-base lg:text-lg leading-relaxed text-right pr-2">
                                ' مرة أخرى، ثم ادمج الرموز مع الأرقام التي اكتشفتها سابقاً. استخدم المعادلة أدناه لإيجاد الإجابة النهائية.
                            </p>

                            {/* Bottom Row: Action Buttons */}
                            <div className="flex items-center justify-end gap-5 pt-2">
                                <div className="flex items-center gap-4">
                                    {/* Action Button */}
                                    <Button className="h-[60px] min-w-[340px] px-10 bg-gradient-to-r from-[#3178ff] to-[#00f2ff] hover:opacity-90 text-[#0F172A] font-extrabold text-[18px] rounded-[14px] flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(59,120,246,0.3)]">
                                        <span>فتح الهايلات</span>
                                        <div className="w-6 h-6 border-2 border-dashed border-black/40 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold">?</span>
                                        </div>
                                    </Button>

                                    {/* Circular Icon with Blue Ring Glow */}
                                    <div className="relative group">
                                        <div className="absolute inset-[-4px] rounded-full border-2 border-[#1face8] opacity-100 shadow-[0_0_15px_#1face8]"></div>
                                        <div className="w-[64px] h-[64px] rounded-full bg-[#162135] border border-white/10 flex items-center justify-center text-[#3B82F6] cursor-pointer relative z-10 transition-transform active:scale-95 shadow-lg">
                                            <div className="w-8 h-8 border-2 border-dashed border-[#3B82F6]/60 rounded-full flex items-center justify-center">
                                                <span className="text-xl font-bold">?</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formula Section */}
                    <div className="w-full bg-[#111827] border border-white/[0.03] rounded-[32px] p-8 lg:p-12 space-y-12 shadow-2xl ring-1 ring-white/5">
                        <div className="text-center space-y-2">
                            <h2 className="text-[28px] lg:text-[34px] font-bold">تحدي الصيغة</h2>
                            <p className="text-[#9CA3AF] text-sm lg:text-base font-medium opacity-60">حقول المعادلة</p>
                        </div>

                        {/* Formula Display Card */}
                        <div className="bg-black/60 rounded-[24px] pt-5 pb-10 px-8 border border-white/[0.05] relative shadow-inner">
                            <span className="text-[#9CA3AF] text-[11px] font-bold tracking-[0.2em] block text-center mb-6 opacity-40 uppercase">الصيغة</span>
                            <div className="flex items-center justify-center">
                                <p className="text-2xl lg:text-[44px] font-bold text-white tracking-widest font-mono">
                                    الكود النهائي = (أ × ب) + (ج – د)
                                </p>
                            </div>
                        </div>

                        {/* Input Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                            {/* Top Right */}
                            <div className="space-y-4">
                                <label className="text-[11px] text-[#9CA3AF] block text-right pr-2 font-medium opacity-80">(من اللغز ٥) B</label>
                                <div className="bg-black/80 border border-white/[0.03] rounded-[20px] h-[72px] flex items-center justify-center text-white font-bold text-3xl shadow-2xl">0</div>
                            </div>
                            {/* Top Left */}
                            <div className="space-y-4">
                                <label className="text-[11px] text-[#9CA3AF] block text-right pr-2 font-medium opacity-80">(من الهايلات)</label>
                                <div className="bg-black/80 border border-white/[0.03] rounded-[20px] h-[72px] flex items-center justify-center text-white font-bold text-3xl shadow-2xl">0</div>
                            </div>
                            {/* Bottom Right */}
                            <div className="space-y-4">
                                <label className="text-[11px] text-[#9CA3AF] block text-right pr-2 font-medium opacity-80">(من الانستغرام)</label>
                                <div className="bg-black/80 border border-white/[0.03] rounded-[20px] h-[72px] flex items-center justify-center text-white font-bold text-3xl shadow-2xl">0</div>
                            </div>
                            {/* Bottom Left */}
                            <div className="space-y-4">
                                <label className="text-[11px] text-[#9CA3AF] block text-right pr-2 font-medium opacity-80">(من التقدم)</label>
                                <div className="bg-black/80 border border-white/[0.03] rounded-[20px] h-[72px] flex items-center justify-center text-white font-bold text-3xl shadow-2xl">0</div>
                            </div>
                        </div>

                        {/* Final Answer Container */}
                        <div className="bg-gradient-to-r from-[#3178ff] via-[#00c6ff] to-[#00f2ff] p-[1.5px] rounded-[30px] shadow-[0_20px_60px_rgba(49,120,255,0.4)] relative">
                            <div className="bg-gradient-to-r from-[#3B82F6] to-[#00D9FF] rounded-[28.5px] px-8 py-12 flex flex-col items-center gap-8 shadow-inner">
                                <h3 className="text-[#0F172A] font-extrabold text-[22px] lg:text-[26px]">الإجابة النهائية</h3>
                                <div className="w-full bg-black rounded-[20px] h-[84px] flex items-center justify-center border border-black/10 shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)] px-10">
                                    <span className="text-[#9CA3AF] text-[42px] font-bold tracking-[0.5em] pt-2 scale-y-75">---</span>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button className="w-full h-[84px] bg-gradient-to-r from-[#10B981] to-[#059669] hover:opacity-95 items-center justify-center text-white font-extrabold text-[24px] rounded-[24px] gap-4 shadow-[0_15px_35px_rgba(16,185,129,0.35)] transition-all">
                            <CheckCircle className="w-8 h-8 stroke-[3px]" />
                            <span>إرسال الإجابة النهائية</span>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
