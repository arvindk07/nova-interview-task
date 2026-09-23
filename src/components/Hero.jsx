import MicroSoft from "../assets/icons/micosoft.svg";
import Aws from "../assets/icons/aws.svg";
import Cloud from "../assets/icons/cloud-logo.svg";
import Clutch from "../assets/icons/clutch.svg";
import { LuSquareCode } from "react-icons/lu";
import HeroBoy from "../assets/heroBoy.png";
import { FaArrowRight } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { IoBugOutline } from "react-icons/io5";

import emploee1 from "../assets/employee (1).png";
import emploee2 from "../assets/employee (2).png";
import emploee3 from "../assets/employee (3).png";

const partners = [MicroSoft, Aws, Cloud, Clutch];

const Hero = () => {
  return (
    <section className=" hero-section">
      <div className="relative mx-auto flex justify-betwee gap-5 lg:gap-28 inner-section">
        {/* Left column */}
        <div className="w-[60%]  text-center  lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5">
            <span className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-xs font-medium text-white">
              4.8/5 on Clutch · 200+ reviews
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-[70px]">
            Vetted Engineers
            <br />
            in <span className="text-blue-400">Your Team</span>
          </h1>

          <p className="mt-5  global-paragraph text-[#E8E8EC]">
            Need more engineering capacity but don't want another three-month
            hiring cycle? Get a vetted shortlist in 48 hours. Your roadmap,
            architecture, sprint planning, and code reviews stay with your team
            while we handle hiring, employment, replacements, and staffing.
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-4">
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

          <div className="mt-14 flex flex-wrap items-center gap-2.5">
            {partners.map((p) => (
              <div key={p} className="partner-logo">
                <img src={p} alt={p} className="h-6 w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto flex w-[35%] justify-center">
          {/* Placeholder photo */}
          <div className="relative flex w-full items-end justify-center  ">
            <img src={HeroBoy} alt="Hero Boy" className="max-w-[490px]" />
          </div>

          {/* Top-left floating card */}
          <div className="Hero-employee">
            <div className="flex -space-x-2">
              <img src={emploee1} alt="" />
              <img src={emploee2} alt="" className="z-10" />
              <img src={emploee3} alt="" />
            </div>
            <h3 className="mt-3 text-2xl font-bold text-blue-300">675+</h3>
            <p className="text-xs leading-snug text-blue-100/80">
              Employees Contributing To Our Growth
            </p>
          </div>

          {/* Bottom floating cards */}
          <div className="absolute bottom-20 left-2 w-44 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <LuSquareCode size={28} className="text-blue-600" />
              <div className="">
                <span className="text-xs font-semibold text-slate-800">
                  Code Quality
                </span>
                <span className="mt-1 flex gap-0.5 text-[#2563EB]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={10}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-2 w-44 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <IoBugOutline size={28} className="text-blue-600" />

              <div className="">
                <span className="text-xs font-semibold text-slate-800">
                  Debuggability
                </span>
                <span className="mt-1 flex gap-0.5 text-[#2563EB]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={10}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
