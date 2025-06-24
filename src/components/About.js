"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* صورة عن الشركة */}
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/about.jpg" // غيري الاسم حسب الصورة
            alt="عن مكتب ميزان"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>

        {/* محتوى النص */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            من نحن
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            نحن في مكتب <span className="font-bold text-green-800">ميزان للمحاسبة</span> نعمل على تقديم حلول محاسبية دقيقة وموثوقة لعملائنا من مختلف المجالات.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            هدفنا هو تسهيل العمليات المالية والمساهمة في نمو أعمالك من خلال خبرتنا الطويلة واهتمامنا بأدق التفاصيل، لنكون الشريك المثالي لنجاحك المالي.
          </p>
        </div>
      </div>
    </section>
  );
}
