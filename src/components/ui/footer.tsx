export const Footer = () => {
  const navigationLinks = [
    {
      title: "Lorem Ipsum",
      links: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  ];

  return (
    <footer className="bg-[#171E2B] pt-12 md:pt-20 pb-16 md:pb-36">
      <div className="container mx-auto px-4 md:px-20 max-w-[1400px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
          {/* Logo */}
          <div className="bg-[#E5E5E5] lg:h-[49px] px-4 md:px-8 py-2 md:py-3 w-fit">
            <span className="text-lg md:text-xl">LOGO</span>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:flex gap-12 md:gap-32 figtree">
            {navigationLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-white text-sm md:text-[15px] mb-4 md:mb-8">
                  {column.title}
                </h3>
                <div className="flex flex-col gap-3 md:gap-6">
                  {column.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href="#"
                      className="text-[#A1A1AA] text-sm md:text-[15px]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
