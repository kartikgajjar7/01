import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Svg from "./svg";
export default function Seventh() {
  return (
    <main className=" z-50  relative">
      <section className="p-12  md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <div className="inline-flex  rounded-lg border">
              <button className="px-4 w-[90px] border-[#CBD5E1] lg:w-[200.67px] h-[48px] py-2 text-sm font-medium rounded-l-lg bg-slate-100 shadow-sm">
                Research
              </button>
              <button className="px-4 w-[90px] py-2 border-[#CBD5E1] lg:w-[200.67px] h-[48px]   text-sm font-medium">
                Plan
              </button>
              <button className="px-4 w-[90px] py-2 border-[#CBD5E1] lg:w-[200.67px] h-[48px]  text-sm font-medium rounded-r-lg">
                Design
              </button>
            </div>
            <div className="absolute  -z-20 top-[5%] left-[45%]">
              <Svg />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
              Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
              enim elit in accumsan.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Check tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="relative lg:w-[600px] lg:h-[406px] aspect-[4/3]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/58a2/92f9/cc88b8d1b68a74ca24a02fb0524db98b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TZ4LNZuVbeC6hkfH~8lCHVfN-QE~muoSkZrBUjfBBmQ7ryBue4GfiJK3f3MNgVmb2XHWptjVoIkbV8cxanvVxfuJN16EBtFZ~0prQAtnpir8hskAKOhJ7l6OAl3gGGL5lrQsnedIcztxHRfhqLR4dABx-8T1CZUspgRDFeeWI52~IboNgEzpkRJYHWnkdr6fMiuHFkUipc~znNDR4cydwdxeMtABp6MybTMp1qH38Z2r0eEuw5fhm7TloO5Mu-oMnFD8BEHQJlJqMUHZUFl4Zfc-OCsHcIW2K4BNH1zsVEkOhmLdExQSXjQ3~IwNgsdWiBm9BoKV~ec749TkzqKIhQ__"
              alt="Handshake representing business agreement"
              fill
              className=" lg:w-full  rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className=" p-12 h-[724px] py-12 md:py-16 lg:py-20 mt-12  lg:mt-40 bg-[#F1F1F1] relative ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 leading-tight">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
              blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
              tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
              porta nisi felis. Massa in facilisis semper libero eget eu quisque
              bibendum platea. Tortor fames.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
              Lorem Ipsum
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="absolute aspect-[4/3] right-0 w-[570px] h-[570px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/b516/b95a/7c5e758d7b71c4a5b876a7ed582abb38?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ow9whcGMcEox1BcKJbNUtr0DIAXIIXMUmK5tHM2CYphTebI~gZ6xvbsV8jgmHt0W2ToV61kz7iyREqB8CwAqj1YqE8vYR-ICIBqJiOl5Ns0pvo-aWi5H9Alea3O39EqxtQHosmlgE~-PYkD-zAbqeK3QFN2Ghb3aWVI-03p1OGZKF9pJxjvpwkzMJ8CrgNA-vAjcU5HcKADfBfkWo5XnIrwsHKz2s8R03A9wUb7y6IN-YkF~Q8h2xquMzSV3U8j-VWkm3-UK2otmunNiDXEAKf4l77xuNbBPGCQJLrwxomFY45CCudqqIB2pBVXt~DCG~Y1s8LIPMQCur4xe3CiQCg__"
              alt="Two people discussing near a scooter"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <section className=" md:py-16 z-40 left-[-50px] bottom-[-200px]   absolute">
          <div className="max-w-2xl px-24">
            <div className="bg-white  rounded-lg shadow-lg p-8 lg:space-y-6">
              <h3 className="text-2xl font-bold">Lorem ipsum dolor sit</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Habitant vestibulum
                  vitae amet habitasse semper.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas congue mattis
                  ut placerat vitae amet suspendisse fermentum velit. Nibh dolor
                  nunc id tristique sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
                  amet quisque scelerisque facilisi. Ultrices lectus viverra
                  pharetra commodo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute left-0 bottom-[-10px] w-[90%] h-[20px] bg-gradient-to-r from-[#3B5EE0] via-[#4CAF50] to-[#673AB7] transform origin-left" />
      </section>
    </main>
  );
}
