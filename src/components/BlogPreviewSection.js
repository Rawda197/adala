"use client";
import BlogCard from "./BlogCard";
import articles from "../data/articlesData"; // عدل المسار حسب مكان ملف الداتا
import Link from "next/link";

export default function BlogPreviewSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-right">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">من مقالات المدونة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full transition"
        >
          تصفّح جميع المقالات
        </Link>
      </div>
    </section>
  );
}
