import React from 'react';
import delivery from '../../Images/delivery.png'
import returns from '../../Images/exchange.png'
import secure from '../../Images/credit.png'
import quality from '../../Images/quality.png'

const BrandFeatures = () => {
  const features = [
    {
      id: 1,
      icon: delivery,
      title: "All-India Delivery",
      description: "We deliver to every corner of the country with utmost care.",
    },
    {
      id: 2,
      icon: returns,
      title: "Easy Returns & Refunds",
      description: "Hassle-free returns within 30 days of purchase.",
    },
    {
      id: 3,
      icon: secure,
      title: "Secure Payments",
      description: "Your transactions are 100% secure and encrypted.",
    },
    {
      id: 4,
      icon: quality,
      title: "Top-Quality Products",
      description: "We offer only the finest quality products for our customers.",
    },
  ];

  return (
    <div className="BrandFeatures px-4 py-8 bg-teal-100 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">Why Shop With Us?</h2>
        <p className="text-gray-600 mt-2">Here’s why we’re loved by thousands of customers</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl mb-4">
                <img src={feature.icon}></img>
                </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandFeatures;
