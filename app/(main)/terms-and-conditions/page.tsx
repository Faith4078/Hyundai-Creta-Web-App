import React from 'react';

export default function TermsAndConditions() {
  const terms = [
    'جميع المحتويات المنشورة على هذا الموقع محمية بحقوق الطبع والنشر.',
    'لا يجوز نسخ أو إعادة نشر أي محتوى دون إذن صريح من إدارة الموقع.',
    'الاستخدام الشخصي للموقع مسموح فقط، ويُمنع الاستخدام التجاري دون ترخيص.',
    'لا تتحمل إدارة الموقع أي مسؤولية عن أي خسائر ناتجة عن استخدام المحتوى.',
    'يحق للموقع تعديل شروط الاستخدام في أي وقت دون إشعار مسبق.',
    'يجب على المستخدم احترام قوانين البلد الذي يتواجد فيه أثناء استخدام الموقع.',
    'جميع البيانات الشخصية تُحفظ وفق سياسة الخصوصية الخاصة بالموقع.',
    'يمنع نشر أي محتوى مسيء أو مخالف للأخلاق العامة.',
    'استخدام الروابط الخارجية يكون على مسؤولية المستخدم الخاصة.',
    'تحتفظ إدارة الموقع بحق تعليق أو حذف أي حساب ينتهك الشروط.',
    'جميع المعاملات المالية تتم وفق القوانين المعمول بها في البلد،',
    'لا يحق للمستخدم المطالبة بأي تعويض عن توقف الخدمة لأي سبب.',
    'جميع الحقوق محفوظة لإدارة الموقع وفق القوانين المحلية والدولية.',
    'في حال وجود أي نزاع، تكون المحاكم المحلية هي المختصة بالفصل فيه.',
    'استمرارك في استخدام الموقع يعني موافقتك الكاملة على هذه الشروط.',
  ];

  return (
    <main className="w-full">
      <section className="bg-[url(/assets/creta-background.png)] bg-center bg-no-repeat bg-cover w-full px-4 py-[40px] min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center">
        {/* Overlay for better readability if needed, similar to other pages */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-[1296px] w-full mx-auto flex flex-col items-end">
          <h1 className="font-cairo text-white font-bold text-[2rem] lg:text-[4rem] mb-[40px] lg:mb-[80px] text-right">
            الأحكام والشروط
          </h1>

          <div className="flex flex-col gap-y-6 w-full lg:max-w-[800px]">
            {terms.map((term, index) => (
              <p
                key={index}
                className="font-cairo text-white text-right text-[1rem] lg:text-[1.25rem] leading-[1.6]"
                dir="rtl"
              >
                {index + 1}. {term}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
