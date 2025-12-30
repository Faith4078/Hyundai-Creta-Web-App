// // lib/schemas/signup-schema.ts
// import { z } from 'zod';

// export const signUpSchema = z.object({
//   firstName: z
//     .string()
//     .min(2, 'الاسم الأول يجب أن يكون حرفين على الأقل')
//     .max(50, 'الاسم الأول يجب ألا يتجاوز 50 حرفًا')
//     .regex(/^[a-zA-Zأ-ي\s]+$/, 'الاسم الأول يجب أن يحتوي على حروف فقط'),

//   lastName: z
//     .string()
//     .min(2, 'اسم العائلة يجب أن يكون حرفين على الأقل')
//     .max(50, 'اسم العائلة يجب ألا يتجاوز 50 حرفًا')
//     .regex(/^[a-zA-Zأ-ي\s]+$/, 'اسم العائلة يجب أن يحتوي على حروف فقط'),

//   username: z
//     .string()
//     .min(3, 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل')
//     .max(20, 'اسم المستخدم يجب ألا يتجاوز 20 حرفًا')
//     .regex(
//       /^[a-zA-Z0-9_]+$/,
//       'اسم المستخدم يجب أن يحتوي على حروف وأرقام و _ فقط'
//     ),

//   email: z
//     .string()
//     .min(1, 'البريد الإلكتروني مطلوب')
//     .email('يرجى إدخال بريد إلكتروني صحيح'),

//   password: z
//     .string()
//     .length(8, 'كلمة المرور يجب أن تكون 8 أحرف بالضبط')
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8}$/,
//       'كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص'
//     ),

//   phoneNumber: z
//     .string()
//     .regex(
//       /^\+973[36]\d{7}$/,
//       'رقم الهاتف يجب أن يبدأ بـ +973 ويتبعه 8 أرقام (مثال: +97333456789)'
//     )
//     .length(12, 'رقم الهاتف يجب أن يكون 12 حرفًا بالضبط (+973 و 8 أرقام)'),

//   cprNumber: z
//     .string()
//     .regex(/^\d{9}$/, 'رقم الإنعاش القلبي الرئوي يجب أن يكون 9 أرقام بالضبط')
//     .length(9, 'رقم الإنعاش القلبي الرئوي يجب أن يكون 9 أرقام'),

//   termsAccepted: z.boolean().refine((val) => val === true, {
//     message: 'يجب الموافقة على الشروط والأحكام',
//   }),

//   profileImage: z
//     .instanceof(File)
//     .optional()
//     .refine(
//       (file) => !file || file.size <= 5 * 1024 * 1024,
//       'حجم الصورة يجب أن يكون 5 ميجابايت كحد أقصى'
//     )
//     .refine(
//       (file) =>
//         !file || ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type),
//       'يجب أن تكون الصورة بصيغة JPEG أو PNG'
//     ),
// });

// export type SignUpFormData = z.infer<typeof signUpSchema>;

// Revert back to this schema if the next one breaks
// import { z } from 'zod';

// export const signUpSchema = z.object({
//   firstName: z
//     .string()
//     .min(2, 'الاسم الأول يجب أن يكون حرفين على الأقل')
//     .max(50, 'الاسم الأول يجب ألا يتجاوز 50 حرفًا')
//     .regex(/^[a-zA-Zأ-ي\s]+$/, 'الاسم الأول يجب أن يحتوي على حروف فقط'),
//   lastName: z
//     .string()
//     .min(2, 'اسم العائلة يجب أن يكون حرفين على الأقل')
//     .max(50, 'اسم العائلة يجب ألا يتجاوز 50 حرفًا')
//     .regex(/^[a-zA-Zأ-ي\s]+$/, 'اسم العائلة يجب أن يحتوي على حروف فقط'),
//   username: z
//     .string()
//     .min(3, 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل')
//     .max(20, 'اسم المستخدم يجب ألا يتجاوز 20 حرفًا')
//     .regex(
//       /^[a-zA-Z0-9_]+$/,
//       'اسم المستخدم يجب أن يحتوي على حروف وأرقام و _ فقط'
//     ),
//   email: z
//     .string()
//     .min(1, 'البريد الإلكتروني مطلوب')
//     .email('يرجى إدخال بريد إلكتروني صحيح يحتوي على @'),
//   password: z
//     .string()
//     .min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
//       'كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص'
//     ),
//   phoneNumber: z
//     .string()
//     .regex(
//       /^\+973[36]\d{7}$/,
//       'رقم الهاتف يجب أن يبدأ بـ +973 ويتبعه 3 أو 6 ثم 7 أرقام (مثال: +97333456789)'
//     )
//     .length(12, 'رقم الهاتف يجب أن يكون 12 حرفًا بالضبط'),
//   cprNumber: z
//     .string()
//     .regex(/^\d{9}$/, 'رقم الإنعاش القلبي الرئوي يجب أن يكون 9 أرقام بالضبط')
//     .length(9, 'رقم الإنعاش القلبي الرئوي يجب أن يكون 9 أرقام'),
//   termsAccepted: z.boolean().refine((val) => val === true, {
//     message: 'يجب الموافقة على الشروط والأحكام',
//   }),
//   profileImage: z
//     .instanceof(File)
//     .optional()
//     .refine(
//       (file) => !file || file.size <= 5 * 1024 * 1024,
//       'حجم الصورة يجب أن يكون 5 ميجابايت كحد أقصى'
//     )
//     .refine(
//       (file) =>
//         !file || ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type),
//       'يجب أن تكون الصورة بصيغة JPEG أو PNG'
//     ),
// });

