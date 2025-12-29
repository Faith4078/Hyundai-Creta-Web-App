'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <form
      action=""
      className="max-w-[1137px] w-full mx-auto space-y-[13px] lg:space-y-[23px]"
    >
      <div className="flex gap-[35px]">
        <Field>
          <FieldLabel
            htmlFor="firstName"
            dir="rtl"
            className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white"
          >
            الاسم الكامل
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input
              id="firstName"
              //   {...register('firstName')}
              className="h-[52px] bg-[#1E293B] text-white  border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200"
              autoComplete="off"
            //   onBlur={() => trigger('firstName')}
            />
          </motion.div>
          {/* <div className="min-h-[20px]">
                            {(touchedFields.firstName || firstName.length > 0) &&
                              errors.firstName && (
                                <p className="text-red-500 text-xs mt-1 text-right">
                                  {errors.firstName.message}
                                </p>
                              )}
                          </div> */}
        </Field>
        {/* Email Address */}
        <Field>
          <FieldLabel
            htmlFor="email-address"
            dir="rtl"
            className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white"
          >
            بريدك الإلكتروني
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input
              id="email-address"
              //   {...register('firstName')}
              className="h-[52px] bg-[#1E293B] text-white  border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200"
              autoComplete="off"
            //   onBlur={() => trigger('firstName')}
            />
          </motion.div>
          {/* <div className="min-h-[20px]">
                            {(touchedFields.firstName || firstName.length > 0) &&
                              errors.firstName && (
                                <p className="text-red-500 text-xs mt-1 text-right">
                                  {errors.firstName.message}
                                </p>
                              )}
                          </div> */}
        </Field>
      </div>

      <div className="flex gap-[35px]">
        <Field>
          <FieldLabel
            htmlFor="location"
            dir="rtl"
            className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white"
          >
            موقعك
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input
              id="location"
              //   {...register('firstName')}
              className="h-[52px] bg-[#1E293B] text-white  border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200"
              autoComplete="off"
            //   onBlur={() => trigger('firstName')}
            />
          </motion.div>
          {/* <div className="min-h-[20px]">
                            {(touchedFields.firstName || firstName.length > 0) &&
                              errors.firstName && (
                                <p className="text-red-500 text-xs mt-1 text-right">
                                  {errors.firstName.message}
                                </p>
                              )}
                          </div> */}
        </Field>
        {/* Email Address */}
        <Field>
          <FieldLabel
            htmlFor="phone-number"
            dir="rtl"
            className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white"
          >
            رقم الهاتف
          </FieldLabel>
          <motion.div whileTap={{ scale: 0.995 }}>
            <Input
              id="phone-number"
              //   {...register('firstName')}
              className="h-[52px] bg-[#1E293B] text-white  border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200"
              autoComplete="off"
            //   onBlur={() => trigger('firstName')}
            />
          </motion.div>
          {/* <div className="min-h-[20px]">
                            {(touchedFields.firstName || firstName.length > 0) &&
                              errors.firstName && (
                                <p className="text-red-500 text-xs mt-1 text-right">
                                  {errors.firstName.message}
                                </p>
                              )}
                          </div> */}
        </Field>
      </div>
      <FieldLabel
        htmlFor="phone-number"
        dir="rtl"
        className="font-cairo capitalize text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem] placeholder:text-white"
      >
        اكتب رسالتك
      </FieldLabel>
      <motion.div whileTap={{ scale: 0.995 }}>
        <Textarea className="h-[178px] resize-none bg-[#1E293B] text-white  border-0 focus:border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6] transition-all duration-200" />
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-full h-[44px] sm:h-[52px] rounded-[10px] text-[#1E293B] text-center flex items-center justify-center text-[0.81031rem] leading-[1.11413rem]  lg:text-[1.5rem] font-bold lg:leading-[2.0625rem] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed lg:h-[62px] transition-all"
      >
        إرسال رسالتك
      </motion.button>
    </form>
  );
}
