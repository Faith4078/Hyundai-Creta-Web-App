"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Camera } from 'lucide-react';
import { Scanner } from '@yudiel/react-qr-scanner';
// "scan qr code and then show success modal"
// "make exact same location and success modal"
// The previous code had `<QrScanner />` importing... wait, the previous file WAS `qr-scanner.tsx` and it only had `AlertDialog`.
// So the actual scanning logic is missing? 
// Or is `QrScanner` just the UI wrapper?
// The user said "scan qr code".
// I don't see any import for a scanning library in the original file I read.
// The original file `qr-scanner.tsx` was just a UI mock with "Camera feed will appear here".
// So I will simulate the scanning or just show the "Camera feed" UI and then maybe a "Simulate Scan" button or just let the user click "Start Scanning" -> "Location" -> "Scanner UI".
// Wait, the user said "after that scan qr code".
// I should probably add a fake scan timeout or a button to trigger success if real scanning isn't there.
// But wait, the user instructions "when i click on scan... open location modal...".
// I'll stick to the requested UI flow.
// I will keep the "Camera feed will appear here" UI for the "Scanning" state.
// And I will add a `useEffect` to simulate scanning success after a few seconds? Or just let the user click something?
// "scan qr code and then show success modal".
// Given I don't have the scanner lib set up, I'll assume the user might want the UI flow first.
// I'll add a temporary "Simulate Scan Success" button in the scanner view for testing/demo purposes, or just a timeout.
// Let's use a timeout for a smooth "fake" experience, or better, just leave the scanner UI and maybe the user has the logic elsewhere?
// No, I am editing `qr-scanner.tsx`.
// I will make the "Start Scanning" button open the Location Modal.
// Then when location is selected, show the Scanner UI.
// Then... how to trigger success?
// I'll add a hidden "Trigger Success" button or a timeout. The user didn't specify SDK.
// I'll go with a timeout (e.g. 3s) to simulate a scan for the demo flow.
// Or actually, looking at the previous file, it had `AlertDialogDemo` which was the success modal.
// I will implement the flow.

import { LocationModal } from '@/app/(users dashboard)/dashboard/qr-code-scan-page/location-modal';
import SuccessModal from './success-modal';
import Image from 'next/image';

type Step = 'idle' | 'location' | 'scanning' | 'success';

export default function QrScanner() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('idle');
  const [locationDetails, setLocationDetails] = useState<{ en: string, ar: string } | null>(null);

  const handleStart = () => {
    setStep('location');
  };

  const handleLocationConfirm = (name: string, nameAr: string) => {
    setLocationDetails({ en: name, ar: nameAr });
    setStep('scanning');
  };

  const handleScan = (detectedCodes: any) => {
    if (detectedCodes && detectedCodes.length > 0) {
      console.log("QR Details:", detectedCodes);
      console.log("Location:", locationDetails);
      alert(`Scanned: ${JSON.stringify(detectedCodes)}\nLocation: ${JSON.stringify(locationDetails)}`);
      setStep('success');
    }
  };

  const handleNavigateToFinal = () => {
    router.push('/dashboard/final-page');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
      {/* Camera Placeholder with Background Image - SHOW ONLY IF NOT SCANNING */}
      {step !== 'scanning' ? (
        <div className="relative w-full max-w-[482px] aspect-[482/402] lg:h-[402px] mb-8 lg:mb-[67px] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <Image
            src="/images/Background.png"
            alt="Camera Background"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 768px) 100vw, 482px"
            priority
          />

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
            <div className="absolute inset-4 border-[3px] border-dashed border-[#14B8A6] rounded-lg opacity-60"></div>
            <div className="bg-black/40 rounded-[20px] p-6 flex flex-col items-center justify-center backdrop-blur-sm w-[160px] h-[140px] lg:w-[200px] lg:h-[180px]">
              <div className="mb-4 text-white opacity-80">
                <div className="grid grid-cols-2 gap-1.5 w-10 h-10 lg:w-12 lg:h-12">
                  <div className="bg-gray-300 rounded-sm w-full h-full"></div>
                  <div className="bg-gray-300 rounded-sm w-full h-full"></div>
                  <div className="bg-gray-300 rounded-sm w-full h-full"></div>
                  <div className="bg-gray-300 rounded-sm w-full h-full relative">
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 font-medium text-xs lg:text-[15px] mb-1 text-center leading-tight">Camera feed will appear here</p>
              <p className="text-gray-400 font-cairo text-[10px] lg:text-[13px] text-center">سيظهر بث الكاميرا هنا</p>
            </div>
          </div>
        </div>
      ) : (
        /* Real Scanner Component */
        <div className="relative w-full max-w-[482px] aspect-[482/402] lg:h-[402px] mb-8 lg:mb-[67px] rounded-xl overflow-hidden shadow-2xl bg-black">
          <Scanner
            onScan={handleScan}
            components={{
              onOff: false,
              torch: false,
              zoom: false
            }}
            styles={{
              container: { width: '100%', height: '100%' },
              video: { width: '100%', height: '100%', objectFit: 'cover' }
            }}
          />
        </div>
      )}

      {/* Action Button */}
      {step !== 'scanning' && (
        <Button
          type="button"
          onClick={handleStart}
          className="w-full max-w-[482px] h-12 lg:h-[60px] bg-[#14B8A6] hover:bg-[#0D9488] text-white rounded-[6px] text-base lg:text-lg font-bold flex items-center justify-center gap-2 lg:gap-3 transition-all font-cairo"
        >
          <Camera className="w-5 h-5" />
          <span>Start Scanning</span>
          <span>/ ابدأ المسح</span>
        </Button>
      )}

      {step === 'scanning' && (
        <Button
          type="button"
          onClick={() => setStep('idle')}
          variant="outline"
          className="w-full max-w-[482px] h-12 lg:h-[60px] border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6]/10 rounded-[6px] text-base lg:text-lg font-bold flex items-center justify-center gap-2 lg:gap-3 transition-all font-cairo"
        >
          Cancel Scanning / إلغاء
        </Button>
      )}

      <LocationModal
        isOpen={step === 'location'}
        onClose={() => setStep('idle')}
        onConfirm={handleLocationConfirm}
      />

      <SuccessModal
        isOpen={step === 'success'}
        onClose={handleNavigateToFinal}
        onContinue={handleNavigateToFinal}
        locationName={locationDetails?.en || "Detected Location"}
        locationNameAr={locationDetails?.ar || "الموقع المكتشف"}
      />
    </div>
  );
}
