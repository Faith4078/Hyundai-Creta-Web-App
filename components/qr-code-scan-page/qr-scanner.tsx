"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import { Camera, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { LocationModal, type LocationData } from '@/app/(users dashboard)/dashboard/qr-code-scan-page/location-modal';
import SuccessModal from './success-modal';
import Image from 'next/image';

type Step = 'idle' | 'location' | 'scanning' | 'success';

// Haversine formula to calculate distance between two points in meters
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Helper to parse coordinates from string like "21.5433, 39.1728"
function parseCoordinates(text: string): { lat: number, lng: number } | null {
  // Robust regex to handle coordinates with degree symbols, N/S/E/W indicators, and optional commas
  // Format examples: "21.5433, 39.1728", "21.5433° N, 39.1728° E", "21.5433 N 39.1728 E"
  const coordRegex = /(-?\d+\.?\d*)\s*°?\s*([NS])?\s*[,/]?\s*(-?\d+\.?\d*)\s*°?\s*([EW])?/i;
  const match = text.match(coordRegex);

  if (match) {
    let lat = parseFloat(match[1]);
    let lng = parseFloat(match[3]);

    // Adjust signs based on N/S/E/W
    if (match[2] && match[2].toUpperCase() === 'S') lat = -Math.abs(lat);
    if (match[4] && match[4].toUpperCase() === 'W') lng = -Math.abs(lng);

    if (!isNaN(lat) && !isNaN(lng)) {
      return { lat, lng };
    }
  }
  return null;
}

