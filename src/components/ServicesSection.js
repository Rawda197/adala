"use client";

import {
  FaBullhorn,
  FaChartLine,
  FaMobileAlt,
  FaPenNib,
  FaVideo,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn size={36} />,
    title: "Social Media Marketing",
    description:
      "Grow your brand awareness and engagement across all major platforms.",
  },
  {
    icon: <FaChartLine size={36} />,
    title: "Performance Advertising",
    description:
      "Reach your ideal customers through targeted and data-driven campaigns.",
  },
  {
    icon: <FaMobileAlt size={36} />,
    title: "Mobile Marketing",
    description:
      "Optimize your campaigns for mobile users with responsive strategies.",
  },
  {
    icon: <FaPenNib size={36} />,
    title: "Content Creation",
    description:
      "Professional content that attracts, converts, and retains customers.",
  },
  {
    icon: <FaVideo size={36} />,
    title: "Video Marketing",
    description:
      "Boost conversions with creative video ads and brand storytelling.",
  },
  {
    icon: <FaSearch size={36} />,
    title: "SEO Optimization",
    description:
      "Improve your website visibility and rank higher on Google search results.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At Growth Marketing, we provide smart digital solutions tailored to your business goals.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
