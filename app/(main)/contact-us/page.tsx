import ContactForm from '@/components/contact-us/contact-form';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function ContactUs() {
  return (
    <main className="w-full">
      <section className="relative h-[300px] lg:h-[400px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/Rectangle 72.jpg")' }}
        >
          {/* Overlay to ensure text readability if needed, though image seems dark enough in header area */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="font-cairo text-white text-center font-normal text-[2.5rem] leading-[6rem] lg:text-[4rem]">
            اتصل بنا
          </h2>
        </div>
      </section>
      <section
        id="contact-us-form"
        className="bg-linear-to-br from-[#0A0A0A] via-[#111827] to-black py-[40px] px-4 min-h-[60vh] lg:min-h-[80vh] lg:py-[80px] flex flex-col items-center"
      >
        <h3 className="font-cairo text-white text-center font-normal text-[1.5rem] lg:text-[2.5rem] mb-[30px] lg:mb-[50px]">
          تواصل مع فريقنا أو خبرائنا
        </h3>
        <ContactForm />
      </section>
    </main>
  );
}
