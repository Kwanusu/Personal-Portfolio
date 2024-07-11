import React from "react";
// import work1 from "../assets/my_work_1.jpg";
// import work2 from "../assets/my_work_2.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-10">My Work</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="relative">
              <img src='{}' alt="Work 1" className="w-full rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">E Commerce</h3>
                <p className="mb-4">A fully-fledged online shop with great user experience.</p>
                <a href="https://github.com/Kwanusu/e_com.git" className="text-red-500 font-semibold text-xl">Learn More</a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="relative">
              <img src='{}' alt="Work 2" className="w-full rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="mb-4">Brief description of the project goes here.</p>
                <a href="#" className="text-red-500 font-semibold text-xl">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
