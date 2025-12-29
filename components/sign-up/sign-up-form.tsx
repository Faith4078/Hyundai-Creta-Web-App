// // 'use client';

// // import CheckBoxConfirmation from '@/components/sign-up/checkbox-confirmation';
// // import { UploadButton } from '@/components/sign-up/upload-button';
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from '@/components/ui/card';
// // import {
// //   Field,
// //   FieldDescription,
// //   FieldError,
// //   FieldGroup,
// //   FieldLabel,
// // } from '@/components/ui/field';
// // import { Input } from '@/components/ui/input';

// // export default function SignUpForm() {
// //   return (
// //     <Card className="w-full max-w-md order-2 flex flex-col justify-center h-[1150px] shadow-lg rounded-[15px]  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF]  p-[1.5px] lg:order-1 lg:min-h-[1350px]">
// //       <div className="w-full h-full shadow-lg flex  flex-col justify-center rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer">
// //         <CardTitle className=" font-cairo text-white font-bold text-center text-[1.21544rem] leading:[2.43088rem] lg:text-[2.25rem] lg:leading-[4.5rem]">
// //           إنشاء حسابك
// //         </CardTitle>
// //         <CardDescription className="mx-auto mt-[13px] mb-[35px] text-white font-cairo text-center font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem]  lg:leading-[2.0625rem]">
// //           يرجى ملء بياناتك للتسجيل في التحدي
// //         </CardDescription>
// //         <CardContent>
// //           <form action="" className="flex flex-col gap-y-[10px]">
// //             <div className="flex gap-x-[28px]"></div>
// //             {/* first name */}
// //             <Field>
// //               <FieldLabel
// //                 htmlFor="form-rhf-demo-title"
// //                 dir="rtl"
// //                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
// //               >
// //                 الاسم الأول
// //               </FieldLabel>
// //               <Input
// //                 id="form-rhf-demo-title"
// //                 className="h-[52px] bg-[#1E293B] border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
// //                 autoComplete="off"
// //               />
// //             </Field>
// //             {/* last name */}
// //             <Field>
// //               <FieldLabel
// //                 dir="rtl"
// //                 htmlFor="form-rhf-demo-title"
// //                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
// //               >
// //                 اسم العائلة
// //               </FieldLabel>
// //               <Input
// //                 id="form-rhf-demo-title"
// //                 className="h-[52px]  bg-[#1E293B] border-0 "
// //                 autoComplete="off"
// //               />
// //             </Field>
// //             {/* username */}
// //             <Field>
// //               <FieldLabel
// //                 dir="rtl"
// //                 htmlFor="form-rhf-demo-title"
// //                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
// //               >
// //                 اسم المستخدم
// //               </FieldLabel>
// //               <Input
// //                 id="form-rhf-demo-title"
// //                 className="h-[52px] bg-[#1E293B] border-0 "
// //                 autoComplete="off"
// //               />
// //             </Field>
// //             {/* email */}
// //             <Field>
// //               <FieldLabel
// //                 dir="rtl"
// //                 htmlFor="form-rhf-demo-title"
// //                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
// //               >
// //                 عنوان البريد الإلكتروني
// //               </FieldLabel>
// //               <Input
// //                 id="form-rhf-demo-title"
// //                 className="h-[52px] bg-[#1E293B] border-0 "
// //                 autoComplete="off"
// //               />
// //             </Field>
// //             {/* Password */}
// //             <Field>
// //               <FieldLabel
// //                 dir="rtl"
// //                 htmlFor="form-rhf-demo-title"
// //                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
// //               >
// //                 كلمة المرور
// //               </FieldLabel>
// //               <Input
// //                 id="form-rhf-demo-title"
// //                 className="h-[52px] bg-[#1E293B] border-0 "
// //                 autoComplete="off"
// //               />
// //             </Field>
// //             {/* mobile phone number */}
// //             <Field>
// //               <FieldLabel
// //                 dir="rtl"
// //                 htmlFor="form-rhf-demo-title"
// //                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
// //               >
// //                 رقم الهاتف المحمول
// //               </FieldLabel>
// //               <Input
// //                 id="form-rhf-demo-title"
// //                 className="h-[52px] bg-[#1E293B] border-0 "
// //                 autoComplete="off"
// //               />
// //             </Field>

