import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// إعداد الخطوط
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// البيانات الوصفية للموقع
export const metadata = {
  title: "مكتب عدالة للمحاماة",
  description:
    "مكتب عدالة هو مكتب محاماة يقدم خدمات قانونية شاملة للأفراد والشركات، مع التزام كامل بالعدالة والمهنية والسرية التامة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* أيقونة الموقع (Favicon) */}
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
