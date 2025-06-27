"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-white text-right py-16 px-4 sm:px-10 lg:px-20">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#7a1c1c] mb-4">من نحن</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          نحن مكتب عدالة القانوني، نمتلك خبرة تمتد لأكثر من 20 عامًا في تقديم الخدمات القانونية المتكاملة، ونسعى دائمًا لحماية مصالح عملائنا بأعلى درجات الاحترافية.
        </p>
      </div>

      {/* تعريف وصورة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h3 className="text-2xl font-semibold text-[#7a1c1c] mb-4">رؤيتنا ورسالتنا</h3>
          <p className="text-gray-700 leading-relaxed">
            نهدف إلى أن نكون الوجهة الأولى للعملاء في المجال القانوني، من خلال تقديم استشارات قانونية دقيقة، وصياغة عقود احترافية، والمرافعة أمام المحاكم بكفاءة عالية.
            نفتخر بكوننا شركاء نجاح للعديد من الشركات والمؤسسات على مدار العقود الماضية.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/twst.jpg"
            alt="عن الشركة"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* لماذا نحن؟ */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-[#7a1c1c] text-center mb-10">لماذا تختارنا؟</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h4 className="font-bold text-lg mb-2 text-[#7a1c1c]">خبرة قانونية عميقة</h4>
            <p>أكثر من 20 عامًا من الخبرة في مختلف مجالات القانون التجاري والجنائي والمدني.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h4 className="font-bold text-lg mb-2 text-[#7a1c1c]">فريق متخصص</h4>
            <p>محامون واستشاريون معتمدون بخبرات محلية ودولية يقدمون أعلى مستوى من الخدمة القانونية.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h4 className="font-bold text-lg mb-2 text-[#7a1c1c]">ثقة عملائنا</h4>
            <p>علاقات طويلة المدى مع عملائنا مبنية على النزاهة، السرية، والكفاءة.</p>
          </div>
        </div>
      </div>

      {/* دعوة للتواصل */}
      <div className="text-center">
        <h4 className="text-2xl font-semibold text-[#7a1c1c] mb-4">هل تبحث عن استشارة قانونية موثوقة؟</h4>
        <p className="text-gray-600 mb-6">نحن هنا لمساعدتك. تواصل معنا الآن للحصول على خدمة احترافية.</p>
        <a
          href="/contact"
          className="inline-block bg-[#7a1c1c] text-white px-8 py-3 rounded-full hover:bg-[#5e1414] transition"
        >
          تواصل معنا
        </a>
      </div>
    </section>
  );
}
