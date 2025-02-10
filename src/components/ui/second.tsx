"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Second() {
  const containerRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();
  const feature1Ref = useRef();
  const feature2Ref = useRef();
  const feature3Ref = useRef();
  const ctaRef = useRef();
  const imageRef = useRef();
  const gradientRef = useRef();

  useGSAP(
    () => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Paragraph animation
      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      });

      // Features animations
      [feature1Ref, feature2Ref, feature3Ref].forEach((ref, index) => {
        gsap.from(ref.current, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
          },
        });
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
        },
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      // Gradient bar animation
      gsap.from(gradientRef.current, {
        scaleX: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative border shadow-[0_4px_25px_rgba(0,0,0,0.15)] border-[#D4D4D4] ml-10 mt-20 bg-white"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <p className="text-[#3B5EE0] text-2xl font- mb-3">
                Lorem ipsum dolor sit
              </p>
              <h1
                ref={headingRef}
                className="text-[40px] font-bold tracking-tight text-gray-900 leading-tight uppercase"
              >
                LOREM IPSUM
                <br />
                DOLOR SIT AMET
              </h1>
              <p
                ref={paragraphRef}
                className="mt-5 text-lg text-[18px] leading-relaxed text-gray-600"
              >
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                eget integer in nam. Non nisl iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-8">
              <div ref={feature1Ref} className="flex gap-6">
                <img
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=150&h=150"
                  alt="Biker riding"
                  className="w-[146x] h-[146px] object-cover  flex-shrink-0"
                />
                <div className="flex items-center">
                  <p className="text-gray-900 text-[18px] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum ornare
                    fermentum feugiat.
                  </p>
                </div>
              </div>
              <div ref={feature2Ref} className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=150&h=150"
                    alt="Motorcycle workshop"
                    className="w-[146x] h-[146px] object-cover  flex-shrink-0"
                  />
                  <div className="flex items-center">
                    <p className="text-gray-900 text-[18px] leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Dictum at ac
                      tellus faucibus urna ullamcorper id dui cursus. Venenatis.
                    </p>
                  </div>
                </div>
                <div ref={feature3Ref} className="flex gap-6">
                  <div className="flex gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=150&h=150"
                      alt="Customer service"
                      className="w-[146x] h-[146px] object-cover  flex-shrink-0"
                    />
                    <div className="flex items-center">
                      <p className="text-gray-900 text-[18px] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum nisl
                        morbi metus gravida eu facilisi enim. Ut diam auctor
                        tortor tincidunt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div ref={ctaRef} className="flex items-center gap-8">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3B5EE0] text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Leorum Ipsum
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-[#3B5EE0]" />
                  <span className="text-gray-900 font-medium">123456789</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <img
              ref={imageRef}
              src="https://s3-alpha-sig.figma.com/img/3f33/0e7e/2503a18db023ca88d2372ec66ab52634?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U11bt~~LKk5vQYNA7XUZzIjdVWbZenTI0IAbTi2zOcR0jK2xjNZEaDXWV5sJdEWeeG-qYnH1yav9tIpVhtc6PPnCWjzMNKYzWAUSdEw1qk5vGCtVOeVpXDxhjkw8sY6sbGyTc~ZQ69WUnNRxRlnNqZjr1wgdWVn7AUAcCShqorQVq6Chk~aS6jZn0DRte02vJnam2gaSusINT8uFEnbEZt2J5AEr1hA1xmihH8GaJ6croE-vFwsoRwI9MRNvqRpAe3qyafCdpHnLw6n~nEaV1pbkkOu8HXB3p46oH2rd~qz2r-Wm45pKQghhY1OWFG4qet8eTbknUfFPTeiY4TqLrA__"
              alt="Row of motorcycles"
              className="w-full h-[700px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* Gradient Bar */}
      <div
        ref={gradientRef}
        className="absolute left-0 bottom-[-10px] w-[90%] h-[20px] bg-gradient-to-r from-[#3B5EE0] via-[#4CAF50] to-[#673AB7] transform origin-left"
      />
    </div>
  );
}
