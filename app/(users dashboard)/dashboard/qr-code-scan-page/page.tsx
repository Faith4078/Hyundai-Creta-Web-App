import QrScanner from '@/components/qr-code-scan-page/qr-scanner';

export default function QrCodeScanPage() {
  return (
    <main className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-black px-4 ">
      <section className="max-w-[1296px] w-full mx-auto ">
        {/* div block 1 */}
        <div className="flex flex-col lg:flex-row ">
          <div className="min-h-[462px] lg:h-[632px] rounded-[10px] lg:rounded-tl-[20px] lg:h-[632px] flex-1 bg-[#1F2937] order-2 lg:order-1"></div>
          <div className="min-h-[462px] lg:h-[632px] flex-1 flex-col justify-center rounded-[10px] order-1 lg:order-2 lg:rounded-tr-[20px] lg flex-1 bg-gray-700/30">
            <QrScanner />
          </div>
        </div>
        {/* div block 2 */}
      </section>
    </main>
  );
}
