import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer"
import Contact from "../components/contact";
import ArticlesList from "../components/ArticlesList"
import articles from "./data/articlesData"; // ✅ سطر الاستيراد المهم

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSection />
      <About />
      <Contact />
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Latest Articles</h2>
          <ArticlesList articles={articles.slice(0, 3)} /> {/* 3 مقالات فقط */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
