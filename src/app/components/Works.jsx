import React from "react";

const Works = () => {
  return (
    <section className="md:h-[100vh] flex items-center flex-col justify-center">
      <span className="text-base text-red-500">About us</span>
      <h1 className="text-3xl font-bold text-slate-700">A deep look</h1>

      <div className=" flex items-center justify-between flex-wrap w-full gap-3">
        <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md md:w-2/6 cursor-pointer shadow-slate-400 mb-2 mt-3">
            <h1 className="font-bold text-2xl">Best Printing Services</h1>
            <span className="text-center text-gray-400">
            Organizations like using Adarsh Offset Press since the site provides a great mix of
            quality and affordable pricing. you’ll find for your company branding.
            </span>
        </div>

        <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md cursor-pointer shadow-slate-400 mb-2 mt-3 md:w-[400px] ">
            <h1 className="font-bold text-2xl">Trusted & Secure</h1>
            <span className="text-center text-gray-400">
            Adarsh Offset Press is one of the most trusted specialists in secure printing. Everything from origination to fulfillment occurs in our secure printing facility.
            </span>
        </div>

        <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md cursor-pointer shadow-slate-400 mb-2 mt-3 md:w-2/6 ">
            <h1 className="font-bold text-2xl">Customer Satisfaction</h1>
            <span className="text-center text-gray-400">
            We have spent years satisfying our clients. The secret of our customer satisfaction is the hard work and dedication to be the best in this industry.
            </span>
        </div>
      </div>

    </section>
  );
};

export default Works;
