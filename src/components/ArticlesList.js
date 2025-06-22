"use client";

import Link from "next/link";

const ArticlesList = ({ articles }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
            <Link
              href={`/articles/${article.slug}`}
              className="text-primary font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
