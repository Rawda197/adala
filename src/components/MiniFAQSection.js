"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import Link from "next/link";

const miniFaqs = [
  {
    question: "ما هي الخدمات التي يقدمها مكتب ميزان؟",
    answer: "نقدم خدمات محاسبية ومالية متنوعة تشمل إعداد التقارير المالية، الرواتب، التأسيس، التخطيط الضريبي، وغيرها.",
  },
  {
    question: "هل تقدمون استشارة مالية مجانية؟",
    answer: "نعم، نتيح جلسة استشارية أولية مجانية لمساعدتك في فهم وضعك المالي واقتراح الحلول المناسبة.",
  },
  {
    question: "ما هي المناطق التي تخدمونها؟",
    answer: "نغطي جميع أنحاء مصر، بالإضافة إلى تقديم خدمات عن بعد دوليًا عبر الإنترنت.",
  },
  {
    question: "كيف يمكنني التواصل معكم؟",
    answer: "من خلال صفحة تواصل معنا، أو عبر الواتساب، أو الاتصال الهاتفي، وسنحدد موعدًا مناسبًا فورًا.",
  },
];

export default function MiniFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-6">الأسئلة الشائعة</h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        تعرّف على أهم الأسئلة التي قد تراودك حول خدمات مكتب ميزان المحاسبي.
      </p>

      <div className="max-w-3xl mx-auto">
        {miniFaqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* زر للانتقال إلى صفحة الأسئلة الكاملة */}
      <div className="text-center mt-8">
        <Link
          href="/faq"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
        >
          عرض جميع الأسئلة
        </Link>
      </div>
    </section>
  );
}
