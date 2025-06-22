"use client";

import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white py-20 text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">

       
        {/* العنوان الرئيسي */}
        <h2 className="text-4xl font-bold text-primary text-center mb-6">
          About Growth Marketing
        </h2>

        {/* الفقرة التعريفية */}
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Growth Marketing is a results-driven digital marketing agency focused on empowering brands through tailored strategies. We combine creativity, data, and innovation to grow your business online and build lasting connections with your audience.
        </p>

        {/* الشبكة الرئيسية */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Mission */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-primary">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              Empower businesses by providing customized and impactful digital marketing solutions that deliver measurable results.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-primary">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To be a leading digital agency known for innovation, performance, and excellence in client relationships.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-primary">Core Values</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>Creativity</li>
              <li>Data-Driven Decisions</li>
              <li>Transparency</li>
              <li>Client Success First</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
