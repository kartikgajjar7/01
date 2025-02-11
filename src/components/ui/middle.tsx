import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Middle() {
  return (
    <div className="relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-24">
          {/* Image Section */}
          <div className="relative h-[300px] lg:h-[600px]">
            <Image
              src="/twobike.png"
              alt="Two motorcyclists on a country road"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 lg:space-y-8">
            <span className="text-[#2B55E5] text-lg">Lorem ipsum</span>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#2B55E5]">LOREM</span> IPSUM DOLOR SIT AMET
              CONSECTETUR. ENIM DONEC.
            </h1>

            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
              amet non.
            </p>

            {/* Two Column List */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map(
                (item, index) => (
                  <div key={index} className="text-gray-800">
                    {item}
                  </div>
                )
              )}
              {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map(
                (item, index) => (
                  <div key={`right-${index}`} className="text-gray-800">
                    {item}
                  </div>
                )
              )}
            </div>

            {/* Button */}
            <button className="bg-[#2B55E5] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#2347c2] transition-colors">
              Loerum Ipsum
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute width-[80%] bottom-0 left-0 right-0 h-2">
        <div className="h-full bg-gradient-to-r from-[#1a237e] via-[#2e7d32] to-[#4a148c]" />
      </div>
    </div>
  );
}