// //             <Field className="flex flex-col items-end w-full" dir="rtl">
// //               <FieldLabel
// //                 htmlFor="form-rhf-demo-title"
// //                 className="font-cairo capitalize text-white font-normal text-right w-full  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
// //               >
// //                 رقم الإنعاش القلبي الرئوي
// //               </FieldLabel>

// //               <Input
// //                 id="form-rhf-demo-title"
// //                 className="h-[52px] bg-[#1E293B] border-0 w-full "
// //                 autoComplete="off"
// //               />
// //             </Field>
// //             <CheckBoxConfirmation />
// //             <UploadButton />
// //             <button
// //               type="button"
// //               className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-full h-[62px] rounded-[10px] text-[#1E293B] text-center flex items-center justify-center text-[0.81031rem] leading-[1.11413rem]  lg:text-[1.5rem] font-bold lg:leading-[2.0625rem] hover:cursor-pointer"
// //             >
// //               التسجيل والتحقق
// //             </button>
// //           </form>
// //         </CardContent>
// //       </div>
// //     </Card>
// //   );
// // }
// 'use client';

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
// } from '@/components/ui/card';
// import { Field, FieldLabel } from '@/components/ui/field';
// import { Input } from '@/components/ui/input';
// import CheckBoxConfirmation from '@/components/sign-up/checkbox-confirmation';
// import { UploadButton } from '@/components/sign-up/upload-button';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { signUpSchema, type SignUpFormData } from '@/lib/schema/signup-schema';

// // import { uploadProfileImage, saveUserData } from '@/lib/supabase/client';
// import { useState } from 'react';
// import { toast } from 'sonner';
// import { authClient } from '@/lib/schema/better-auth/auth-client';
// import { saveUserData, uploadProfileImage } from '@/supabase/client';

// export default function SignUpForm() {
//   // const [isSubmitting, setIsSubmitting] = useState(false);
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, touchedFields, isSubmitting },
//     setValue,
//     watch,
//     trigger,
//   } = useForm<SignUpFormData>({
//     resolver: zodResolver(signUpSchema),
//     mode: 'onBlur',
//     reValidateMode: 'onChange',
//   });

//   // Watch field values for real-time length display
//   const firstName = watch('firstName') || '';
//   const lastName = watch('lastName') || '';
//   const username = watch('username') || '';
//   const password = watch('password') || '';
//   const phoneNumber = watch('phoneNumber') || '';
//   const cprNumber = watch('cprNumber') || '';

//   const handleFileChange = (file: File | null) => {
//     if (file) {
//       setUploadedFile(file);
//       setValue('profileImage', file, { shouldValidate: true });
//     }
//   };

//   const onSubmit = async (data: SignUpFormData) => {
//     // setIsSubmitting(true);
//     if (isSubmitting) {
//       toast.loading('Registration in progress...');
//     }
//     // const toastId = toast.loading('جاري إنشاء حسابك...');

//     try {
//       // Step 1: Upload profile image to Supabase (if exists)
//       let profileImageUrl: string | undefined;
//       if (uploadedFile) {
//         // toast.loading('جاري تحميل الصورة...');
//         profileImageUrl = await uploadProfileImage(uploadedFile, data.username);
//       }

