import Facebook from "../assets/icons/facebook.svg";
import Youtube from "../assets/icons/youtube.svg";
import Instagram from "../assets/icons/instagram.svg";
import Linkdin from "../assets/icons/linkedin.svg";
import Twitter from "../assets/icons/twitter.svg";
// import { UsaIcon } from "./FooterSvg";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkdin,
  instagram: Instagram,
  youtube: Youtube,
};

const Footer = () => {
  const footerData = {
    locations: [
      {
        flag: (
          <img
            src="https://flagcdn.com/us.svg"
            alt="USA Flag"
            className="w-full h-full object-cover rounded-full"
          />
        ),
        city: "New York, USA",
        address: "5900 Balcones Drive, STE 100, Austin, TX 78731",
        phone: "+1 628 600 5055",
      },
      {
        flag: (
          <img
            src="https://flagcdn.com/gb.svg"
            alt="UK Flag"
            className="w-full h-full object-cover rounded-full"
          />
        ),
        city: "London, UK",
        address: "167-169 Great Portland Street, 5th Floor, London W1W 5PF",
        phone: "+44 20 7946 0958",
      },
      {
        flag: (
          <img
            src="https://flagcdn.com/ae.svg"
            alt="UAE Flag"
            className="w-full h-full object-cover rounded-full"
          />
        ),
        city: "Dubai, UAE",
        address: "541, 8W, Level 5, Dubai Airport Free Zone",
        phone: "+971 4 123 4567",
      },
      {
        flag: (
          <img
            src="https://flagcdn.com/in.svg"
            alt="India Flag"
            className="w-full h-full object-cover rounded-full"
          />
        ),
        city: "Noida, India",
        address: "11th Floor, Max Square, Noida-Greater Noida Expy, Sector 129",
        phone: "+91 98765 43210",
      },
    ],
    columns: [
      {
        title: "Company",
        links: [
          "About",
          "In Media",
          "Case Studies",
          "Our Blog",
          "Clients & Testimonials",
        ],
      },
      {
        title: "Our Expertise",
        links: [
          "Software Product Engineering",
          "Application Development",
          "Staff Augmentation",
          "Cloud Services",
          "AI & ML",
        ],
      },
      {
        title: "Hire Developers",
        links: [
          "Hire AI Engineers",
          "Hire Backend Developers",
          "Hire Frontend Developers",
          "Hire Blockchain Developers",
          "Hire Mobile App Developers",
        ],
      },
      {
        title: "Solutions",
        links: [
          "Offshore Development Center",
          "Offshore Software Development",
          "Nearshore Software Development",
        ],
      },
      {
        title: "Clients We Serve",
        links: ["For Startups", "For Enterprises"],
      },
    ],
    social: ["facebook", "twitter", "linkedin", "instagram", "youtube"],
    copyright:
      "Copyright © 2004 - 2026 ValueCoders. All Rights Reserved. A Vinove Company.",
  };

  return (
    <footer className="bg-[#1e2024] text-[#8b929c] pt-16 text-sm">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* ================= Locations ================= */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-6 mb-16">
          {footerData.locations.map((location, index) => (
            <div
              key={index}
              className="group flex-1 min-w-[100%] md:min-w-[45%] lg:min-w-0 border border-[#33373e] hover:border-[#f3b941] rounded-lg p-6 bg-[#212429] hover:bg-gradient-to-r hover:from-[#f3b9411a] hover:to-[#212429] transition-all duration-300 min-h-[120px] flex items-center"
            >
              {/* Default View */}
              <div className="w-full group-hover:hidden block">
                <h4 className="text-white text-[18px] font-normal leading-none tracking-[0.01em] font-['Plus_Jakarta_Sans'] mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 shrink-0">
                    {location.flag}
                  </span>
                  {location.city}
                </h4>
                <p className="text-[#8b929c] m-0 leading-relaxed text-sm">
                  {location.address}
                </p>
              </div>

              {/* Hover View */}
              <div className="w-full hidden group-hover:flex items-center gap-4">
                <div className="w-[48px] h-[48px] shrink-0">
                  {location.flag}
                </div>
                <div>
                  <h4 className="text-white text-[18px] font-normal leading-none tracking-[0.01em] font-['Plus_Jakarta_Sans'] mb-1">
                    {location.city}
                  </h4>
                  <p className="text-[#f3b941] m-0 font-medium text-sm">
                    {location.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Footer Links ================= */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 mb-12">
          {footerData.columns.map((column, index) => (
            <div key={index} className="flex-1 min-w-[150px]">
              <h4 className="text-white text-base mb-6 font-semibold">
                {column.title}
              </h4>

              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[#8b929c] transition-colors duration-200 hover:text-white block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social section under Solutions */}
              {column.title === "Solutions" && (
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-white font-semibold">Follow Us</span>

                  <div className="flex items-center gap-2">
                    {footerData.social.map((social) => {
                      const Icon = socialIcons[social];

                      return (
                        <a
                          key={social}
                          href="#"
                          aria-label={social}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8b929c] transition-colors duration-200 hover:bg-white"
                        >
                          <img
                            src={Icon}
                            alt={social}
                            className="h-3.5 w-3.5 object-contain brightness-0"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= Copyright ================= */}
      <div className="bg-[#000000] py-6 text-center">
        <p className="text-[#666a71] text-xs m-0">{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
