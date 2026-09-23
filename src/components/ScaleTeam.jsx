import { FaArrowRight, FaStar } from "react-icons/fa";
import IconsOne from "../assets/icons/sclae_icons (1).png";
import IconsTwo from "../assets/icons/sclae_icons (2).png";
import IconsThree from "../assets/icons/sclae_icons (3).png";
import IconsFour from "../assets/icons/sclae_icons (4).png";

const ScaleTeam = () => {
  return (
    <section className="cta-section scale-team-section">
      {/* Internal Content Only */}
      <div className="relative z-10 inner-section flex items-center justify-between gap-10">
        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-[620px]">
          {/* Heading */}
          <h2 className="text-[24px] font-bold leading-[1.2] text-white sm:text-[32px]">
            Scale Your Team, Not Your Hiring.
          </h2>

          {/* Description */}
          <p className="mt-2  text-[9px] leading-[1.5] text-[#d1d8eb] sm:text-[16px]">
            675+ in-house engineers across Java, Python, React, Node.js, Data
            Engineering.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Talk to Us
              <FaArrowRight size={14} />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Call
              <FaArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* ================= RIGHT STATS CARD ================= */}
        <div
          className="
            w-[320px]
           
          "
        >
          {/* Top Stats */}
          <div className="grid grid-cols-2 gap-2">
            {/* 2500+ */}
            <div className=" scale-card px-2.5 py-2">
              <h3 className="">2,500+</h3>

              <p className="">
                Projects completed
                <br />
                across 20+ years
              </p>
            </div>

            {/* 94% */}
            <div className="scale-card px-2.5 py-2">
              <h3 className="">94%</h3>

              <p className="">
                Engagements delivered
                <br />
                on time
              </p>
            </div>
          </div>

          {/* Rating Section */}
          <div className=" scale-card mt-2 px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              {/* Social / Review Icons */}
              <div className="grid grid-cols-2 gap-2">
                <div className="scale-icons">
                  <img src={IconsOne} alt="" />
                </div>

                <div className="scale-icons">
                  <img src={IconsTwo} alt="" />
                </div>

                <div className="scale-icons">
                  <img src={IconsThree} alt="" />
                </div>
                <div className="scale-icons">
                  <img src={IconsFour} alt="" />
                </div>
              </div>

              {/* Rating */}
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="text-[16px] font-bold leading-none text-white">
                    4.8/5
                  </h3>

                  <FaStar size={20} className="text-[#6AA0FF]" />
                </div>

                <p className="mt-0.5 text-[5px] text-[#d1d8eb]">
                  Client Rating on Clutch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleTeam;
