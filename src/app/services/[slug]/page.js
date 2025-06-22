import { servicesData } from "../../data/servicesData";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetail({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <>
      <Header />

      <section className="bg-white text-primary py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">{service.description}</p>

          {service.image && (
            <div className="my-10 flex justify-center">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          )}

          {service.details && (
            <ul className="text-left list-disc pl-6 space-y-3 text-gray-700 max-w-2xl mx-auto">
              {service.details.map((point, i) => (
                <li key={i} className="text-md">{point}</li>
              ))}
            </ul>
          )}

          <Link
            href="/contact"
            className="inline-block mt-10 bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-primary-light transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
