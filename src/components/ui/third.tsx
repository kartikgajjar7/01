import { CircleDollarSign } from "lucide-react";

function Third() {
  return (
    <div className="min-h-screen realtive ml-10 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <p className="text-[#2563EB] text-xl font-medium mb-4">
                Lorem ipsum dolor sit amet
              </p>
              <h1 className="text-[42px] font-bold tracking-tight text-gray-900 leading-[1.15] uppercase">
                LOREM IPSUM DOLOR SIT
                <br />
                AMET CONSECTETUR. EU ELIT.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
                leo eleifend condimentum in vitae faucibus. Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-10">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <CircleDollarSign className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-12">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra. Risus quam mattis senectus vitae interdum odio
                  ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                  donec. Ipsum sit ut tortor.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <CircleDollarSign className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-12">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra. Risus quam mattis senectus vitae interdum odio
                  ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                  donec. Ipsum sit ut tortor.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <CircleDollarSign className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-12">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra. Risus quam mattis senectus vitae interdum odio
                  ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                  donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=1400"
              alt="Business professionals having a discussion"
              className="w-full h-[700px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute ] right-0 w-[90%] h-[20px] bg-gradient-to-r from-[#3B5EE0] via-[#4CAF50] to-[#673AB7]"></div>
    </div>
  );
}

export default Third;
