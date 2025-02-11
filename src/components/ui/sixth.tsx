import React from "react";
import { Bike } from "lucide-react";

function Sixth() {
  return (
    <div className="bg-white  h-[652px]">
      {/* Hero Section */}
      <div className="relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=2000"
            alt="Motorcycles in rain"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="pt-8">
            <div className="bg-white text-black px-6 py-2 inline-block">
              <Bike className="w-6 h-6" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex items-center justify-center h-full -mt-20">
            <div className="max-w-4xl text-white text-center">
              <h1 className="text-[42px] font-bold leading-tight uppercase">
                Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus
                egestas aliquam viverra mi.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sixth;
