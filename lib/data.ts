// ─── Single source of truth for the challenge schedule ───────────────────────
// Change this date to move both countdown timers. The end date is always
// START_DATE + 10 days.
export const CHALLENGE_START_DATE = new Date('Mar 04, 2026 00:00:00');
// ─────────────────────────────────────────────────────────────────────────────

export const dataForHowItWorksSection = [
  {
    icon: '/assets/car-icon.svg',
    heading: 'الخطوة 3: الفوز في كريتا',
    description:
      'أكمل جميع التحديات العشرة لفتح الموقع النهائي - ويمكنك القيادة بعيدًا بسيارة Hyundai Creta الجديدة كليًا.',
    buttonText: 'التسجيل الآمن',
  },

  {
    icon: '/assets/card-icon.svg',
    heading: 'الخطوة 2: اتبع الأدلة',
    description:
      'كل يوم، ستظهر أدلة جديدة على لوحة معلوماتك. امسح رموز الاستجابة السريعة، وحل الألغاز، وتقدم في كل مستوى.',
    buttonText: 'التسجيل الآمن',
  },
  {
    icon: '/assets/person-icon.svg',
    heading: 'الخطوة 1: التسجيل',
    description:
      'سجّل باستخدام رقم هاتفك الجوال، وبريدك الإلكتروني، وبطاقة الإنعاش القلبي الرئوي للانضمام إلى التحدي. أنشئ ملفك الشخصي واستعد للمغامرة.',
    buttonText: 'التسجيل الآمن',
  },
];

export const whatYouCanWinData = [
  {
    icon: '/assets/gift-box.svg',
    heading: 'الجوائز اليومية',
    list: [
      'نقاط المكافأة الإضافية',
      'كوبونات الخصم',
      'هدايا غامضة',
      'مكافآت نقدية',
    ],
    buttonText: 'مفاجآت رائعة',
  },
  {
    icon: '/assets/medal-icon.svg',

    heading: 'الجوائز الأسبوعية',
    list: [
      'قسائم الوقود',
      'ملحقات سيارات هيونداي',
      'تجارب السفر',
      'الأدوات التقنية',
    ],
    buttonText: '10 فائزين أسبوعيًا',
  },
  {
    icon: '/assets/champions-cup-icon.svg',
    heading: 'الجائزة الكبرى',
    description: 'هيونداي كريتا 2025 الجديدة كلياً',
    list: [
      'تجربة ملكية حصرية',
      'حفل تسليم مميز',
      'تغطية الضمان الكاملة',
      'باقة خدمة كبار الشخصيات',
    ],
    buttonText: 'بقيمة 35000+ دولار أمريكي',
  },
];

export const footerLinks = [
  {
    id: 1,
    mainLink: 'يدعم',
    subLinks: ['مركز المساعدة', 'الدردشة المباشرة متاحة'],
  },
  {
    id: 2,
    mainLink: 'معلومات التحدي',
    subLinks: ['كيفية اللعب', 'تفاصيل الجائزة', 'لوحة المتصدرين', 'قواعد'],
  },
  {
    id: 3,
    mainLink: 'روابط سريعة',
    subLinks: ['الشروط والأحكام', 'سياسة الخصوصية', 'التعليمات', 'اتصل بنا'],
  },
];

export const footerSocialIcons = [
  {
    icon: '/assets/youtube-icon.svg',
    link: 'https://www.youtube.com/channel/UCeYX7BOPQa9hqAZhaUE-N4A?view_as=subscriber',
  },
  {
    icon: '/assets/instagram-icon.svg',
    link: 'https://www.instagram.com/hyundaibahrain/?hl=en',
  },
  {
    icon: '/assets/tiktok-icon.svg', // Placeholder for LinkedIn
    link: 'https://www.linkedin.com/company/first-motors/',
  },
];

export const countdownTimer = [
  {
    heading: '09',
    description: 'أيام',
  },
  {
    heading: '14',
    description: 'ساعات',
  },
  {
    heading: '32',
    description: 'دقائق',
  },
  {
    heading: '18',
    description: 'ثواني',
  },
];

export const navLinks = [
  {
    link: 'اتصال',
  },
  {
    link: 'التعليمات',
  },

  {
    link: 'تحدي',
  },
  {
    link: 'الشروط والأحكام',
  },
];

export const sidebarNavlinks = [
  { link: 'بيت' },
  { link: 'تحدي' },
  { link: 'الجوائز' },
  { link: 'التعليمات' },
  { link: 'اتصال' },
];

