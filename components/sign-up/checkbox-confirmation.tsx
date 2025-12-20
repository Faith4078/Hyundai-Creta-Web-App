// 'use client';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';

// export default function CheckBoxConfirmation() {
//   return (
//     <div className="flex items-center justify-end gap-3">
//       <Label
//         htmlFor="terms"
//         className="font-cairo text-white font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[0.9rem] lg:leading-[2.0625rem]"
//       >
//         أوافق على الشروط والأحكام وأؤكد أن معلوماتي دقيقة.
//       </Label>
//       <Checkbox id="terms" />
//     </div>
//   );
// }

'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { UseFormRegister } from 'react-hook-form';
import { SignUpFormData } from '@/lib/schema/signup-schema';

interface CheckBoxConfirmationProps {
  register: UseFormRegister<SignUpFormData>;
  error?: string;
}

export default function CheckBoxConfirmation({
  register,
  error,
}: CheckBoxConfirmationProps) {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center justify-end gap-3">
        <Label
          htmlFor="terms"
          className="font-cairo text-white font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[0.9rem] lg:leading-[2.0625rem]"
        >
          أوافق على الشروط والأحكام وأؤكد أن معلوماتي دقيقة.
        </Label>
        <Checkbox
          id="terms"
          onCheckedChange={(checked) => {
            register('termsAccepted').onChange({
              target: { value: checked, name: 'termsAccepted' },
            });
          }}
        />
      </div>
      {error && <p className="text-red-500 text-xs text-right">{error}</p>}
    </div>
  );
}
