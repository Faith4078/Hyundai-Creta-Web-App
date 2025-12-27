"use client";

import { MapPin, Check } from "lucide-react";
import React from "react";

export type LocationData = {
    id: string;
    en: string;
    ar: string;
    lat: number;
    lng: number;
};

const PREDEFINED_LOCATIONS: LocationData[] = [
    {
        id: "jeddah-hq",
        en: "Jeddah HQ",
        ar: "مقر جدة الرئيسي",
        lat: 21.5433,
        lng: 39.1728
    },
    {
        id: "riyadh-branch",
        en: "Riyadh Branch",
        ar: "فرع الرياض",
        lat: 24.7136,
        lng: 46.6753
    },
    {
        id: "dammam-center",
        en: "Dammam Center",
        ar: "مركز الدمام",
        lat: 26.4207,
        lng: 50.0888
    }
];

export function LocationModal({ isOpen, onClose, onConfirm }: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (location: LocationData) => void
}) {
    const [selectedId, setSelectedId] = React.useState<string>(PREDEFINED_LOCATIONS[0].id);

    if (!isOpen) return null;

    const selectedLocation = PREDEFINED_LOCATIONS.find(loc => loc.id === selectedId) || PREDEFINED_LOCATIONS[0];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 font-inter animate-in fade-in duration-200">
            <div
                className="relative w-full max-w-[482px] rounded-[24px] bg-[#1F2937] px-6 pt-[43px] pb-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col items-center overflow-hidden"
            >
                {/* Background Tint */}
                <div className="absolute inset-0 bg-[rgba(20,83,45,0.10)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Icon */}
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#22C55E] flex items-center justify-center mb-6 shadow-lg shadow-[#22C55E]/20">
                        <MapPin className="w-10 h-10 lg:w-12 lg:h-12 text-white fill-current" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-[32px] font-bold text-white mb-2 font-cairo leading-tight">Select Location</h2>
                    <p className="text-[#9CA3AF] text-sm mb-6 font-cairo">اختر الموقع</p>

                    {/* Location Selection List */}
                    <div className="w-full space-y-3 mb-8">
                        {PREDEFINED_LOCATIONS.map((loc) => (
                            <button
                                key={loc.id}
                                onClick={() => setSelectedId(loc.id)}
                                className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${selectedId === loc.id
                                    ? "bg-[#2DD4BF]/10 border-[#2DD4BF] text-white"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                    }`}
                            >
                                <div className="text-left flex-1">
                                    <p className="font-bold text-sm lg:text-base">{loc.en}</p>
                                    <p className="text-xs lg:text-sm font-cairo opacity-70 mb-1">{loc.ar}</p>
                                    <p className="text-[10px] font-mono text-gray-500">{loc.lat.toFixed(4)}, {loc.lng.toFixed(4)}</p>
                                </div>
                                {selectedId === loc.id && (
                                    <div className="w-6 h-6 bg-[#2DD4BF] rounded-full flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-black stroke-[3px]" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Start Scanning Button */}
                    <button
                        onClick={() => onConfirm(selectedLocation)}
                        className="w-full h-12 lg:h-[60px] bg-[#2DD4BF] hover:bg-[#14B8A6] text-black rounded-lg text-base lg:text-lg font-bold font-cairo transition-colors flex items-center justify-center"
                    >
                        Confirm & Start Scanning / تأكيد وبدء المسح
                    </button>

                    <button
                        onClick={onClose}
                        className="mt-4 text-gray-400 hover:text-white text-sm font-cairo"
                    >
                        Cancel / إلغاء
                    </button>
                </div>
            </div>
        </div>
    );
}
