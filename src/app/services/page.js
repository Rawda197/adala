// app/services/page.js أو page.jsx

"use client";

import ServiceCard from "../../components/ServiceCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <div>
      <Header />

      {/* كروت الخدمات */}
      <ServiceCard />

      <Footer />
    </div>
  );
};

export default Page;
