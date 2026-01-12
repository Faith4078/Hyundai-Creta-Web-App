"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { updateUserDays } from '@/supabase/client';
import { authClient } from '@/lib/better-auth/auth-client';

interface Challenge {
    formula: string;
    description: string;
    labels: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    values: {
        A: number;
        B: number;
        C: number;
        D: number;
    };
    correctAnswer: number;
}

const CHALLENGES: Challenge[] = [
    {
        formula: "الكود النهائي = (أ × ب) + (ج – د)",
        description: "استخدم الأرقام التي وجدتها لحل المعادلة",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 12, B: 5, C: 20, D: 10 },
        correctAnswer: 70 // (12 * 5) + (20 - 10) = 60 + 10 = 70
    },
    {
        formula: "الكود النهائي = (أ + ب) × (ج - د)",
        description: "اكتشف الأسرار المخفية خلف الأرقام",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 8, B: 7, C: 15, D: 5 },
        correctAnswer: 150 // (8 + 7) * (15 - 5) = 15 * 10 = 150
    },
    {
        formula: "الكود النهائي = (أ × ج) - (ب + د)",
        description: "الدقة هي مفتاح الوصول للسيارة",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 10, B: 2, C: 15, D: 8 },
        correctAnswer: 140 // (10 * 15) - (2 + 8) = 150 - 10 = 140
    },
    {
        formula: "الكود النهائي = (أ + ب + ج) - د",
        description: "مجموع الرموز يفتح لك الطريق",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 45, B: 30, C: 25, D: 10 },
        correctAnswer: 90 // (45 + 30 + 25) - 10 = 100 - 10 = 90
    },
    {
        formula: "الكود النهائي = (ب × د) + (أ - ج)",
        description: "ترتيب العمليات هو السر الحقيقي",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 50, B: 10, C: 20, D: 5 },
        correctAnswer: 80 // (10 * 5) + (50 - 20) = 50 + 30 = 80
    },
    {
        formula: "الكود النهائي = (أ × ب) - (ج × د)",
        description: "الفرق بين القوة والسرعة يظهر النتيجة",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 20, B: 10, C: 5, D: 4 },
        correctAnswer: 180 // (20 * 10) - (5 * 4) = 200 - 20 = 180
    },
    {
        formula: "الكود النهائي = (أ + ج) × ب - د",
        description: "اجمع الأجزاء ثم ضاعف القوة",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 15, B: 4, C: 5, D: 10 },
        correctAnswer: 70 // (15 + 5) * 4 - 10 = 80 - 10 = 70
    },
    {
        formula: "الكود النهائي = أ + (ب × ج) + د",
        description: "التوازن الرقمي هو دليلك النهائي",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 100, B: 50, C: 2, D: 50 },
        correctAnswer: 250 // 100 + (50 * 2) + 50 = 100 + 100 + 50 = 250
    },
    {
        formula: "الكود النهائي = (د × أ) - (ب + ج)",
        description: "عكس الاتجاه قد يكشف المستور",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 10, B: 25, C: 25, D: 15 },
        correctAnswer: 100 // (15 * 10) - (25 + 25) = 150 - 50 = 100
    },
    {
        formula: "الكود النهائي = (أ + ب + ج + د) × ٢",
        description: "الكل للواحد والواحد للكل، ضاعف الجهد",
        labels: { A: "A (من الهايلات)", B: "B (من اللغز ٥)", C: "C (من الانستغرام)", D: "D (من التقدم)" },
        values: { A: 10, B: 15, C: 5, D: 20 },
        correctAnswer: 100 // (10 + 15 + 5 + 20) * 2 = 50 * 2 = 100
    }
];

