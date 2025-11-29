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
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="bg-[url(/assets/creta-background.png)] min-h-[50vh] py-[45px] bg-center bg-no-repeat bg-cover  w-full lg:pt-[61px] lg:pb-[116px]  lg:min-h-screen">
      <div className="max-w-[1296px] w-full mx-auto px-4 flex flex-col justify-between items-center lg:flex-row">
        <Card className="w-full max-w-md order-2 flex flex-col justify-center h-[550px] shadow-lg rounded-[15px]  bg-gradient-to-r from-[#3B82F6] to-[#00FFFF]  p-[1.5px] lg:order-1">
          <div className="w-full h-full shadow-lg flex  flex-col justify-center rounded-[13px] bg-[#0A0A0A] text-white font-normal font-cairo text-[1.5rem] hover:cursor-pointer">
            <CardTitle className=" font-cairo text-white font-bold text-center text-[1.21544rem] leading:[2.43088rem] lg:text-[2.25rem] lg:leading-[4.5rem]">
              حساب تسجيل الدخول
            </CardTitle>
            <CardDescription className="mx-auto mt-[13px] mb-[35px] text-white font-cairo text-center font-normal text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem]  lg:leading-[2.0625rem]">
              قم بتسجيل الدخول إلى حسابك أدناه
            </CardDescription>
            <CardContent>
              <form action="" className="flex flex-col gap-y-[20px]">
                <Field>
                  <FieldLabel
                    htmlFor="form-rhf-demo-title"
                    dir="rtl"
                    className="font-cairo text-white font-normal text-end  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
                  >
                    اسم المستخدم
                  </FieldLabel>
                  <Input
                    id="form-rhf-demo-title"
                    className="h-[52px] bg-[#1E293B] border-0 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                    autoComplete="off"
                  />
                </Field>
                <Field className="flex flex-col items-end w-full" dir="rtl">
                  <FieldLabel
                    htmlFor="form-rhf-demo-title"
                    className="font-cairo text-white font-normal text-right w-full  text-[0.67525rem] leading-[1.11413rem] lg:text-[1.25rem] lg:leading-[2.0625rem]"
                  >
                    كلمة المرور
                  </FieldLabel>

                  <Input
                    id="form-rhf-demo-title"
                    className="h-[52px] bg-[#1E293B] border-0 w-full "
                    autoComplete="off"
                  />
                </Field>

                <button
                  type="button"
                  className="bg-gradient-to-r from-[#3B82F6] to-[#0FF] w-full h-[62px] rounded-[10px] text-[#1E293B] text-center flex items-center justify-center text-[0.81031rem] leading-[1.11413rem]  lg:text-[1.5rem] font-bold lg:leading-[2.0625rem] hover:cursor-pointer"
                >
                  تسجيل الدخول إلى الحساب
                </button>
              </form>
            </CardContent>
          </div>
        </Card>
        {/* right col */}
        <div className="text-right max-w-[420px] my-[45px]  w-full mx-auto order-1 flex flex-col gap-y-[35px] items-end lg:gap-y-[56px] lg:order-2 lg:max-w-full lg:my-0">
          <div className="w-[177px] h-[54px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-full p-[1.5px] ">
            <Link
              href={'/sign-in'}
              className="w-full h-full flex items-center gap-x-4 justify-center rounded-full bg-[#0A0A0A] text-white font-normal font-cairo text-[0.66025rem] leading-[3.96138rem] lg:text-base lg:leading-24 hover:cursor-pointer"
            >
              تحدي حصري
            </Link>
          </div>
          <h1 className="text-white font-cairo  text-right font-black text-[2.3875rem] leading-[2.04644rem] lg:text-[3.61rem] lg:leading-[3.09956rem]">
            سجل لبدء التحدي
          </h1>
          <p className="font-cairo text-white w-[341px] text-[0.82531rem] leading-[1.36175rem] font-normal lg:w-[517px] lg:text-[1.25rem] lg:leading-[2.0625rem]">
            انضم إلى آلاف المشاركين في مسابقة للعثور على سيارة هيونداي كريتا
            الجديدة كليًا والفوز بها. أكمل تسجيلك أدناه للبدء.
          </p>
          <ul className="flex items-center gap-x-[40px] lg:gap-x-[120px]">
            <li className="font-cairo text-white text-right font-normal text-[ 0.66025rem] leading-[1.36175rem] lg:text-[1rem] lg:leading-[2.0625rem]">
              يبدأ التحدي بعد 3 أيام
            </li>
            <li className="font-cairo text-white text-right font-normal text-[ 0.66025rem] leading-[1.36175rem] lg:text-[1rem] lg:leading-[2.0625rem]">
              يبدأ التحدي بعد 3 أيام
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
