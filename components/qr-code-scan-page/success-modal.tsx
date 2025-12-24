import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onScanAnother: () => void;
    locationName?: string;
    locationNameAr?: string;
}

export default function SuccessModal({
    isOpen,
    onClose,
    onScanAnother,
    locationName = 'Innovate Cafe',
    locationNameAr = 'مقهى الإبداع',
}: SuccessModalProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="px-0 h-[550px] bg-transparent border-none shadow-none flex items-center justify-center max-w-none">
                <VisuallyHidden>
                    <AlertDialogTitle>Scan Success</AlertDialogTitle>
                </VisuallyHidden>
                <div className="w-full max-w-[482px] min-h-[462px] rounded-[24px] bg-[#1F2937] flex flex-col items-center pt-[43px] pb-8 relative shadow-2xl overflow-hidden">

                    {/* Background gradient/overlay if needed, mimicking the previous design but ensuring clean implementation */}
                    <div className="absolute inset-0 bg-[rgba(20,83,45,0.20)] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center w-full px-6">
                        <Image
                            src={'/assets/green-checkbox.svg'}
                            width={120}
                            height={120}
                            alt="success"
                            className="hidden lg:block mb-8"
                        />
                        <Image
                            src={'/assets/green-checkbox.svg'}
                            width={72}
                            height={72}
                            alt="success"
                            className="block lg:hidden mb-6"
                        />

                        <h4 className="font-cairo text-white text-center font-bold text-2xl lg:text-[40px] leading-tight mb-4">
                            Success
                        </h4>

                        <div className="text-center font-cairo text-[#BBF7D0] space-y-2 mb-8">
                            <p className="text-sm lg:text-lg leading-relaxed">
                                Your check-in at <span className="font-bold">{locationName}</span> has been logged.
                            </p>
                            <p className="text-sm lg:text-lg leading-relaxed dir-rtl">
                                تم تسجيل وصولك في <span className="font-bold">{locationNameAr}</span> بنجاح.
                            </p>
                        </div>

                        {/* Timestamp Box - Assuming static or removed if not needed? Previous code had it but it was complex. 
                I'll keep it simple as "Scan Another" logic is priority. 
                Wait, previous code had a timestamp placeholder. I will re-add if needed, but for now focusing on main modal structure.
            */}

                        <Button
                            type="button"
                            onClick={onScanAnother}
                            className="w-full max-w-[380px] h-12 lg:h-[60px] bg-[#374151] hover:bg-[#4B5563] text-white rounded-lg text-base lg:text-lg font-bold font-cairo transition-colors"
                        >
                            Scan Another / مسح رمز آخر
                        </Button>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
