'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button'; // Adjust path if needed
import Image from 'next/image';

interface UploadButtonProps extends React.ComponentPropsWithoutRef<'input'> {
  //   onFileChange?: (files: FileList | null) => void;
  buttonText?: string;
}

export const UploadButton: React.FC<UploadButtonProps> = ({
  buttonText = 'Upload File',
  ...props
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden" // Hide the default file input
        {...props}
        onChange={handleFileChange}
      />
      <button
        type="button" // Add this to prevent form submission/page refresh
        className="w-full h-[172px] my-[23px] py-[35px] flex flex-col gap-y-[9px] items-center justify-center  border-[2px] border-[#3B82F6]  rounded-[15px] border-dashed"
        onClick={handleButtonClick}
      >
        <Image
          src={'/assets/upload-icon.svg'}
          width={28}
          height={28}
          alt="upload image button"
        />
        <h6 className="font-cairo text-center text-[0.8rem] font-bold lg:text-[1.25rem] lg:leading-[2.0625rem]">
          تحميل صورتك
        </h6>
        <p className="font-cairo text-[#FFFFFF80]  font-normal text-[0.5rem] text-center leading-[2.0625rem] lg:text-[1rem]">
          يجب أن تكون الصورة 5 ميجا بايت كحد أقصى.
        </p>
      </button>
    </>
  );
};
