import ContactForm from '@/components/contact-us/contact-form';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function ContactUs() {
  return (
    <main>
      <section className="bg-[url(/assets/bg-contact-us.jpg)] h-[303px] bg-center bg-no-repeat bg-cover w-full flex items-center justify-center">
        <h2 className="font-cairo text-white text-center font-normal text-[2.5rem] leading-[6rem]">
          اتصل بنا
        </h2>
      </section>
      <section
        id="contact us form"
        className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-black py-[25px] min-h-[80vh] lg:min-h-screen lg:py-[45px]"
      >
        <ContactForm />
      </section>
    </main>
  );
}
