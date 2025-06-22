import ServiceCard from "../../components/ServiceCard";
import { servicesData } from "../data/servicesData";
import Header from "../../components/Header";

const ServicesPage = () => {
  return (
    <div> 
    <Header />
    <section className="bg-gray-50 py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At Growth Marketing, we offer innovative digital services tailored to your business needs.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              slug={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
     </div>
  );
};

export default ServicesPage;
