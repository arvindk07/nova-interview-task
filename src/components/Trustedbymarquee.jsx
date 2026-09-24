import Afflite1 from "../assets/icons/affliate (1).svg";
import Afflite2 from "../assets/icons/affliate (2).svg";
import Afflite3 from "../assets/icons/affliate (3).svg";
import Afflite4 from "../assets/icons/affliate (4).svg";
import Afflite5 from "../assets/icons/affliate (5).svg";
import Afflite6 from "../assets/icons/affliate (6).svg";
import Afflite7 from "../assets/icons/affliate (7).svg";
import Afflite8 from "../assets/icons/affliate (8).svg";
import Afflite9 from "../assets/icons/affliate (9).svg";

const tickerItems = [
  "10-DAY REPLACEMENT GUARANTEE",
  "PROFILES IN 48 HOURS",
  "94% ON-TIME DELIVERY",
  "2,500+ PROJECTS DELIVERED",
  "675+ ENGINEERS ACTIVE",
  "4.8* ON CLUTCH",
  "20+ YEARS IN SOFTWARE DELIVERY",
];

const logos = [
  Afflite1,
  Afflite2,
  Afflite3,
  Afflite4,
  Afflite5,
  Afflite6,
  Afflite7,
  Afflite8,
  Afflite9,
];

const TrustedByMarquee = () => {
  return (
    <div className="w-full bg-white">
      {/* Top ticker bar */}
      <div className="overflow-hidden bg-blue-900 py-5">
        <div className="flex w-max animate-marquee-fast">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="mx-4 flex shrink-0 items-center text-sm font-semibold tracking-wide text-white"
            >
              {item}
              <span className="ml-4 h-1 w-1 rounded-full bg-amber-400" />
            </span>
          ))}
        </div>
      </div>

      {/* Trusted by section */}
      <div className="py-7.5  inner-section">
        <h2 className="text-center text-[20px] font-semibold text-slate-800">
          Trusted by startups and Fortune{" "}
          <span className="text-blue-600">500+</span> companies
        </h2>

        <div className="relative mt-7 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee-slow items-center gap-16">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="shrink-0 whitespace-nowrap text-xl font-bold text-slate-700 opacity-80"
              >
                <img src={name} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-fast:hover,
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedByMarquee;
