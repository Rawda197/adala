export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-12 pb-6 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-right">

        {/* عمود عن الشركة */}
        <div>
          <h3 className="text-xl font-bold text-[#b22222] mb-4">عن مكتب عدالة</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            مكتب عدالة هو كيان قانوني رائد يتمتع بخبرة تفوق 20 عامًا في تقديم خدمات قانونية احترافية،
            شملت الاستشارات، العقود، المرافعات، وتأسيس الشركات، مع التزام كامل بتحقيق العدالة والشفافية.
          </p>
        </div>

        {/* عمود الخدمات */}
        <div>
          <h3 className="text-xl font-bold text-[#b22222] mb-4">خدماتنا</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>الاستشارات القانونية</li>
            <li>صياغة العقود</li>
            <li>المرافعات والدفاع</li>
            <li>تأسيس الشركات</li>
            <li>حل النزاعات القانونية</li>
          </ul>
        </div>

        {/* عمود التواصل */}
        <div>
          <h3 className="text-xl font-bold text-[#b22222] mb-4">تواصل معنا</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 القاهرة، مصر</li>
            <li>📞 +20 101 234 5678</li>
            <li>📧 info@adala-law.com</li>
            <li>🕐 الأحد - الخميس: 9 صباحًا - 5 مساءً</li>
          </ul>
        </div>
      </div>

      {/* الحقوق */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        جميع الحقوق محفوظة © {new Date().getFullYear()} لمكتب <span className="text-[#b22222] font-semibold">عدالة للمحاماة</span>
      </div>
    </footer>
  );
}
