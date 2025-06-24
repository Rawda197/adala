"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import articles from "../../data/articlesData";

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 text-right">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-4">مدونة مكتب ميزان</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          اكتشف أحدث المقالات والنصائح المحاسبية والمالية لمساعدتك على تطوير أعمالك بثقة وذكاء.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
