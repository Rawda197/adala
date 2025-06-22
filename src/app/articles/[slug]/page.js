"use client";
import articles from "../../data/articlesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

const ArticleDetail = ({ params }) => {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* المحتوى الرئيسي */}
      <main className="flex-grow px-4 py-10 flex flex-col items-center">
        {/* صورة المقال بنسبة 2:1 ومتجاوبة */}
        <div className="relative mb-6 w-full max-w-3xl aspect-[2/1] rounded-xl overflow-hidden shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* نص المقال */}
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{article.title}</h1>
          <p className="text-gray-600 text-sm mb-6">
            By <span className="font-medium">{article.author}</span> •{" "}
            {new Date(article.date).toLocaleDateString()}
          </p>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-line mb-10">
            {article.content}
          </div>

          <Link
            href="/articles"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80 transition"
          >
            ← Back to Articles
          </Link>
        </div>

        {/* مقالات ذات صلة */}
        <div className="mt-20 w-full">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <Link
                    href={`/articles/${item.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
