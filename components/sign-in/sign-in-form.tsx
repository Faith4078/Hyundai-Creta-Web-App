'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, type SignInFormData } from '@/lib/schema/signin-schema';
import { toast } from 'sonner';
import { authClient } from '@/lib/better-auth/auth-client';
import PasswordRememberMeConfirmation from './password-rememberme-confirmation';
export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },

    trigger,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const onSubmit = async (data: SignInFormData) => {
    if (isSubmitting) {
      toast.loading('Registration in progress...');
    }

    try {
      const { data: authData, error: authError } =
        await authClient.signIn.username(
          {
            password: data.password,

            username: data.username,
            rememberMe: data.rememberMe,
          },
          {
            onError: (ctx) => {},
            onSuccess(context) {
              toast.success('SignIn Succesfull');
            },
          }
        );

      if (!authData?.user && authError?.message) {
        throw new Error(authError.message);
      }

      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 3500);
    } catch (error: any) {
      console.error('Sign In failed:', error);
      toast.error(
        error.message || 'حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.'
      );
    } finally {
    }
  };
  return (
    <Card className="w-full max-w-md  order-2 flex flex-col justify-center h-[450px] lg:h-[550px] shadow-lg rounded-[15px]  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF]  p-[1.5px] lg:order-1 md:max-w-full">
      <div className="w-full h-full shadow-lg flex  flex-col justify-center rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer">
        <CardTitle className=" font-cairo text-white font-bold text-center text-[1.21544rem] leading:[2.43088rem] lg:text-[2.25rem] lg:leading-[4.5rem]">
          حساب تسجيل الدخول
        </CardTitle>
        <CardDescription className="mx-auto mt-[13px] mb-[35px] text-white font-cairo text-center font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem]  lg:leading-[2.0625rem]">
          قم بتسجيل الدخول إلى حسابك أدناه
        </CardDescription>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-[20px]"
          >
            {/* username */}
            <Field>
              <FieldLabel
                htmlFor="username"
                dir="rtl"
                className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                اسم المستخدم
              </FieldLabel>
              <Input
                id="username"
                {...register('username')}
                className="h-[52px] bg-[#1E293B] border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                autoComplete="off"
                onBlur={() => trigger('username')}
              />
            </Field>
            {/* password */}
            <Field className="flex flex-col items-end w-full" dir="rtl">
              <FieldLabel
                htmlFor="password"
                className="font-cairo capitalize text-white font-normal text-right w-full  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                كلمة المرور
              </FieldLabel>

              <Input
                id="password"
                type="password"
                {...register('password')}
                className="h-[52px] bg-[#1E293B] border-0 w-full "
                autoComplete="new-password"
                onBlur={() => trigger('password')}
              />
            </Field>
            <PasswordRememberMeConfirmation
              register={register}
              error={errors.rememberMe?.message}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-full h-[62px] rounded-[10px] text-[#1E293B] text-center flex items-center justify-center text-[0.81031rem] leading-[1.11413rem]  lg:text-[1.5rem] font-bold lg:leading-[2.0625rem] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'التسجيل' : '   تسجيل الدخول إلى الحساب'}
            </button>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