// export type SignUpFormData = z.infer<typeof signUpSchema>;

// // Password validation helper
// export const validatePasswordRequirements = (password: string) => {
//   return {
//     minLength: password.length >= 8,
//     hasUpperCase: /[A-Z]/.test(password),
//     hasLowerCase: /[a-z]/.test(password),
//     hasNumber: /\d/.test(password),
//     hasSpecialChar: /[@$!%*?&#]/.test(password),
//   };
// };

// // Email validation helper
// export const validateEmail = (email: string) => {
//   return {
//     hasAtSymbol: email.includes('@'),
//     isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
//   };
// };

// // Phone validation helper
// export const validatePhoneNumber = (phone: string) => {
//   return {
//     hasCountryCode: phone.startsWith('+973'),
//     hasValidPrefix: /^\+973[36]/.test(phone),
//     hasCorrectLength: phone.length === 12,
//     isValid: /^\+973[36]\d{7}$/.test(phone),
//   };
// };

// // CPR validation helper
// export const validateCPRNumber = (cpr: string) => {
//   return {
//     hasCorrectLength: cpr.length === 9,
//     isOnlyDigits: /^\d+$/.test(cpr),
//     isValid: /^\d{9}$/.test(cpr),
//   };
// };

// lib/schemas/signup-schema.ts
import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(2, 'الاسم الأول يجب أن يكون حرفين على الأقل')
    .max(50, 'الاسم الأول يجب ألا يتجاوز 50 حرفًا')
    .regex(/^[a-zA-Zأ-ي\s]+$/, 'الاسم الأول يجب أن يحتوي على حروف فقط'),
  lastName: z
    .string()
    .min(2, 'اسم العائلة يجب أن يكون حرفين على الأقل')
    .max(50, 'اسم العائلة يجب ألا يتجاوز 50 حرفًا')
    .regex(/^[a-zA-Zأ-ي\s]+$/, 'اسم العائلة يجب أن يحتوي على حروف فقط'),
  username: z
    .string()
    .min(3, 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل')
    .max(20, 'اسم المستخدم يجب ألا يتجاوز 20 حرفًا')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'اسم المستخدم يجب أن يحتوي على حروف وأرقام و _ فقط'
    ),
  email: z
    .string()
    .min(1, 'البريد الإلكتروني مطلوب')
    .email('يرجى إدخال بريد إلكتروني صحيح يحتوي على @'),
  password: z
    .string()
    .min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      'كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص'
    ),
  phoneNumber: z
    .string()
    .regex(
      /^\+973[36]\d{7}$/,
      'رقم الهاتف يجب أن يبدأ بـ +973 ويتبعه 3 أو 6 ثم 7 أرقام (مثال: +97333456789)'
    )
    .length(12, 'رقم الهاتف يجب أن يكون 12 حرفًا بالضبط'),
  cprNumber: z
    .string()
    .regex(/^\d{9}$/, 'رقم الإنعاش القلبي الرئوي يجب أن يكون 9 أرقام بالضبط')
    .length(9, 'رقم الإنعاش القلبي الرئوي يجب أن يكون 9 أرقام'),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'يجب الموافقة على الشروط والأحكام',
  }),
  profileImage: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      'حجم الصورة يجب أن يكون 5 ميجابايت كحد أقصى'
    )
    .refine(
      (file) =>
        !file || ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type),
      'يجب أن تكون الصورة بصيغة JPEG أو PNG'
    ),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

// Password validation helper
export const validatePasswordRequirements = (password: string) => {
  return {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[@$!%*?&#]/.test(password),
  };
};

// Email validation helper
export const validateEmail = (email: string) => {
  return {
    hasAtSymbol: email.includes('@'),
    isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  };
};

// Phone validation helper
export const validatePhoneNumber = (phone: string) => {
  return {
    hasCountryCode: phone.startsWith('+973'),
    hasValidPrefix: /^\+973[36]/.test(phone),
    hasCorrectLength: phone.length === 12,
    isValid: /^\+973[36]\d{7}$/.test(phone),
  };
};

// CPR validation helper
export const validateCPRNumber = (cpr: string) => {
  return {
    hasCorrectLength: cpr.length === 9,
    isOnlyDigits: /^\d+$/.test(cpr),
    isValid: /^\d{9}$/.test(cpr),
  };
};
