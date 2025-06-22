"use client";

import { useState } from "react";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const whatsappMessage = `Hello, I'm ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/201151432229?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");

    form.reset(); // مسح البيانات
    setSent(true); // عرض رسالة النجاح

    // إخفاء الرسالة بعد 5 ثوانٍ
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>

          {/* رسالة النجاح */}
          {sent && (
            <div className="mb-4 flex items-center gap-2 text-green-600 font-medium bg-green-50 px-4 py-2 rounded-md border border-green-200">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition duration-300"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* Map & Address */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <iframe
            className="w-full h-full min-h-[400px]"
            src="https://www.google.com/maps?q=Zahraa+El+Maadi+Street+50+Cairo+Egypt&output=embed"
            loading="lazy"
          ></iframe>
          <div className="p-4 bg-gray-100 text-sm text-gray-700">
            <p><strong>Company Address:</strong></p>
            <p>Zahraa El Maadi, Street 50, Cairo, Egypt</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
