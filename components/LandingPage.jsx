import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-17 h-3/4">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            AutoVA
            <span className="dark:text-violet-400"></span> Autonuomus Virtual
            Assistant
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            <br className="hidden md:inline lg:hidden" />
            AI tool that helps you find the perfect product to sell. Using
            market analysis. We need to find right product, strategies to market
            and product that can be sold year round.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              href="pricing"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Pricing Plans
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/chat"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Try for free
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-10 mt-8 lg:mt-0 h-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="Business_SVG.svg"
            alt=""
            className="w-full mt-8 mx-9 h-full sm:h-full lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
