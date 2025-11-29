'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckBoxConfirmation() {
  return (
    <div className="flex items-center justify-end gap-3">
      <Label
        htmlFor="terms"
        className="font-cairo text-white font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[0.9rem] lg:leading-[2.0625rem]"
      >
        أوافق على الشروط والأحكام وأؤكد أن معلوماتي دقيقة.
      </Label>
      <Checkbox id="terms" />
    </div>
  );
}
