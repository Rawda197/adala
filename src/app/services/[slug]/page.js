"use client";

import { useParams, useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import servicesData from "../../../data/servicesData";

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return <p className="text-center mt-20">الخدمة غير موجودة</p>;

  return (
    <div>
      <Header />

      {/* تفاصيل الخدمة */}
      <section className="px-6 md:px-20 py-16 bg-gray-50 text-right">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* الصورة - تظهر فوق في الشاشات الصغيرة */}
          <div className="order-1 md:order-2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* العنوان + التفاصيل */}
          <div className="order-2 md:order-1">
            <h1 className="text-2xl md:text-4xl font-bold text-[#7a1c1c] mb-6">
              {service.title}
            </h1>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>

            <button
              onClick={() => router.back()}
              className="mt-6 inline-block bg-[#7a1c1c] text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              العودة للخلف
            </button>
          </div>
        </div>
      </section>

      {/* خدمات أخرى */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#7a1c1c] mb-10">
          خدمات أخرى
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData
            .filter((s) => s.slug !== slug)
            .slice(0, 3)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:border-[#7a1c1c] transition transform hover:rotate-1"
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 text-right">
                  <h3 className="text-xl font-bold text-[#7a1c1c] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.shortDescription}
                  </p>
                  <a
                    href={`/services/${item.slug}`}
                    className="inline-block text-sm text-white bg-[#7a1c1c] px-5 py-2 rounded-full hover:bg-red-700 transition"
                  >
                    قراءة المزيد →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
