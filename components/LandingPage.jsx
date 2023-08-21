import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-17 h-3/4">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            AutoVA
            <span className="dark:text-violet-400"></span> Autonumus Virtual Assistant
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            
            <br className="hidden md:inline lg:hidden" />
            AI tool that helps you find the perfect product to sell. Using market analysis. We need to find right product, strategies to market and product that can be sold year round.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Pricing Plans
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Try for free
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            fill={true}
            src="Business_SVG.svg"
            alt=""
            className=" w-52 object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
