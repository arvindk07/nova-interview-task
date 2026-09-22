import MicroSoft from "../assets/icons/micosoft.svg";
import Aws from "../assets/icons/aws.svg";
import Cloud from "../assets/icons/cloud-logo.svg";
import Clutch from "../assets/icons/clutch.svg";
import { LuSquareCode } from "react-icons/lu";
import HeroBoy from "../assets/heroBoy.png";

import { FaStar } from "react-icons/fa";
import { IoBugOutline } from "react-icons/io5";

const partners = [MicroSoft, Aws, Cloud, Clutch];

const Hero = () => {
  return (
    <section className=" hero-section">
      <div className="relative mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 inner-section">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
            <span className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-xs font-medium text-white/90">
              4.8/5 on Clutch · 200+ reviews
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Vetted Engineers
            <br />
            in <span className="text-blue-400">Your Team</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-blue-100/80">
            Need more engineering capacity but don't want another three-month
            hiring cycle? Get a vetted shortlist in 48 hours. Your roadmap,
            architecture, sprint planning, and code reviews stay with your team
            while we handle hiring, employment, replacements, and staffing.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Talk to Us
              {/* <ArrowRight size={16} /> */}
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Call
              {/* <ArrowRight size={16} /> */}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {partners.map((p) => (
              <div
                key={p}
                className="flex h-10 items-center rounded-lg border border-white/15 bg-[#070D18] px-3 text-xs font-semibold text-slate-800"
              >
                <img src={p} alt={p} className="h-6 w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto flex max-w-sm justify-center">
          {/* Background circle */}
          <div className="absolute inset-0 mx-auto h-80 w-80 rounded-full bg-blue-500/20 blur-2xl" />

          {/* Placeholder photo */}
          <div className="relative flex h-96 w-full items-end justify-center  ">
            <span className="pb-10 text-sm text-blue-200/70">
              <img src={HeroBoy} alt="Hero Boy" />
            </span>
          </div>

          {/* Top-left floating card */}
          <div className="absolute -left-4 top-6 w-44 rounded-xl border border-white/10 bg-blue-950/90 p-4 shadow-lg backdrop-blur">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-blue-950 bg-slate-300"
                />
              ))}
            </div>
            <p className="mt-3 text-2xl font-bold text-blue-300">675+</p>
            <p className="text-xs leading-snug text-blue-100/80">
              Employees Contributing To Our Growth
            </p>
          </div>

          {/* Bottom floating cards */}
          <div className="absolute -bottom-6 left-0 w-44 rounded-lg bg-white px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <LuSquareCode size={16} className="text-blue-600" />
              <span className="text-xs font-semibold text-slate-800">
                Code Quality
              </span>
            </div>
            <span className="mt-1 flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={10} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
          </div>

          <div className="absolute -bottom-20 left-10 w-44 rounded-lg bg-white px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <IoBugOutline size={16} className="text-blue-600" />
              <span className="text-xs font-semibold text-slate-800">
                Debuggability
              </span>
            </div>
            <span className="mt-1 flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={10} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
