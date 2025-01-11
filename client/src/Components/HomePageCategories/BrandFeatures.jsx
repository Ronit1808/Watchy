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
    },
    {
      id: 2,
      icon: returns,
      title: "Easy Returns & Refunds",
    },
    {
      id: 3,
      icon: secure,
      title: "Secure Payments",
    },
    {
      id: 4,
      icon: quality,
      title: "Top-Quality Products",
    },
  ];

  return (
    <div className="BrandFeatures px-4 py-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-teal-500 font-pacifico">Why Shop With Us?</h2>
        <p className="text-gray-600  font-serif mt-2">Here’s why we’re loved by thousands of customers</p>
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
            <h3 className="text-lg font-bold font-serif text-teal-500 mb-2">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandFeatures;
