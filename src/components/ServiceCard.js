import Link from "next/link";
import * as Icons from "react-icons/fa";

const ServiceCard = ({ slug, title, description, icon }) => {
  const IconComponent = Icons[icon];

  return (
    <Link
      href={`/services/${slug}`}
      className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 block text-left"
    >
      <div className="text-primary mb-4">
        {IconComponent && <IconComponent size={30} />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
