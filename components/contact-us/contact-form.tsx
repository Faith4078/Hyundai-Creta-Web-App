'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const form = e.currentTarget;

    console.log("form", form);
    

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setSuccess('تم إرسال رسالتك بنجاح!');
      form.reset(); // Reset the form after success
    } catch (error) {
      console.error(error);
      setSuccess('حدث خطأ أثناء إرسال رسالتك.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[1137px] w-full mx-auto space-y-[13px] lg:space-y-[23px]"
    >
      <div className="flex gap-[35px]">
        <Field>
          <FieldLabel htmlFor="firstName" dir="rtl" className="font-cairo capitalize text-white font-normal text-end text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white">
            الاسم الكامل
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input id="firstName" name="firstName" className="h-[52px] bg-[#1E293B] text-white border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200" autoComplete="off" required />
          </motion.div>
        </Field>
        <Field>
          <FieldLabel htmlFor="email" dir="rtl" className="font-cairo capitalize text-white font-normal text-end text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white">
            بريدك الإلكتروني
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input id="email" name="email" type="email" className="h-[52px] bg-[#1E293B] text-white border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200" autoComplete="off" required />
          </motion.div>
        </Field>
      </div>

      <div className="flex gap-[35px]">
        <Field>
          <FieldLabel htmlFor="location" dir="rtl" className="font-cairo capitalize text-white font-normal text-end text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white">
            موقعك
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input id="location" name="location" className="h-[52px] bg-[#1E293B] text-white border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200" autoComplete="off" />
          </motion.div>
        </Field>
        <Field>
          <FieldLabel htmlFor="phone" dir="rtl" className="font-cairo capitalize text-white font-normal text-end text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white">
            رقم الهاتف
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input id="phone" name="phone" className="h-[52px] bg-[#1E293B] text-white border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200" autoComplete="off" />
          </motion.div>
        </Field>
      </div>

      <FieldLabel htmlFor="message" dir="rtl" className="font-cairo capitalize text-white font-normal text-end text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white">
        اكتب رسالتك
      </FieldLabel>
      <motion.div whileTap={{ scale: 0.995 }}>
        <Textarea id="message" name="message" className="h-[178px] resize-none bg-[#1E293B] text-white border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200" required />
      </motion.div>

      {success && <p className="text-white text-sm text-center">{success}</p>}

      <motion.button
        whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-full h-[44px] sm:h-[52px] rounded-[10px] text-[#1E293B] text-center flex items-center justify-center text-[0.81031rem] leading-[1.11413rem] lg:text-[1.5rem] font-bold lg:leading-[2.0625rem] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed lg:h-[62px] transition-all"
      >
        {loading ? 'جارٍ الإرسال...' : 'إرسال رسالتك'}
      </motion.button>
    </form>
  );
}