//       //   Step 1: Sign up with Better Auth
//       const { data: authData, error: authError } =
//         await authClient.signUp.email(
//           {
//             email: data.email,
//             password: data.password,
//             name: `${data.firstName} ${data.lastName}`,
//             username: data.username,
//             image: profileImageUrl,
//             first_name: data.firstName,
//             agreed_to_terms: data.termsAccepted,
//             last_name: data.lastName,
//             mobile_phone_number: data.phoneNumber,
//             cpr_number: data.cprNumber,
//           },
//           {
//             onError: (ctx) => {
//               // toast.error(ctx.error.message);
//             },
//             onSuccess(context) {
//               toast.success('Signup Succesfull');
//             },
//           }
//         );

//       // if () {
//       //   console.log(authError.message);
//       //   toast.error(authError.message);
//       // }
//       if (!authData?.user && authError?.message) {
//         throw new Error(authError.message);
//       }
//       // if (!authResult.data) {
//       //   throw new Error('فشل في إنشاء الحساب');
//       // }

//       // const userId = authData.user.id;

//       // // Step 3: Save additional user data to Supabase
//       // toast.loading('جاري حفظ البيانات...');
//       // const profileError = await saveUserData({
//       //   userId,
//       //   firstName: data.firstName,
//       //   lastName: data.lastName,
//       //   username: data.username,
//       //   email: data.email,
//       //   phoneNumber: data.phoneNumber,
//       //   cprNumber: data.cprNumber,
//       //   profileImageUrl,
//       //   agreeToTerms: data.termsAccepted,
//       // });
//       // if (profileError) toast.error(profileError.message);

//       setTimeout(() => {
//         window.location.href = '/dashboard';
//       }, 3500);
//     } catch (error: any) {
//       console.error('Sign up failed:', error);
//       toast.error(
//         error.message || 'حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.'
//       );
//     } finally {
//       // setIsSubmitting(false);
//     }
//   };

//   return (
//     <Card className="w-full max-w-md order-2 flex flex-col justify-center h-[1150px] shadow-lg rounded-[15px]  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF]  p-[1.5px] lg:order-1 lg:min-h-[1350px]">
//       <div className="w-full h-full shadow-lg flex  flex-col justify-center rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer">
//         <CardTitle className=" font-cairo text-white font-bold text-center text-[1.21544rem] leading:[2.43088rem] lg:text-[2.25rem] lg:leading-[4.5rem]">
//           إنشاء حسابك
//         </CardTitle>
//         <CardDescription className="mx-auto mt-[13px] mb-[35px] text-white font-cairo text-center font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem]  lg:leading-[2.0625rem]">
//           يرجى ملء بياناتك للتسجيل في التحدي
//         </CardDescription>
//         <CardContent>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="flex flex-col gap-y-[10px]"
//           >
//             {/* first name */}
//             <Field>
//               <FieldLabel
//                 htmlFor="firstName"
//                 dir="rtl"
//                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
//               >
//                 الاسم الأول{' '}
//                 {firstName.length > 0 && `(${firstName.length} حرف)`}
//               </FieldLabel>
//               <Input
//                 id="firstName"
//                 {...register('firstName')}
//                 className="h-[52px] bg-[#1E293B] border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
//                 autoComplete="off"
//                 onBlur={() => trigger('firstName')}
//               />
//               {(touchedFields.firstName || firstName.length > 0) &&
//                 errors.firstName && (
//                   <div className="min-h-[20px]">
//                     <p className="text-red-500 text-xs mt-1 text-right">
//                       {errors.firstName.message}
//                     </p>
//                   </div>
//                 )}
//             </Field>

//             {/* last name */}
//             <Field>
//               <FieldLabel
//                 dir="rtl"
//                 htmlFor="lastName"
//                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
//               >
//                 اسم العائلة {lastName.length > 0 && `(${lastName.length} حرف)`}
//               </FieldLabel>
//               <Input
//                 id="lastName"
//                 {...register('lastName')}
//                 className="h-[52px]  bg-[#1E293B] border-0 "
//                 autoComplete="off"
//                 onBlur={() => trigger('lastName')}
//               />
//               {(touchedFields.lastName || lastName.length > 0) &&
//                 errors.lastName && (
//                   <div className="min-h-[20px]">
//                     <p className="text-red-500 text-xs mt-1 text-right">
//                       {errors.lastName.message}
//                     </p>
//                   </div>
//                 )}
//             </Field>