export default function FinalPage() {
    const router = useRouter();
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [options, setOptions] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isError, setIsError] = useState(false);
    const { data: session } = authClient.useSession()
    const searchParams = useSearchParams();
  const dayNumber = searchParams.get("day");

  console.log("finalyNumber2", dayNumber);

    useEffect(() => {
        // Select a random challenge and generate options on mount
        const randomIndex = Math.floor(Math.random() * CHALLENGES.length);
        const selected = CHALLENGES[randomIndex];
        setChallenge(selected);

        // Generate 4 unique options (1 correct, 3 distractors)
        const generateOptions = (correct: number) => {
            const opts = new Set<number>([correct]);
            while (opts.size < 4) {
                // Generate distractors close to the correct answer
                const offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() > 0.5 ? 10 : -10);
                const distractor = correct + offset;
                if (distractor > 0 && distractor !== correct) {
                    opts.add(distractor);
                }
            }
            return Array.from(opts).sort(() => Math.random() - 0.5);
        };

        setOptions(generateOptions(selected.correctAnswer));
    }, []);

    // const handleFinalSubmit = () => {
    //     if (!challenge || selectedOption === null) return;

    //     if (selectedOption === challenge.correctAnswer) {
    //         router.push('/dashboard/winner-page');
    //     } else {
    //         setIsError(true);
    //         // Reset error after animation
    //         setTimeout(() => setIsError(false), 2000);
    //     }
    // };

    const handleFinalSubmit = async () => {
        if (!challenge || selectedOption === null) return;
      
        if (selectedOption === challenge.correctAnswer) {
          try {
            const userId = session?.user?.id;
            if (!userId) {
              console.error('User ID is not available');
              return;
            }
      
                // Update user days
                await updateUserDays(userId, Number(dayNumber));
      
            // Redirect to winner page
            router.push('/dashboard/winner-page');
          } catch (err) {
            console.error('Failed to update user days:', err);
            // Optional: show error to user
          }
        } else {
          setIsError(true);
          // Reset error after animation
          setTimeout(() => setIsError(false), 2000);
        }
      };
      

    if (!challenge) {
        return <div className="min-h-screen bg-[#070b13] flex items-center justify-center text-white">جاري التحميل...</div>;
    }

    return (
        <main className="min-h-screen bg-[#070b13] text-white p-4 font-cairo" dir="rtl">
            <div className="max-w-[1296px] mx-auto pt-6 px-4">
                {/* Header / Back Navigation */}
                <div className="flex justify-end mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#111827]/50 border border-white/5 text-[#9CA3AF] hover:text-white transition-all text-sm hover:bg-[#111827] hover:border-white/20 active:scale-95"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span>المرحلة النهائية</span>
                    </button>
                </div>

                <div className="flex flex-col items-center max-w-[800px] mx-auto space-y-10 pb-20">
                    {/* Central Target Icon */}
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(217,119,6,0.3)]">
                            <div className="w-10 h-10 border-[3px] border-white/90 rounded-full flex items-center justify-center relative">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <div className="absolute inset-[-10px] border border-white/10 rounded-full scale-110"></div>
                            </div>
                        </div>
                    </div>

                    {/* Titles */}
                    <div className="text-center space-y-4">
                        <h1 className="text-[36px] lg:text-[42px] font-bold leading-tight">هذا هو الدليل النهائي</h1>
                        <p className="text-[#9CA3AF] text-sm lg:text-base opacity-80">
                            هذا هو اللغز الأخير. إذا حللته سيظهر موقع السيارة
                        </p>
                    </div>

                    {/* Instructions Section */}
                    <div className="w-full bg-[#0a101d] border border-white/[0.05] rounded-[24px] p-6 lg:p-8 relative overflow-hidden shadow-2xl">
                        <div className="flex flex-col space-y-6">
                            <div className="flex items-center justify-end gap-3">
                                <h3 className="text-[22px] lg:text-[24px] font-bold text-white">التعليمات</h3>
                                <div className="w-11 h-11 bg-[#1e293b] rounded-xl flex items-center justify-center text-[#3B82F6] ring-1 ring-white/10 shadow-lg">
                                    <Lightbulb className="w-6 h-6 fill-[#3B82F6]/20" />
                                </div>
                            </div>

                            <p className="text-[#9CA3AF] text-[15px] lg:text-base leading-relaxed text-right pr-2">
                                مرة أخرى، ثم ادمج الرموز مع الأرقام التي اكتشفتها سابقاً. استخدم المعادلة أدناه لإيجاد الإجابة النهائية وتحديد موقع السيارة.
                            </p>

                            <div className="flex items-center justify-end gap-5 pt-2">
                                <div className="flex items-center gap-4">
                                    <Button className="h-[52px] min-w-[200px] lg:min-w-[260px] px-8 bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] hover:opacity-90 text-[#0F172A] font-bold text-base rounded-[12px] flex items-center justify-center gap-3 shadow-[0_5px_20px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)]">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <span className="text-sm font-bold">?</span>
                                        </div>
                                        <span>فتح الهايلات</span>
                                    </Button>

                                    <div className="w-[52px] h-[52px] rounded-full bg-[#111827] border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-transform active:scale-95 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] duration-300">
                                        <div className="w-7 h-7 border-2 border-dashed border-[#22d3ee]/60 rounded-full flex items-center justify-center">
                                            <span className="text-base font-bold">?</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formula Section */}
                    <div className={`w-full bg-[#0a101d] border ${isError ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-white/[0.05]'} rounded-[32px] p-8 lg:p-10 space-y-10 shadow-2xl transition-all duration-300`}>
                        <div className="text-center space-y-1">
                            <h2 className="text-[28px] lg:text-[32px] font-bold italic">تحدي الصيغة</h2>
                            <p className="text-[#9CA3AF] text-sm font-medium opacity-60">حقول المعادلة</p>
                        </div>

                        {/* Formula Display Card */}
                        <div className="bg-black/80 rounded-[20px] pt-4 pb-8 px-6 border border-white/[0.05] relative">
                            <span className="text-[#9CA3AF] text-[10px] font-bold uppercase block text-center mb-5 opacity-40">الصيغة</span>
                            <div className="flex items-center justify-center">
                                <p className="text-2xl lg:text-[38px] font-bold text-white tracking-widest leading-relaxed">
                                    {challenge.formula}
                                </p>
                            </div>
                        </div>

                        {/* Values Display */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                            {[
                                { key: 'B', label: '(من اللغز ٥) B' },
                                { key: 'A', label: '(من الهايلات) A' },
                                { key: 'C', label: '(من الانستغرام) C' },
                                { key: 'D', label: '(من التقدم) D' }
                            ].map(({ key, label }) => (
                                <div key={key} className="space-y-3">
                                    <label className="text-[10px] lg:text-[11px] text-[#9CA3AF] block text-right pr-2 font-medium opacity-70">{label}</label>
                                    <div className="w-full bg-black/60 border border-white/[0.03] rounded-[16px] h-[64px] flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                                        {challenge.values[key as keyof typeof challenge.values]}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Options Section */}
                        <div className={`space-y-8 ${isError ? 'animate-shake' : ''}`}>
                            <div className="bg-gradient-to-r from-[#3178ff] to-[#01f2ff] p-[1.5px] rounded-[24px] shadow-[0_10px_40px_rgba(49,120,255,0.3)]">
                                <div className="bg-gradient-to-r from-[#3B82F6]/90 to-[#00D9FF]/90 rounded-[22.5px] p-6 lg:p-8 flex flex-col items-center gap-6">
                                    <h3 className="text-[#0F172A] font-bold text-lg lg:text-xl">الإجابة النهائية</h3>
                                    <div className="w-full bg-black rounded-[18px] min-h-[72px] p-4 flex flex-wrap items-center justify-center gap-3 border border-black/10 shadow-[inset_0_4px_15px_rgba(0,0,0,0.6)]">
                                        {options.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => {
                                                    setSelectedOption(opt);
                                                    setIsError(false);
                                                }}
                                                className={`min-w-[80px] lg:min-w-[100px] h-[52px] rounded-[12px] text-xl font-bold transition-all border-2 flex items-center justify-center hover:scale-105 active:scale-95 ${selectedOption === opt
                                                    ? 'bg-[#3B82F6] border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30'
                                                    }`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                onClick={handleFinalSubmit}
                                disabled={selectedOption === null}
                                className="w-full h-[64px] bg-gradient-to-r from-[#10B981] to-[#059669] hover:opacity-95 items-center justify-center text-white font-bold text-xl rounded-[20px] gap-3 shadow-[0_10px_30px_rgba(16,185,129,0.25)] transition-all disabled:opacity-50 disabled:grayscale hover:scale-[1.02] active:scale-95 hover:shadow-[0_15px_35px_rgba(16,185,129,0.35)] duration-300"
                            >
                                <CheckCircle className="w-7 h-7 stroke-[2.5px]" />
                                <span>إرسال الإجابة النهائية</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
            `}</style>
        </main>
    );
}
