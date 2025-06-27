// src/components/AwardsTimeline.jsx
"use client";

const awards = [
  {
    year: "2018",
    image: "/images/award1.png",
    description: "جائزة التميز في تقديم الاستشارات القانونية للشركات الناشئة.",
  },
  {
    year: "2020",
    image: "/images/award2.png",
    description: "أفضل مكتب محاماة في القضايا الجنائية والاقتصادية.",
  },
  {
    year: "2021",
    image: "/images/award3.png",
    description: "جائزة الريادة في الدفاع أمام المحاكم العليا.",
  },
  {
    year: "2023",
    image: "/images/award4.png",
    description: "أفضل مكتب قانوني في الشرق الأوسط.",
  },
];

const AwardsTimeline = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white text-right">
      <h2 className="text-3xl md:text-4xl font-bold text-[#7a1c1c] text-center mb-12">
        الجوائز والإنجازات
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute w-1 hidden md:block bg-[#7a1c1c] top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start md:justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* الصورة داخل دائرة */}
              <div className="relative z-10 w-36 h-36 rounded-full overflow-hidden border-4 border-[#7a1c1c] shadow-lg flex-shrink-0">
                <img
                  src={award.image}
                  alt={`جائزة ${award.year}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* التفاصيل */}
              <div className="md:w-1/2 mt-4 md:mt-0 text-center md:text-right">
                <h3 className="text-xl font-bold text-[#7a1c1c] mb-2">
                  {award.year}
                </h3>
                <p className="text-gray-700">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsTimeline;