//             {/* username */}
//             <Field>
//               <FieldLabel
//                 dir="rtl"
//                 htmlFor="username"
//                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
//               >
//                 اسم المستخدم {username.length > 0 && `(${username.length} حرف)`}
//               </FieldLabel>
//               <Input
//                 id="username"
//                 {...register('username')}
//                 className="h-[52px] bg-[#1E293B] border-0 "
//                 autoComplete="off"
//                 onBlur={() => trigger('username')}
//               />
//               {(touchedFields.username || username.length > 0) &&
//                 errors.username && (
//                   <div className="min-h-[20px]">
//                     <p className="text-red-500 text-xs mt-1 text-right">
//                       {errors.username.message}
//                     </p>
//                   </div>
//                 )}
//             </Field>

//             {/* email */}
//             <Field>
//               <FieldLabel
//                 dir="rtl"
//                 htmlFor="email"
//                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
//               >
//                 عنوان البريد الإلكتروني
//               </FieldLabel>
//               <Input
//                 id="email"
//                 type="email"
//                 {...register('email')}
//                 className="h-[52px] bg-[#1E293B] border-0 "
//                 autoComplete="off"
//                 onBlur={() => trigger('email')}
//               />
//               {touchedFields.email && errors.email && (
//                 <div className="min-h-[20px]">
//                   <p className="text-red-500 text-xs mt-1 text-right">
//                     {errors.email.message}
//                   </p>
//                 </div>
//               )}
//             </Field>

//             {/* Password */}
//             <Field>
//               <FieldLabel
//                 dir="rtl"
//                 htmlFor="password"
//                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
//               >
//                 كلمة المرور {password.length > 0 && `(${password.length}/8)`}
//               </FieldLabel>
//               <Input
//                 id="password"
//                 type="password"
//                 {...register('password')}
//                 className="h-[52px] bg-[#1E293B] border-0 "
//                 autoComplete="new-password"
//                 onBlur={() => trigger('password')}
//               />
//               {(touchedFields.password || password.length > 0) &&
//                 errors.password && (
//                   <div className="min-h-[20px]">
//                     <p className="text-red-500 text-xs mt-1 text-right">
//                       {errors.password.message}
//                     </p>
//                   </div>
//                 )}
//             </Field>

//             {/* mobile phone number */}
//             <Field>
//               <FieldLabel
//                 dir="rtl"
//                 htmlFor="phoneNumber"
//                 className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
//               >
//                 رقم الهاتف المحمول{' '}
//                 {phoneNumber.length > 0 && `(${phoneNumber.length}/12)`}
//               </FieldLabel>
//               <Input
//                 id="phoneNumber"
//                 {...register('phoneNumber')}
//                 placeholder="+97333456789"
//                 className="h-[52px] bg-[#1E293B] border-0 "
//                 autoComplete="off"
//                 onBlur={() => trigger('phoneNumber')}
//               />
//               {(touchedFields.phoneNumber || phoneNumber.length > 0) &&
//                 errors.phoneNumber && (
//                   <div className="min-h-[20px]">
//                     <p className="text-red-500 text-xs mt-1 text-right">
//                       {errors.phoneNumber.message}
//                     </p>
//                   </div>
//                 )}
//             </Field>

