export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-right">
        
        {/* عمود عن الشركة */}
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">عن شركة Balance</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            شركة متخصصة في تقديم الحلول المحاسبية والمالية للشركات الصغيرة والمتوسطة،
            نسعى إلى تحسين الأداء المالي وتوفير الاستشارات الذكية التي تساعد على النمو والاستدامة.
          </p>
        </div>

        {/* عمود الخدمات */}
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">خدماتنا</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>إعداد الميزانيات</li>
            <li>المحاسبة الضريبية</li>
            <li>إدارة الرواتب</li>
            <li>الاستشارات المالية</li>
            <li>تحليل الأداء والتكاليف</li>
          </ul>
        </div>

        {/* عمود التواصل */}
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">تواصل معنا</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 القاهرة، مصر</li>
            <li>📞 +20 102 123 4567</li>
            <li>📧 info@Balance.com</li>
            <li>🕐 من الأحد إلى الخميس 9ص - 5م</li>
          </ul>
        </div>
      </div>

      {/* الحقوق */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        جميع الحقوق محفوظة © {new Date().getFullYear()} لشركة <span className="text-green-500 font-semibold">UmmahTech</span>
      </div>
    </footer>
  );
}
