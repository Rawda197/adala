"use client";

import services from "../data/servicesData";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
        خدماتنا
      </h2>

      {/* الوصف تحت العنوان */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
        يقدم مكتب ميزان مجموعة متكاملة من الخدمات المحاسبية المصممة خصيصًا لتلبية
        احتياجات الأفراد والشركات. اكتشف كيف يمكننا مساعدتك في تنظيم وتحسين
        أعمالك المالية.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group rounded-xl overflow-hidden bg-white shadow-md transition-all duration-500 hover:rotate-[3deg] hover:border hover:border-green-400 hover:shadow-xl"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
