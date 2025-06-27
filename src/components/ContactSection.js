"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `الاسم: ${form.name}%0Aالبريد: ${form.email}%0Aالهاتف: ${form.phone}%0Aالخدمة: ${form.service}%0Aالرسالة: ${form.message}`;
    window.open(`https://wa.me/201151432229?text=${msg}`, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch text-right">
        {/* ✅ نموذج التواصل */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-4 flex flex-col justify-between"
        >
          <h2 className="text-3xl font-bold text-[#7a1c1c] text-center mb-4">
            تواصل معنا
          </h2>

          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          >
            <option value="">اختر نوع الخدمة</option>
            <option value="استشارة قانونية">استشارة قانونية</option>
            <option value="صياغة عقود">صياغة عقود</option>
            <option value="مرافعات ودفاع">مرافعات ودفاع</option>
            <option value="خدمة أخرى">خدمة أخرى</option>
          </select>

          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none"
          />

          <button
            type="submit"
            className="bg-[#7a1c1c] text-white py-2 px-6 rounded-full hover:bg-[#5c1212] transition"
          >
            إرسال
          </button>

          {sent && (
            <div className="text-[#7a1c1c] animate-bounce text-sm font-medium text-center">
              ✅ تم الإرسال بنجاح!
            </div>
          )}
        </form>

        {/* ✅ معلومات التواصل والخرائط والسوشيال */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-sm text-gray-700">
            <h3 className="text-xl font-bold text-[#7a1c1c] mb-2">
              معلومات التواصل
            </h3>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#7a1c1c]" />
              زهراء المعادي - شارع الخمسين - القاهرة - مصر
            </p>

            <p className="flex items-center gap-2">
              <FaPhone className="text-[#7a1c1c]" />
              01151432229
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#7a1c1c]" />
              info@adala-law.com
            </p>
          </div>

          <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow">
            <iframe
              title="الخريطة"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Zahraa%20El-Maadi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          <div className="flex justify-center gap-5 text-3xl mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-500 hover:text-[#1877f2] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-500 hover:text-[#e1306c] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-500 hover:text-[#1da1f2] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-500 hover:text-[#0077b5] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/201151432229"
              target="_blank"
              className="text-gray-500 hover:text-[#d3255f] transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
