import React from "react";

const Education = () => {
  return (
    <section className="bg-white text-black py-25 px-8">
      <div>
        <div className="flex flex-col items-center justify-center mb-13">
          <h1 className="font-extrabold text-4xl mb-4">EDUCATION</h1>
          <div className="w-26 h-1 bg-amber-500"></div>
        </div>
        <div className="relative mx-auto my-auto max-w-[1000px]">
          {/* line */}
          <div className="hidden md:block absolute md:left-8 top-0 bottom-0 md:w-1 bg-[#d1d5dc]"></div>
          {/* box and cicle */}
          <div className="space-y-8 md:space-y-12">
            {/* circle and line */}
            <div className="flex items-start relative">
              <div className="hidden md:block absolute md:left-5.5 trasnform-translate-x-1/2 mt-2">
                <div className="md:w-6 md:h-6 bg-[#f3f4f6] md:border-4 border-amber-500 rounded-full"></div>
              </div>
              <div className="ml-0 md:ml-16 bg-white rounded-lg p-4 sm:p-5 md:p-6 w-full transition-all duration-300 border border-gray-200">
                <h3 className="text-2xl font-bold text-amber-500 mb-3">SQI COLLEGE OF ICT</h3>
                <p className="text-lg mb-3">Certificate web development</p>
                <p className="text-gray-400">January - November 2025</p>
              </div>
            </div>

             <div className="flex items-start relative">
              <div className="hidden md:block absolute md:left-5.5 trasnform-translate-x-1/2 mt-2">
                <div className="md:w-6 md:h-6 bg-[#f3f4f6] md:border-4 border-amber-500 rounded-full"></div>
              </div>
               <div className="ml-0 md:ml-16 bg-white rounded-lg p-4 sm:p-5 md:p-6 w-full transition-all duration-300 border border-gray-200">
                <h3 className="text-2xl font-bold text-amber-500 mb-3">Sunshine International High School</h3>
                <p className="text-lg mb-3">High School Diploma</p>
                <p className="text-gray-400">september 2018 - August 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
