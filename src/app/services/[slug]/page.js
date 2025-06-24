import services from "../../../data/servicesData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ServiceDetail({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  // الخدمات ذات الصلة (نستبعد الخدمة الحالية ونأخذ 3 عشوائيين)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .sort(() => 0.5 - Math.random()) // ترتيب عشوائي
    .slice(0, 3); // أول 3 فقط

  return (
    <>
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-20 bg-white min-h-screen">
        {/* صورة الخدمة */}
        <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>

        {/* محتوى الخدمة */}
        <h1 className="text-3xl font-bold text-green-800 mb-4">{service.title}</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.details}</p>

        {/* المميزات */}
        {service.features && (
          <ul className="list-disc list-inside text-green-700 space-y-2 mb-6">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        {/* زر العودة */}
        <Link
          href="/services"
          className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
        >
          ← العودة إلى جميع الخدمات
        </Link>
      </section>

      {/* خدمات ذات صلة */}
      <section className="py-10 px-4 sm:px-6 lg:px-20 bg-gray-50">
        <h2 className="text-2xl text-center font-bold text-green-800 mb-6">خدمات ذات صلة</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