export default function QrScanner() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('idle');
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{ name: string, ar: string } | null>(null);

  const searchParams = useSearchParams();
  const dayNumber = searchParams.get("day");

  console.log("finalyNumber", dayNumber);

  const handleStart = () => {
    setStep('location');
    setError(null);
    setVerificationResult(null);
  };

  const handleLocationConfirm = (location: LocationData) => {
    setSelectedLocation(location);
    setStep('scanning');
  };

  const handleScan = async (detectedCodes: any) => {
    if (detectedCodes && detectedCodes.length > 0 && selectedLocation && !isVerifying) {
      setIsVerifying(true);
      setError(null);

      const qrText = detectedCodes[0].rawValue || "";
      console.log("Scanned QR Text:", qrText);

      // Check if QR contains coordinates
      const embeddedCoords = parseCoordinates(qrText);
      const targetLocation = embeddedCoords || { lat: selectedLocation.lat, lng: selectedLocation.lng };
      const locationName = embeddedCoords ? "QR-Specified Location" : selectedLocation.en;
      const locationNameAr = embeddedCoords ? "موقع محدد في الرمز" : selectedLocation.ar;

      if (!("geolocation" in navigator)) {
        setError("Geolocation is not supported by your browser. / الموقع الجغرافي غير مدعوم في متصفحك.");
        setIsVerifying(false);
        return;
      }

      const getPosition = (options: PositionOptions): Promise<GeolocationPosition> => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      };

      try {
        let position: GeolocationPosition;

        try {
          // Attempt 1: High Accuracy
          console.log("Attempting high-accuracy geolocation...");
          position = await getPosition({ enableHighAccuracy: true, timeout: 6000, maximumAge: 0 });
        } catch (err: any) {
          console.warn("High accuracy failed, falling back to low accuracy:", err);
          // Attempt 2: Low Accuracy fallback
          position = await getPosition({ enableHighAccuracy: false, timeout: 10000, maximumAge: 0 });
        }

        const { latitude, longitude } = position.coords;
        const distance = calculateDistance(
          latitude,
          longitude,
          targetLocation.lat,
          targetLocation.lng
        );

        console.log(`Current position: ${latitude}, ${longitude}`);
        console.log(`Target position: ${targetLocation.lat}, ${targetLocation.lng}`);
        console.log(`Distance: ${distance.toFixed(2)} meters`);

        // Threshold: 500 meters
        if (distance <= 500) {
          setVerificationResult({ name: locationName, ar: locationNameAr });
          setStep('success');
        } else {
          setError(`Too far from ${locationName} (${(distance / 1000).toFixed(2)} km away). Please move closer. / أنت بعيد جداً عن ${locationNameAr}. يرجى الاقتراب أكثر.`);
          setIsVerifying(false);
        }
      } catch (err: any) {
        console.error("Geolocation error after fallback:", err);
        let errorMsg = "Unable to verify your location. Please check your GPS settings.";
        let errorMsgAr = "تعذر التحقق من موقعك. يرجى التحقق من إعدادات GPS.";

        if (err.code === 1) { // PERMISSION_DENIED
          errorMsg = "Location access denied. Please enable location permissions.";
          errorMsgAr = "تم رفض الوصول للموقع. يرجى تفعيل أذونات الموقع.";
        } else if (err.code === 2) { // POSITION_UNAVAILABLE
          errorMsg = "Location unavailable. Please check your GPS signal.";
          errorMsgAr = "الموقع غير متاح. يرجى التحقق من إشارة GPS.";
        } else if (err.code === 3) { // TIMEOUT
          errorMsg = "Location request timed out. Please try again.";
          errorMsgAr = "انتهى وقت طلب الموقع. يرجى المحاولة مرة أخرى.";
        }

        setError(`${errorMsg} / ${errorMsgAr}`);
        setIsVerifying(false);
      }
    }
  };

  const handleNavigateToFinal = () => {
    router.push(`/dashboard/final-page?day=${dayNumber}`);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
      {/* Error Message */}
      {error && (
        <div className="absolute top-6 left-6 right-6 p-4 bg-red-600/20 border border-red-500/40 text-red-500 text-xs lg:text-sm font-cairo flex items-center justify-center gap-3 z-30 rounded-xl backdrop-blur-md shadow-lg shadow-black/20">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span className="text-center font-medium">{error}</span>
        </div>
      )}

      {/* Camera Placeholder */}
      {step !== 'scanning' ? (
        <div className="relative w-full max-w-[482px] aspect-[482/402] lg:h-[402px] mb-8 lg:mb-[67px] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/Background.png"
            alt="Camera Background"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 768px) 100vw, 482px"
            priority
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
            <div className="absolute inset-4 border-[3px] border-dashed border-[#2DD4BF] rounded-lg opacity-60"></div>
            <div className="bg-black/40 rounded-[20px] p-6 flex flex-col items-center justify-center backdrop-blur-sm w-[160px] h-[140px] lg:w-[200px] lg:h-[180px]">
              <div className="mb-4 text-white opacity-80">
                <Camera className="w-10 h-10 lg:w-12 lg:h-12 text-[#2DD4BF]" />
              </div>
              <p className="text-gray-200 font-medium text-xs lg:text-[15px] mb-1 text-center leading-tight">Ready to scan</p>
              <p className="text-gray-400 font-cairo text-[10px] lg:text-[13px] text-center">جاهز للمسح</p>
            </div>
          </div>
        </div>
      ) : (
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
          {isVerifying && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2DD4BF] mb-4"></div>
              <p className="text-white font-cairo">Verifying Location... / جاري التحقق...</p>
            </div>
          )}
        </div>
      )}

      {/* Action Button */}
      {step !== 'scanning' && (
        <Button
          type="button"
          onClick={handleStart}
          className="w-full max-w-[482px] h-12 lg:h-[60px] bg-[#2DD4BF] hover:bg-[#14B8A6] text-black rounded-[6px] text-base lg:text-lg font-bold flex items-center justify-center gap-2 lg:gap-3 transition-all duration-300 font-cairo hover:scale-[1.02] active:scale-95 hover:shadow-lg hover:shadow-[#2DD4BF]/20"
        >
          <Camera className="w-5 h-5" />
          <span>Start Scanning</span>
          <span>/ ابدأ المسح</span>
        </Button>
      )}

      {step === 'scanning' && (
        <div className="w-full max-w-[482px] space-y-4">
          <div className="flex flex-col items-center justify-center gap-1 text-[#2DD4BF] font-medium font-cairo">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Scanning for: {selectedLocation?.en}</span>
            </div>
            <p className="text-[10px] font-mono opacity-60">
              Target: {selectedLocation?.lat.toFixed(4)}, {selectedLocation?.lng.toFixed(4)}
            </p>
          </div>
          <Button
            type="button"
            onClick={() => {
              setStep('idle');
              setIsVerifying(false);
            }}
            variant="outline"
            className="w-full h-12 lg:h-[60px] border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF]/10 rounded-[6px] text-base lg:text-lg font-bold flex items-center justify-center gap-2 lg:gap-3 transition-all font-cairo"
          >
            Cancel / إلغاء
          </Button>
        </div>
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
        locationName={verificationResult?.name || selectedLocation?.en || "Location Verified"}
        locationNameAr={verificationResult?.ar || selectedLocation?.ar || "تم التحقق من الموقع"}
      />
    </div>
  );
}