//             {/* CPR Number */}
//             <Field className="flex flex-col items-end w-full" dir="rtl">
//               <FieldLabel
//                 htmlFor="cprNumber"
//                 className="font-cairo capitalize text-white font-normal text-right w-full  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
//               >
//                 رقم الإنعاش القلبي الرئوي{' '}
//                 {cprNumber.length > 0 && `(${cprNumber.length}/9)`}
//               </FieldLabel>
//               <Input
//                 id="cprNumber"
//                 {...register('cprNumber')}
//                 placeholder="950312345"
//                 className="h-[52px] bg-[#1E293B] border-0 w-full "
//                 autoComplete="off"
//                 onBlur={() => trigger('cprNumber')}
//               />
//               {(touchedFields.cprNumber || cprNumber.length > 0) &&
//                 errors.cprNumber && (
//                   <div className="min-h-[20px]">
//                     <p className="text-red-500 text-xs mt-1 text-right">
//                       {errors.cprNumber.message}
//                     </p>
//                   </div>
//                 )}
//             </Field>

//             <CheckBoxConfirmation
//               register={register}
//               error={errors.termsAccepted?.message}
//             />

//             <UploadButton
//               onFileChange={handleFileChange}
//               error={errors.profileImage?.message}
//             />

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-full h-[62px] rounded-[10px] text-[#1E293B] text-center flex items-center justify-center text-[0.81031rem] leading-[1.11413rem]  lg:text-[1.5rem] font-bold lg:leading-[2.0625rem] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? 'جاري التسجيل...' : 'التسجيل والتحقق'}
//             </button>
//           </form>
//         </CardContent>
//       </div>
//     </Card>
//   );
// }

'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import CheckBoxConfirmation from '@/components/sign-up/checkbox-confirmation';
import { UploadButton } from '@/components/sign-up/upload-button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  signUpSchema,
  type SignUpFormData,
  validatePasswordRequirements,
  validateEmail,
  validatePhoneNumber,
  validateCPRNumber,
} from '@/lib/schema/signup-schema';
import { useState } from 'react';
import { toast } from 'sonner';
import { authClient } from '@/lib/better-auth/auth-client';
import { saveUserData, uploadProfileImage } from '@/supabase/client';

