// components/dashboard/Footer.tsx
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Using JS to keep the year dynamic

  return (
    <footer className="w-full py-8 mt-2 border-t border-gray-800/50 bg-[#0f111a]">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-gray-300 font-bold text-sm tracking-wide text-center">
          © {currentYear} هيونداي السعودية – جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}