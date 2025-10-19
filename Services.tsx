import React from 'react';
import { FaBed, FaHiking, FaSpa } from 'react-icons/fa';

const serviceItems = [
  {
    icon: <FaBed size={40} className="text-blue-500" />,
    title: 'Accommodation',
    description: 'Luxurious rooms and suites with breathtaking views and world-class amenities.',
  },
  {
    icon: <FaHiking size={40} className="text-green-500" />,
    title: 'Adventure Activities',
    description: 'Explore nature with guided hikes, mountain biking, and thrilling water sports.',
  },
  {
    icon: <FaSpa size={40} className="text-purple-500" />,
    title: 'Wellness & Spa',
    description: 'Rejuvenate your body and soul with our exclusive spa treatments and yoga sessions.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">Experience unparalleled comfort and excitement.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {serviceItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;