export const dashboardData = [
  {
    heading: '3 اليوم',
    description: 'التحدي الحالي',
  },
  {
    heading: '30 نقطة',
    description: 'مجموع النقاط',
  },
  {
    heading: '7 أيام',
    description: 'مجموع النقاط',
  },
];
export const challengePreviewData = [
  {
    icon: '/assets/material-symbols-star.svg',
    heading: 'صعوبة',
    description: 'واسطة',
    descriptionClassname:
      'font-cairo text-center text-[#EF4444] font-extrabold text-[1.75rem] leading-[2.0625rem] order-3 lg:order-1',
  },
  {
    icon: '/assets/tabler_clock-filled.svg',
    heading: 'حد زمني',
    description: '10 دقائق',
    descriptionClassname:
      'font-cairo text-center text-[#3B82F6] font-extrabold text-[1.75rem] leading-[2.0625rem] order-2 ',
  },
  {
    icon: '/assets/material-trophy.svg',
    heading: 'جائزة',
    description: '15 نقطة',
    descriptionClassname:
      'font-cairo text-center text-[#EAB308] font-extrabold text-[1.75rem] leading-[2.0625rem] order-1 lg:order-3',
  },
];
export const notificationsData = [
  {
    id: 1,
    icon: '/assets/bell-icon-with-bg.svg',
    heading: 'اللغز رقم 5 متاح الآن',
    description: 'منذ 5 دقائق',
  },
  {
    id: 2,
    icon: '/assets/notification-icon-with-bg.svg',
    heading: 'لقد استخدمت تلميحًا واحدًا اليوم',
    description: 'منذ ساعة واحدة',
  },
  {
    id: 3,
    icon: '/assets/trophy-icon-with-bg.svg',
    heading: 'استمر! تبقّى 3 ألغاز فقط',
    description: 'منذ 3 ساعات',
  },
  {
    id: 4,
    icon: '/assets/four-boxes-icon-with-bg.svg',
    heading: 'تم تأكيد مسح رمز QR في سيتي سنتر مول',
    description: 'منذ 5 ساعات',
  },
  {
    id: 5,
    icon: '/assets/star-icon-with-bg.svg',
    heading: 'لقد ربحت 100 نقطة إضافية!',
    description: 'أمس',
  },
  {
    id: 6,
    icon: '/assets/people-icon-with-bg.svg',
    heading: 'انضم 50 مشاركًا جديدًا اليوم',
    description: 'أمس',
  },
];

export const clueBoxData = [
  {
    heading: '07',
    description: 'متبقي',
    descriptionClassname:
      'font-cairo text-white text-[0.74781rem] font-normal leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem] ',
    headingClassname:
      'font-cairo text-white text-center font-bold text-[0.74781rem] leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]',
  },
  {
    heading: '01',
    description: 'نشيط',
    descriptionClassname:
      'font-cairo text-white text-[0.74781rem] font-normal leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem] ',
    headingClassname:
      'font-cairo text-[#EAB308] text-center font-bold text-[0.74781rem] leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]',
  },
  {
    heading: '02',
    description: 'مكتمل',
    descriptionClassname:
      'font-cairo text-white text-[0.74781rem] font-normal leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem] ',
    headingClassname:
      'font-cairo text-[#22C55E] text-center font-bold text-[0.74781rem] leading-[1.02825rem] lg:text-[1.5rem] lg:leading-[2.0625rem]',
  },
];

export const dailyCluesCheckboxes = [
  { id: 1, dayNumber: 10, heading: 'اليوم العاشر', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-4 lg:order-1 lg:w-[102px]' },
  { id: 2, dayNumber: 9, heading: 'اليوم التاسع', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-5 lg:order-2 lg:w-[102px]' },
  { id: 3, dayNumber: 8, heading: 'اليوم الثامن', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-6 lg:order-3 lg:w-[102px]' },
  { id: 4, dayNumber: 7, heading: 'اليوم السابع', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-7 lg:order-4 lg:w-[102px]' },
  { id: 5, dayNumber: 6, heading: 'اليوم السادس', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-8 lg:order-5 lg:w-[102px]' },
  { id: 6, dayNumber: 5, heading: 'اليوم الخامس', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-9 lg:order-6 lg:w-[102px]' },
  { id: 7, dayNumber: 4, heading: 'اليوم الرابع', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-10 lg:order-7 lg:w-[102px]' },
  { id: 8, dayNumber: 3, heading: 'اليوم الثالث', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-1 lg:order-8 lg:w-[102px]' },
  { id: 9, dayNumber: 2, heading: 'اليوم الثاني', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-2 lg:order-9 lg:w-[102px]' },
  { id: 10, dayNumber: 1, heading: 'اليوم الأول', boxclassName: 'w-[99px] flex flex-col gap-y-[10px] order-3 lg:order-10 lg:w-[102px]' },
];


