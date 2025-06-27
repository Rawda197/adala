// src/components/ServiceCard.js

"use client";
import GoToServicesButton from "./GoToServicesButton";

import Link from "next/link";
import Image from "next/image";
import servicesData from "../data/servicesData";

const ServiceCard = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#7a1c1c] mb-4">
          خدماتنا القانونية
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          خدمات متنوعة نقدمها لتلبية احتياجاتك القانونية باحترافية عالية.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:rotate-3 hover:border-4 hover:border-[#7a1c1c] border-transparent group flex flex-col justify-between"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5 text-right flex-grow">
              <h3 className="text-xl font-bold text-[#7a1c1c] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
            </div>
            <div className="pb-5 text-center">
              <Link
                href={`/services/${service.slug}`}
                className="inline-block bg-[#7a1c1c] text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-[#8e2a2a]"
              >
                قراءة المزيد
              </Link>
            </div>
          </div>
        ))}
      </div>
<GoToServicesButton />

      
    </section>
  );
};

export default ServiceCard;
