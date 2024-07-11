import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-10">My Services</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Web Design</h2>
              <p className="mb-4">Dealing in both frontend and backend Web design</p>
              <a href="#" className="text-red-500 font-semibold">Learn More</a>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">UI/UX Design</h2>
              <p className="mb-4">Dealing in Android/IOS app interfaces</p>
              <a href="#" className="text-red-500 font-semibold">Learn More</a>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">App Design</h2>
              <p className="mb-4">Dealing in user-friendly apps that suit your desire and expectation</p>
              <a href="#" className="text-red-500 font-semibold">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
