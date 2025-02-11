import Image from "next/image";
function Fifth() {
  return (
    <div className=" mt-20 lg:mt-40">
      <div className="py-2  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl  lg:text-[42px] lg:leading-[49.22px] font-bold text-center text-gray-900 mb-20 uppercase">
            Lorem ipsum dolor sit amet
            <br />
            consectetur. Commodo leo amet.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {/* Row 1 */}
            <Image
              width={86}
              height={97}
              src="/hro.png"
              alt="Hero"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/2560px-Honda_Logo.svg.png"
              alt="Honda"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/bjaj.png"
              alt="Bajaj"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/tvs.png"
              alt="TVS"
              className="h-12 object-contain"
            />

            <Image
              width={86}
              height={97}
              src="/enfild.png"
              alt="Royal Enfield"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/yamaha.png"
              alt="Yamaha"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/ktm.png"
              alt="KTM"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/ather.jpeg"
              alt="Ather"
              className="h-12 object-contain"
            />

            <Image
              width={86}
              height={97}
              src="/ola.png"
              alt="Ola Electric"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/revolt.png"
              alt="Revolt"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/ultra.jpeg"
              alt="Ultraviolette"
              className="h-12 object-contain"
            />
            <Image
              width={86}
              height={97}
              src="/ktm.png"
              alt="Tork Motors"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen mt-20  bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h3 className="text-blue-600 text-lg mb-4">
              Lorem ipsum dolor sit amet
            </h3>
            <h2 className="text-4xl font-bold text-gray-900">
              LOREM IPSUM DOLOR SIT
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid bg-white px-28 grid-cols-1 md:grid-cols-2 place-items-center  gap-8">
            {/* Card 1 */}
            <div className="space-y-4 bg-white px-5 w-screen lg:h-[560px] lg:w-[445px]">
              <img
                src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&w=600&h=400"
                alt="Colorful buildings at sunset"
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
              <a href="#" className="text-blue-600 font-medium inline-block">
                Learn More
              </a>
            </div>

            {/* Card 2 */}
            <div className="space-y-4 bg-white px-5 w-screen lg:h-[560px] lg:w-[445px]">
              <img
                src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&w=600&h=400"
                alt="White buddha statue"
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
              <a href="#" className="text-blue-600 font-medium inline-block">
                Learn More
              </a>
            </div>

            {/* Card 3 */}
            <div className="space-y-4 bg-white px-5 w-screen lg:h-[560px] lg:w-[445px]">
              <img
                src="https://images.unsplash.com/photo-1490731727228-d56f39758d0e?auto=format&fit=crop&w=600&h=400"
                alt="Person in kimono with wind"
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
              <a href="#" className="text-blue-600 font-medium inline-block">
                Learn More
              </a>
            </div>

            {/* Card 4 */}
            <div className="space-y-4 bg-white px-5 w-screen lg:h-[560px] lg:w-[445px]">
              <img
                src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&w=600&h=400"
                alt="Orange fruits on tree"
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
              <a href="#" className="text-blue-600 font-medium inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
