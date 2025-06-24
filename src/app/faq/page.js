"use client";

import { useState } from "react";
import FAQItem from "../../components/FAQItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const faqs = [
  {
    question: "ما هي الخدمات التي يقدمها مكتب ميزان؟",
    answer:
      "مكتب ميزان يقدم مجموعة متكاملة من الخدمات المحاسبية، المالية، والضريبية، مثل إعداد التقارير المالية، مراجعة الحسابات، إدارة الرواتب، والتخطيط الضريبي. خدماتنا مصممة لتلائم احتياجات كل عميل سواء كنت شركة ناشئة أو مؤسسة قائمة.",
  },
  {
    question: "هل يمكنكم تقديم استشارة مالية أولية مجانية؟",
    answer:
      "نعم، نوفر جلسة استشارية أولية مجانية تمامًا، نساعد فيها العميل على فهم وضعه المالي الحالي، التحديات التي يواجهها، ونقترح حلول مبدئية تساعده على الانطلاق بثقة قبل بدء أي تعاون رسمي.",
  },
  {
    question: "ما هي المناطق الجغرافية التي تخدمونها؟",
    answer:
      "نحن نخدم عملاء في جميع أنحاء مصر، بالإضافة إلى خدماتنا الدولية من خلال الإنترنت، بما يشمل الاجتماعات عبر Zoom أو Google Meet، وتسليم المستندات بشكل رقمي آمن.",
  },
  {
    question: "كيف يمكنني البدء معكم؟",
    answer:
      "التواصل معنا سهل جدًا. يمكنك ملء نموذج الاتصال على موقعنا، أو التواصل معنا عبر واتساب أو الاتصال الهاتفي المباشر، وسيقوم أحد ممثلينا بالتواصل معك لترتيب جلسة استماع لاحتياجاتك.",
  },
  {
    question: "هل تلتزمون بسرية بيانات العملاء؟",
    answer:
      "بكل تأكيد، نحن نولي أهمية قصوى لسرية بيانات العملاء. لدينا سياسات صارمة تضمن عدم مشاركة أو تسريب أي معلومات مالية أو إدارية لأي طرف ثالث.",
  },
  {
    question: "هل تقدمون خدمات للشركات الصغيرة والمتوسطة؟",
    answer:
      "نعم، نخدم جميع الأحجام من الشركات، بما في ذلك الشركات الناشئة والمشروعات الفردية. لدينا باقات مخصصة لهذه الفئة تضمن الجودة والتكلفة المناسبة.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نوفر العديد من طرق الدفع المرنة، مثل التحويل البنكي، الدفع الإلكتروني، أو النقدي عند زيارتك لمكتبنا. كما يمكن التعاقد بنظام شهري أو سنوي حسب الاتفاق.",
  },
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    const isOpen = openIndexes.includes(index);

    if (isOpen) {
      // لو مفتوح، اقفله
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // لو مش مفتوح، افتحه واقفل أقدم واحد لو عددهم 3
      const updated = [...openIndexes, index];
      if (updated.length > 3) {
        updated.shift(); // يشيل أقدم واحد
      }
      setOpenIndexes(updated);
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          الأسئلة الشائعة
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          نُجيب هنا على أكثر الأسئلة التي قد تراودك حول خدماتنا المالية والمحاسبية. إذا لم تجد إجابتك هنا، يمكنك دائمًا التواصل معنا وسنكون سعداء بمساعدتك.
        </p>

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndexes.includes(index)}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
