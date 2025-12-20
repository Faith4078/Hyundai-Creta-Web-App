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
    .email('يرجى إدخال بريد إلكتروني صحيح'),

  password: z
    .string()
    .length(8, 'كلمة المرور يجب أن تكون 8 أحرف بالضبط')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8}$/,
      'كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص'
    ),

  phoneNumber: z
    .string()
    .regex(
      /^\+973[36]\d{7}$/,
      'رقم الهاتف يجب أن يبدأ بـ +973 ويتبعه 8 أرقام (مثال: +97333456789)'
    )
    .length(12, 'رقم الهاتف يجب أن يكون 12 حرفًا بالضبط (+973 و 8 أرقام)'),

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
