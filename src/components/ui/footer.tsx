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
    <footer className="bg-[#171E2B] pt-20 pb-36">
      <div className="container mx-auto px-20 max-w-[1400px]">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="bg-[#E5E5E5] px-8 py-3 h-fit">
            <span className="font-black text-xl tracking-wide text-black">
              LOGO
            </span>
          </div>

          {/* Navigation Grid */}
          <div className="flex gap-32 figtree">
            {navigationLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-white font-medium text-[15px] mb-8">
                  {column.title}
                </h3>
                <div className="flex flex-col gap-6">
                  {column.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href="#"
                      className="text-[#A1A1AA] hover:text-white transition-colors text-[15px]"
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
