import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import MiniFAQSection from "../components/MiniFAQSection";
import BlogPreviewSection from "../components/BlogPreviewSection";
import ContactSection from '../components/ContactSection';

import Footer from "../components/Footer"
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSection />
      <About />
      <MiniFAQSection /> {/* ✅ استبدلي FAQItem بـ FAQSection */}
      <BlogPreviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default page;
