'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { UseFormRegister } from 'react-hook-form';

import { SignInFormData } from '@/lib/schema/signin-schema';

interface RememberMeConfirmationProps {
  setValue: any;
  trigger: any;
  error?: string;
  disabled: boolean;
}

export default function PasswordRememberMeConfirmation({
  setValue,
  trigger,
  error,
  disabled,
}: RememberMeConfirmationProps) {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center justify-end gap-3">
        <Label
          htmlFor="terms"
          className="font-cairo text-white font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[0.9rem] lg:leading-[2.0625rem]"
        >
          تذكرنى
        </Label>
        <Checkbox
          id="terms"
          disabled={disabled}
          onCheckedChange={(checked) => {
            setValue('rememberMe', checked === true);
            trigger('rememberMe');
          }}
        />
      </div>

      {error && (
        <div className="min-h-[20px]">
          <p className="text-red-500 text-xs text-right">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
