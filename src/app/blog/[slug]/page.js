import articles from "../../../data/articlesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function ArticleDetail({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="max-w-[1400px] mx-auto px-2 md:px-6 py-6 text-right">
        {/* صورة المقال + المحتوى */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* الصورة */}
          <div className="md:w-1/2 w-full border border-gray-200 rounded-md overflow-hidden shadow-sm">
            <div className="relative w-full h-[300px] sm:h-[400px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* التفاصيل */}
          <div className="md:w-1/2 w-full space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-black">{article.title}</h1>
            <p className="text-sm text-gray-500">{article.date}</p>
            <div className="text-gray-800 leading-loose text-lg whitespace-pre-line">
              {article.content}
            </div>

            {/* زر الرجوع بشكل بيضاوي */}
            <div className="pt-4">
              <Link
                href="/blog"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition text-sm"
              >
                ← الرجوع إلى المدونة
              </Link>
            </div>
          </div>
        </div>

        {/* مقالات ذات صلة */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-800 text-center mb-10">
            مقالات ذات صلة
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedArticles.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] hover:rotate-[-1deg]"
              >
                {/* الصورة */}
                <div className="relative w-full h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* المحتوى */}
                <div className="p-4 text-right">
                  <h3 className="text-lg font-bold text-green-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="inline-block bg-green-600 text-white text-sm px-5 py-2 rounded-full hover:bg-green-700 transition"
                  >
                    قراءة المقال
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
