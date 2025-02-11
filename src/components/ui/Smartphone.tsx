import { Download } from "lucide-react";

function Smartphone() {
  return (
    <div className=" w-full h-[530px] bg-[#F3F3F3]">
      <div className="container mx-auto px-4  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <div className="inline-block">
              <span className="text-blue-600 font-medium">Lorem Ipsum</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Lorem Ipsum Dolor Sit Amet
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
              morbi suspendisse convallis. Urna a urna lectus donec felis risus
              duis pellentesque. Pellentesque ultricies ipsum.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <img
                className="w-[140px] h-[41px]"
                src="./playstore.png"
                alt=""
              />
              <img className="w-[140px] h-[41px]" src="./appstore.png" alt="" />
            </div>
          </div>

          {/* Right Image */}
          <div className=" hidden relative h-[500px] w-full lg:flex items-center justify-center md:justify-end">
            <img
              src="./hand.png"
              alt="Hand holding smartphone"
              className="object-cover w-full max-w-sm rounded-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smartphone;
