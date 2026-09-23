import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const accordionItems = [
  {
    title: "Governance",
    content:
      "Your PM sets priorities and runs rituals. We provide sprint visibility, delivery metrics, and escalation paths so nothing falls through the cracks.",
  },
  {
    title: "Billing",
    content:
      "Simple per-engineer, monthly billing. No hidden fees, no long-term lock-in beyond the initial commitment period.",
  },
  {
    title: "Ramp Speed",
    content:
      "Most engineers are matched and onboarded within 1-2 weeks, with a structured first week to get them contributing fast.",
  },
];

function AccordionRow({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/15">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white">{title}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/25">
          <IoIosArrowDown
            className={`text-blue-300 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>
      {isOpen && (
        <p className="pb-6 text-sm leading-relaxed text-blue-100/80">
          {content}
        </p>
      )}
    </div>
  );
}

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1450] via-[#0d1a5c] to-[#1e3fa8] px-6 py-16 sm:px-10 lg:px-16">
      <div className="relative  grid inner-section grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-widest text-blue-300">
            HOW IT WORKS
          </p>
          <h1 className="mt-4 global-heading text-white ">
            Individuals, pairs, or small groups – on your tools, your cadence
          </h1>
          <p className="mt-5 max-w-md global-paragraph text-blue-100/80">
            Your engineering process stays the same. The only thing that changes
            is who joins your team. You manage delivery. We handle employment,
            HR, and replacements while engineers work inside your existing
            workflows.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-white">Team Composition</h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
            Individuals, pairs, or small groups of 3-5. Each engineer is matched
            to your stack - Java/Spring Boot,{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              Python
            </a>
            ,{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              React
            </a>
            ,{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              Node.js
            </a>
            ,{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              Data Engineering
            </a>
            , QA Automation, or{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              DevOps/Cloud
            </a>
            . Start with one engineer or add a small group. Scale capacity as
            your roadmap grows.
          </p>

          <div className="mt-6 border-t border-white/15">
            {accordionItems.map((item, index) => (
              <AccordionRow
                key={item.title}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
