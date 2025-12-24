"use client";

import { MapPin } from "lucide-react";
import React from "react";

export function LocationModal({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: (locationName: string, locationNameAr: string) => void }) {
    const [locationName, setLocationName] = React.useState<string>("Detecting location...");
    const [locationNameAr, setLocationNameAr] = React.useState<string>("جارٍ تحديد الموقع...");

    React.useEffect(() => {
        if (isOpen) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // In a real app, you'd reverse geocode here. 
                        // For now, we'll just say "Current Location" as requested.
                        setLocationName("Current Location");
                        setLocationNameAr("الموقع الحالي");
                    },
                    (error) => {
                        console.error("Error getting location", error);
                        setLocationName("Unknown Location");
                        setLocationNameAr("موقع غير معروف");
                    }
                );
            } else {
                setLocationName("Location not supported");
                setLocationNameAr("الموقع غير مدعوم");
            }
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 font-inter animate-in fade-in duration-200">
            <div
                className="relative w-full max-w-[482px] rounded-[24px] bg-[#1F2937] px-6 pt-[43px] pb-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col items-center overflow-hidden"
            >
                {/* Background Tint similar to SuccessModal */}
                <div className="absolute inset-0 bg-[rgba(20,83,45,0.20)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Icon - Styled to match the premium look */}
                    <div className="w-[120px] h-[120px] rounded-full bg-[#22C55E] flex items-center justify-center mb-8 shadow-lg shadow-[#22C55E]/30">
                        <MapPin className="w-14 h-14 text-white fill-current" />
                    </div>

                    {/* Title */}
                    <h2 className="text-[32px] lg:text-[40px] font-bold text-white mb-4 font-cairo leading-tight">Location</h2>

                    <div className="text-center font-cairo text-[#BBF7D0] space-y-2 mb-8">
                        <p className="text-sm lg:text-lg leading-relaxed">
                            Your check-in at <span className="font-bold">{locationName}</span> has been logged.
                        </p>
                        <p className="text-sm lg:text-lg leading-relaxed dir-rtl">
                            تم تسجيل وصولك في <span className="font-bold">{locationNameAr}</span> بنجاح.
                        </p>
                    </div>

                    {/* Start Scanning Button */}
                    <button
                        onClick={() => onConfirm(locationName, locationNameAr)}
                        className="w-full h-12 lg:h-[60px] bg-[#374151] hover:bg-[#4B5563] text-white rounded-lg text-base lg:text-lg font-bold font-cairo transition-colors flex items-center justify-center border border-white/5"
                    >
                        Start Scanning / ابدأ المسح
                    </button>
                </div>
            </div>
        </div>
    );
}
