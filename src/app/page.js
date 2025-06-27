import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutUs";
import ServiceCard from "../components/ServiceCard";
import ContactSection from '../components/ContactSection';

import Footer from "../components/Footer"
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceCard />
      <AboutSection />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default page;
