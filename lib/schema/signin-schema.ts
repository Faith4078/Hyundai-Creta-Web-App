import { z } from 'zod';

export const signInSchema = z.object({
  username: z
    .string()
    .min(3, 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل')
    .max(20, 'اسم المستخدم يجب ألا يتجاوز 20 حرفًا')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'اسم المستخدم يجب أن يحتوي على حروف وأرقام و _ فقط'
    ),

  password: z
    .string()
    .min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      'كلمة المرور يجب أن تحتوي على حرف كبير، حرف صغير، رقم، ورمز خاص'
    ),
  rememberMe: z.boolean().optional().default(false),
});

export type SignInFormData = z.infer<typeof signInSchema>;
