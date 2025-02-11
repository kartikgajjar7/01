import React from "react";
import { ArrowRight } from "lucide-react";

const SecondHeroSection = () => {
  return (
    <div className="w-full min-h-[739px] flex flex-col items-center justify-center text-center px-4n lg:py-16">
      {/* Logo container */}
      <div className="bg-gray-200 px-6 py-2 mb-8">
        <span className="font-bold text-lg">LOGO</span>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl font-bold max-w-2xl mb-6 uppercase leading-tight">
        Lorem Ipsum Dolor Sit Amet Consectetur. Dui.
      </h1>

      {/* Description text */}
      <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
        pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors">
        <span>Lorerum ipsum</span>
        <ArrowRight
          size={20}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
};

export default SecondHeroSection;
