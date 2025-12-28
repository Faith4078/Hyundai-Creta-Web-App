import QrScanner from '@/components/qr-code-scan-page/qr-scanner';
import { Camera, ScanLine, Hourglass } from 'lucide-react';

export default function QrCodeScanPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-black px-4 flex items-center justify-center py-8">
            <section className="max-w-[1296px] w-full mx-auto">
                {/* Main Card */}
                <div className="flex flex-col lg:flex-row rounded-[24px] overflow-hidden min-h-[632px]">
                    {/* Left Panel - Instructions */}
                    <div className="min-h-[462px] lg:h-[632px] rounded-t-[24px] lg:rounded-l-[24px] lg:rounded-tr-none flex-1 bg-[#17202F] order-2 lg:order-1 p-6 lg:p-14 flex flex-col justify-center">
                        {/* Header Text */}
                        <div className="mb-10 lg:mb-14">
                            <h1 className="text-2xl lg:text-[32px] font-bold text-white mb-2 leading-tight">Verify Your Visit</h1>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-md">
                                Scan the QR code at the partner location to instantly
                                <br className="hidden lg:block" />
                                log your check-in.
                            </p>

                            <div className="mt-6 lg:mt-8 text-right">
                                <h2 className="text-2xl lg:text-[32px] font-bold text-white mb-2 font-cairo">تأكيد زيارتك</h2>
                                <p className="text-[#9CA3AF] text-sm font-cairo dir-rtl">
                                    في موقع الشريك لتسجيل وصولك فورا.
                                </p>
                            </div>
                        </div>

                        {/* Steps */}
                        <div className="space-y-6 lg:space-y-9">
                            {/* Step 1 */}
                            <div className="flex items-center group hover:bg-white/5 rounded-xl p-2 -mx-2 transition-colors duration-300 cursor-default">
                                <div className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] bg-[#293644] rounded-full flex items-center justify-center shrink-0 mr-4 lg:mr-6">
                                    <Camera className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#2DD4BF]" />
                                </div>
                                <div className="flex-1 grid grid-cols-2 gap-4 border-b border-white/5 pb-4 lg:pb-6">
                                    <div>
                                        <h3 className="font-bold text-white text-sm lg:text-[15px] mb-1">Point Your Camera</h3>
                                        <p className="text-[#9CA3AF] text-[10px] lg:text-xs">Align the QR code within the frame.</p>
                                    </div>
                                    <div className="text-right">
                                        <h3 className="font-bold text-white text-sm lg:text-[15px] mb-1 font-cairo">وجه الكاميرا</h3>
                                        <p className="text-[#9CA3AF] text-[10px] lg:text-xs font-cairo">داخل الإطار.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-center group hover:bg-white/5 rounded-xl p-2 -mx-2 transition-colors duration-300 cursor-default">
                                <div className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] bg-[#293644] rounded-full flex items-center justify-center shrink-0 mr-4 lg:mr-6">
                                    <ScanLine className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#2DD4BF]" />
                                </div>
                                <div className="flex-1 grid grid-cols-2 gap-4 border-b border-white/5 pb-4 lg:pb-6">
                                    <div>
                                        <h3 className="font-bold text-white text-sm lg:text-[15px] mb-1">Scan Automatically</h3>
                                        <p className="text-[#9CA3AF] text-[10px] lg:text-xs">The scan will start once the code is detected.</p>
                                    </div>
                                    <div className="text-right">
                                        <h3 className="font-bold text-white text-sm lg:text-[15px] mb-1 font-cairo">مسح تلقائي</h3>
                                        <p className="text-[#9CA3AF] text-[10px] lg:text-xs font-cairo">سيبدأ المسح بمجرد اكتشاف الرمز.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-center group hover:bg-white/5 rounded-xl p-2 -mx-2 transition-colors duration-300 cursor-default">
                                <div className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] bg-[#293644] rounded-full flex items-center justify-center shrink-0 mr-4 lg:mr-6">
                                    <Hourglass className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#2DD4BF]" />
                                </div>
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-bold text-white text-sm lg:text-[15px] mb-1">Get Confirmation</h3>
                                        <p className="text-[#9CA3AF] text-[10px] lg:text-xs">Receive instant verification upon success.</p>
                                    </div>
                                    <div className="text-right">
                                        <h3 className="font-bold text-white text-sm lg:text-[15px] mb-1 font-cairo">احصل على تأكيد</h3>
                                        <p className="text-[#9CA3AF] text-[10px] lg:text-xs font-cairo">ستتلقى تأكيدا فوريا عند النجاح.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Scanner */}
                    <div className="min-h-[462px] lg:h-[632px] rounded-b-[24px] lg:rounded-r-[24px] lg:rounded-bl-none flex-1 flex flex-col justify-center order-1 lg:order-2 bg-[#222C3C]">
                        <QrScanner />
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 lg:mt-[42px] text-center">
                    <p className="text-[#9CA3AF] font-cairo text-xs lg:text-sm">© 2025 هيونداي السعودية – جميع الحقوق محفوظة</p>
                </div>
            </section>
        </main>
    );
}
