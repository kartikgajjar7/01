import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Cloud, Castle, Clock, Stars } from "lucide-react";
import Image from "next/image";

// Define types
type PropType = {
  slides?: number[];
  options?: any;
};

interface Testimonial {
  icon: "cloud" | "stars" | "castle" | "clock";
  text: string;
  author: {
    name: string;
    image: string;
  };
}

// Icon component
const IconComponent = ({ type }: { type: Testimonial["icon"] }) => {
  const icons = {
    cloud: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6667 32L24 45.3333H40L33.3333 58.6667"
          stroke="#0546D2"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53.3333 46.9525C57.3165 45.3919 61.3333 41.8367 61.3333 34.6663C61.3333 23.9997 52.4445 21.333 48 21.333C48 15.9997 48 5.33301 32 5.33301C16 5.33301 16 15.9997 16 21.333C11.5555 21.333 2.66666 23.9997 2.66666 34.6663C2.66666 41.8367 6.6834 45.3919 10.6667 46.9525"
          stroke="#0546D2"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    stars: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3599 38.4403L15.1306 32.5656C15.4862 31.8115 16.5138 31.8115 16.8694 32.5656L19.6401 38.4403L25.8362 39.3883C26.6312 39.5099 26.948 40.5325 26.3725 41.1195L21.8899 45.6891L22.9478 52.1448C23.0837 52.9739 22.2522 53.6059 21.5408 53.2144L16 50.1648L10.4592 53.2144C9.74784 53.6059 8.91635 52.9739 9.05221 52.1448L10.1101 45.6891L5.62747 41.1195C5.05192 40.5325 5.36877 39.5099 6.16376 39.3883L12.3599 38.4403Z"
          stroke="#155ADA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.3597 38.4403L47.1307 32.5656C47.4861 31.8115 48.5139 31.8115 48.8693 32.5656L51.6403 38.4403L57.8363 39.3883C58.6312 39.5099 58.948 40.5325 58.3725 41.1195L53.8899 45.6891L54.9477 52.1448C55.0837 52.9739 54.2523 53.6059 53.5408 53.2144L48 50.1648L42.4592 53.2144C41.7477 53.6059 40.9163 52.9739 41.0523 52.1448L42.1101 45.6891L37.6275 41.1195C37.052 40.5325 37.3688 39.5099 38.1637 39.3883L44.3597 38.4403Z"
          stroke="#155ADA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.3597 14.4404L31.1307 8.56562C31.4861 7.81146 32.5139 7.81146 32.8693 8.56562L35.6403 14.4404L41.8363 15.3883C42.6312 15.5099 42.948 16.5326 42.3725 17.1194L37.8899 21.689L38.9477 28.1448C39.0837 28.9739 38.2523 29.6059 37.5408 29.2144L32 26.1647L26.4592 29.2144C25.7478 29.6059 24.9163 28.9739 25.0522 28.1448L26.1101 21.689L21.6275 17.1194C21.0519 16.5326 21.3688 15.5099 22.1638 15.3883L28.3597 14.4404Z"
          stroke="#155ADA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    castle: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.3333 58.6663H18.6667C15.7211 58.6663 13.3333 56.2786 13.3333 53.333V29.8175C13.3333 29.5015 13.2398 29.1927 13.0646 28.9298L8.26872 21.7361C8.09349 21.4732 8 21.1644 8 20.8486V6.93301C8 6.04935 8.71635 5.33301 9.6 5.33301H14.4C15.2837 5.33301 16 6.04935 16 6.93301V11.733C16 12.6167 16.7163 13.333 17.6 13.333H25.0667C25.9503 13.333 26.6667 12.6167 26.6667 11.733V6.93301C26.6667 6.04935 27.3829 5.33301 28.2667 5.33301H35.7333C36.6171 5.33301 37.3333 6.04935 37.3333 6.93301V11.733C37.3333 12.6167 38.0496 13.333 38.9333 13.333H46.4C47.2837 13.333 48 12.6167 48 11.733V6.93301C48 6.04935 48.7163 5.33301 49.6 5.33301H54.4C55.2837 5.33301 56 6.04935 56 6.93301V20.8486C56 21.1644 55.9064 21.4732 55.7312 21.7361L50.9355 28.9298C50.7603 29.1927 50.6667 29.5015 50.6667 29.8175V53.333C50.6667 56.2786 48.2789 58.6663 45.3333 58.6663Z"
          stroke="#155ADA"
          stroke-width="1.5"
        />
      </svg>
    ),
    clock: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 5.33301H40"
          stroke="#155ADA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32 26.667V37.3337"
          stroke="#155ADA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32 58.6667C43.7822 58.6667 53.3334 49.1155 53.3334 37.3333C53.3334 25.5513 43.7822 16 32 16C20.2179 16 10.6667 25.5513 10.6667 37.3333C10.6667 49.1155 20.2179 58.6667 32 58.6667Z"
          stroke="#155ADA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
  return icons[type];
};

// Navigation buttons
const PrevButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) => (
  <button
    className="embla__button embla__button--prev p-2 border-[3px] border-white rounded-full "
    onClick={onClick}
    disabled={!enabled}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18L6 12Z"
        fill="white"
      />
      <path
        d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
);

const NextButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) => (
  <button
    className="embla__button embla__button--next p-2 border-[3px] border-white rounded-full "
    onClick={onClick}
    disabled={!enabled}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18L18.5 12Z"
        fill="white"
      />
      <path
        d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
);

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    icon: "cloud",
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: {
      name: "Jane Cooper",
      image:
        "https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
    },
  },
  {
    icon: "stars",
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: {
      name: "Ralph Edwards",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    },
  },
  {
    icon: "castle",
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero.",
    author: {
      name: "Courtney Henry",
      image:
        "https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?resize=400x300&vertical=center",
    },
  },
  {
    icon: "clock",
    text: "Hendrerit augue ut nunc, quis integer netus. Sed rhoncus magnis habitasse. Egestas amet habitasse tellus ornare. Hendrerit senectus. Mauris eget vitae praesent neque.",
    author: {
      name: "Cameron Wilson",
      image:
        "https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?resize=400x300&vertical=center",
    },
  },
];

const EmblaCarousel: React.FC<PropType> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative  lg:px-4 py-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 lg:pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
                <IconComponent type={testimonial.icon} />
                <p className="mt-6 mb-8 text-gray-600">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white ring-2 ring-gray-100">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{testimonial.author.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 lg:mt-20   border-white flex pl-6 justify-start items-centerc gap-2">
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
