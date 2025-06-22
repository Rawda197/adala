import articles from "../../app/data/articlesData";
import ArticlesList from "../../components/ArticlesList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ArticlesPage = () => {
  return (
    <div>
      <Header />
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-primary mb-10">Our Articles</h1>
          <ArticlesList articles={articles} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
