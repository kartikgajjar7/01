import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GallerySection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Content Column */}
        <div className="lg:w-[33.33%] space-y-6">
          <span className="text-gray-600 text-sm tracking-wider uppercase">
            NO LIMITS
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            LOREM IPSUM DOLOR SIT AMET
          </h1>

          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>

          <button className="bg-[#2B55E5] text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-[#2347c2] transition-colors">
            Loerum Ipsum
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Additional Images Row */}
          <div className="flex gap-3 mt-4">
            <div className="flex-[1] flex-row-reverse relative h-[100px]">
              <Image
                src="/00.png"
                alt="Additional content"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex-[2] relative h-[290px]">
              <Image
                src="/00.png"
                alt="Additional content"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Gallery Flex Container */}
        <div className="lg:w-[66.66%] flex flex-col border overflow-hidden h-[603px]">
          {/* First Row */}
          <div className="flex gap-[10px] h-[200px]">
            <div className="flex-1 relative">
              <Image
                src="/left1.png"
                alt="Gallery image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-1 relative">
              <Image
                src="/grp.png"
                alt="Gallery image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="mt-3 h-[300px] relative">
            <Image
              src="/big.png"
              alt="Gallery image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Third Row */}
          <div className="mt-3 h-[100px]">
            <div className="flex gap-[10px] h-full">
              <div className="flex-1 relative">
                <Image
                  src="/left1.png"
                  alt="Gallery image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/grp.png"
                  alt="Gallery image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
