import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ article }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:rotate-[1deg] hover:scale-105 hover:border-green-500 hover:shadow-lg cursor-pointer group">
      <div className="relative w-full h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 text-right">
        <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors duration-200">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>

        <Link
          href={`/blog/${article.slug}`}
          className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition"
        >
          قراءة المقال
        </Link>
      </div>
    </div>
  );
}