export default function SignUpForm() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const firstName = watch('firstName') || '';
  const lastName = watch('lastName') || '';
  const username = watch('username') || '';
  const email = watch('email') || '';
  const password = watch('password') || '';
  const phoneNumber = watch('phoneNumber') || '';
  const cprNumber = watch('cprNumber') || '';

  const handleFileChange = (file: File | null) => {
    if (file) {
      setUploadedFile(file);
      setValue('profileImage', file, { shouldValidate: true });
    }
  };

  const onSubmit = async (data: SignUpFormData) => {
    if (isSubmitting) {
      toast.loading('Registration in progress...');
    }

    try {
      let profileImageUrl: string | undefined;
      if (uploadedFile) {
        profileImageUrl = await uploadProfileImage(uploadedFile, data.username);
      }

      const { data: authData, error: authError } =
        await authClient.signUp.email(
          {
            email: data.email,
            password: data.password,
            name: `${data.firstName} ${data.lastName}`,
            username: data.username,
            image: profileImageUrl,
            first_name: data.firstName,
            agreed_to_terms: data.termsAccepted,
            last_name: data.lastName,
            mobile_phone_number: data.phoneNumber,
            cpr_number: data.cprNumber,
          },
          {
            onError: (ctx) => { },
            onSuccess(context) {
              toast.success('Signup Succesfull');
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
      console.error('Sign up failed:', error);
      toast.error(
        error.message || 'حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.'
      );
    } finally {
    }
  };

  return (
    <Card className="w-full max-w-full order-2 flex flex-col justify-center min-h-[1399px] shadow-lg rounded-[15px]  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF]  p-[1.5px] lg:max-w-md lg:order-1 lg:min-h-[1580px]">
      <div className="w-full min-h-[1399px] shadow-lg flex  flex-col justify-center rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer lg:min-h-[1580px]">
        <CardTitle className=" font-cairo text-white font-bold text-center text-[1.21544rem] leading:[2.43088rem] lg:text-[2.25rem] lg:leading-[4.5rem]">
          إنشاء حسابك
        </CardTitle>
        <CardDescription className="mx-auto mt-[13px] mb-[35px] text-white font-cairo text-center font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem]  lg:leading-[2.0625rem]">
          يرجى ملء بياناتك للتسجيل في التحدي
        </CardDescription>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-[10px] lg:gap-y-[10px]"
          >
            {/* first name */}
            <Field>
              <FieldLabel
                htmlFor="firstName"
                dir="rtl"
                className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                الاسم الأول
              </FieldLabel>
              <Input
                id="firstName"
                {...register('firstName')}
                className="h-[52px] bg-[#1E293B] border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                autoComplete="off"
                onBlur={() => trigger('firstName')}
              />
              <div className="min-h-[20px]">
                {(touchedFields.firstName || firstName.length > 0) &&
                  errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 text-right">
                      {errors.firstName.message}
                    </p>
                  )}
              </div>
            </Field>

            {/* last name */}
            <Field>
              <FieldLabel
                dir="rtl"
                htmlFor="lastName"
                className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                اسم العائلة
              </FieldLabel>
              <Input
                id="lastName"
                {...register('lastName')}
                className="h-[52px]  bg-[#1E293B] border-0 "
                autoComplete="off"
                onBlur={() => trigger('lastName')}
              />
              <div className="min-h-[20px]">
                {(touchedFields.lastName || lastName.length > 0) &&
                  errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 text-right">
                      {errors.lastName.message}
                    </p>
                  )}
              </div>
            </Field>

            {/* username */}
            <Field>
              <FieldLabel
                dir="rtl"
                htmlFor="username"
                className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                اسم المستخدم
              </FieldLabel>
              <Input
                id="username"
                {...register('username')}
                className="h-[52px] bg-[#1E293B] border-0 "
                autoComplete="off"
                onBlur={() => trigger('username')}
              />
              <div className="min-h-[20px]">
                {(touchedFields.username || username.length > 0) &&
                  errors.username && (
                    <p className="text-red-500 text-xs mt-1 text-right">
                      {errors.username.message}
                    </p>
                  )}
              </div>
            </Field>

            {/* email */}
            <Field>
              <FieldLabel
                dir="rtl"
                htmlFor="email"
                className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                عنوان البريد الإلكتروني
              </FieldLabel>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="h-[52px] bg-[#1E293B] border-0 "
                autoComplete="off"
                onBlur={() => trigger('email')}
              />
              <div className="min-h-[20px]">
                {email.length > 0 && (
                  <div className="mt-2 space-y-1 text-right" dir="rtl">
                    {(() => {
                      const emailValidation = validateEmail(email);
                      return (
                        <>
                          <div className="flex items-center gap-2 justify-end">
                            {emailValidation.hasAtSymbol ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${emailValidation.hasAtSymbol
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              يجب أن يحتوي على @
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {emailValidation.isValid ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${emailValidation.isValid
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              بريد إلكتروني صحيح
                            </span>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            </Field>

            {/* Password */}
            {/* Password */}
            <Field>
              <FieldLabel
                dir="rtl"
                htmlFor="password"
                className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                كلمة المرور {password.length > 0 && `(${password.length} حروف)`}
              </FieldLabel>
              <Input
                id="password"
                type="password"
                {...register('password')}
                className="h-[52px] bg-[#1E293B] border-0 "
                autoComplete="new-password"
                onBlur={() => trigger('password')}
              />
              <div className="min-h-[20px]">
                <div className="mt-2 space-y-1 text-right" dir="rtl">
                  {(() => {
                    const requirements = validatePasswordRequirements(password);
                    const allSatisfied =
                      requirements.minLength &&
                      requirements.hasUpperCase &&
                      requirements.hasLowerCase &&
                      requirements.hasNumber &&
                      requirements.hasSpecialChar;

                    // Only show requirements if not all satisfied
                    if (!allSatisfied) {
                      return (
                        <>
                          <div className="flex items-center gap-2 justify-end">
                            {requirements.minLength ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${requirements.minLength
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              8 أحرف على الأقل
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {requirements.hasUpperCase ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${requirements.hasUpperCase
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              حرف كبير واحد على الأقل
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {requirements.hasLowerCase ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${requirements.hasLowerCase
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              حرف صغير واحد على الأقل
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {requirements.hasNumber ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${requirements.hasNumber
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              رقم واحد على الأقل
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {requirements.hasSpecialChar ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${requirements.hasSpecialChar
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              رمز خاص واحد على الأقل (@$!%*?&#)
                            </span>
                          </div>
                        </>
                      );
                    }
                    return null;
                  })()}
                </div>
              </div>
            </Field>

            {/* mobile phone number */}
            <Field>
              <FieldLabel
                dir="rtl"
                htmlFor="phoneNumber"
                className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                رقم الهاتف المحمول
              </FieldLabel>
              <Input
                id="phoneNumber"
                {...register('phoneNumber')}
                placeholder="+97333456789"
                className="h-[52px] bg-[#1E293B] border-0 "
                autoComplete="off"
                onBlur={() => trigger('phoneNumber')}
              />
              <div className="min-h-[20px]">
                {phoneNumber.length > 0 && (
                  <div className="mt-2 space-y-1 text-right" dir="rtl">
                    {(() => {
                      const phoneValidation = validatePhoneNumber(phoneNumber);
                      return (
                        <>
                          <div className="flex items-center gap-2 justify-end">
                            {phoneValidation.hasCountryCode ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${phoneValidation.hasCountryCode
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              يبدأ بـ +973
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {phoneValidation.hasValidPrefix ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${phoneValidation.hasValidPrefix
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              يحتوي على 3 أو 6 بعد رمز الدولة
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {phoneValidation.hasCorrectLength ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${phoneValidation.hasCorrectLength
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              12 حرفًا بالضبط
                            </span>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            </Field>

            {/* CPR Number */}
            <Field className="flex flex-col items-end w-full" dir="rtl">
              <FieldLabel
                htmlFor="cprNumber"
                className="font-cairo capitalize text-white font-normal text-right w-full  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
              >
                الرقم الشخصي
              </FieldLabel>
              <Input
                id="cprNumber"
                {...register('cprNumber')}
                placeholder="950312345"
                className="h-[52px] bg-[#1E293B] border-0 w-full "
                autoComplete="off"
                onBlur={() => trigger('cprNumber')}
              />
              <div className="min-h-[20px] w-full">
                {cprNumber.length > 0 && (
                  <div className="mt-2 space-y-1 text-right" dir="rtl">
                    {(() => {
                      const cprValidation = validateCPRNumber(cprNumber);
                      return (
                        <>
                          <div className="flex items-center gap-2 justify-end">
                            {cprValidation.isOnlyDigits ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${cprValidation.isOnlyDigits
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              أرقام فقط
                            </span>
                          </div>
                          <div className="flex items-center gap-2 justify-end">
                            {cprValidation.hasCorrectLength ? (
                              <span className="text-green-500 text-xs">✓</span>
                            ) : (
                              <span className="text-red-500 text-xs">✗</span>
                            )}
                            <span
                              className={`text-xs ${cprValidation.hasCorrectLength
                                ? 'text-green-500'
                                : 'text-red-500'
                                }`}
                            >
                              9 أرقام بالضبط
                            </span>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            </Field>

            <CheckBoxConfirmation
              register={register}
              error={errors.termsAccepted?.message}
            />

            <UploadButton
              onFileChange={handleFileChange}
              error={errors.profileImage?.message}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-full h-[44px] sm:h-[52px] rounded-[10px] text-[#1E293B] text-center flex items-center justify-center text-[0.81031rem] leading-[1.11413rem]  lg:text-[1.5rem] font-bold lg:leading-[2.0625rem] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed lg:h-[62px]"
            >
              {isSubmitting ? 'جاري التسجيل...' : 'التسجيل والتحقق'}
            </button>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
