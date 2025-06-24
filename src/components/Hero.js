"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
];

export default function Hero() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* سلايدر الصور */}
        <div className="h-[250px] md:h-[450px] lg:h-screen">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full h-full"
          >
            {sliderImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`صورة محاسبة ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* النص الترحيبي */}
        <div className="flex items-center justify-center bg-green-50 px-6 py-10 lg:py-0">
          <div className="text-center lg:text-right max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">
              مرحبًا بك في مكتب ميزان للمحاسبة
            </h1>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              نحن نقدم لك أفضل الحلول المحاسبية والاستشارات المالية بإتقان ومهنية،
              لمساعدتك في تنمية أعمالك وتحقيق أهدافك بكل ثقة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
