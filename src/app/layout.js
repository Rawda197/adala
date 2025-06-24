import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "مكتب ميزان للمحاسبة",
  description:
    "مكتب ميزان هو مكتب محاسبة متخصص في تقديم الحلول المحاسبية والضريبية للشركات والأفراد باحترافية ودقة عالية.",
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
