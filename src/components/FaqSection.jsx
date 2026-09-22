import React, { useState } from "react";

import downArrow from "../assets/icons/downArrow.svg";

const FAQS = [
  {
    question: "How quickly can engineers join our team?",
    answer:
      "Most engagements start within 1-2 weeks of finalizing requirements. We match you with pre-vetted engineers so you're not waiting through a lengthy hiring process.",
  },
  {
    question: "Can we interview engineers before making a decision?",
    answer:
      "Yes, you can interview any shortlisted engineer before committing. This ensures the fit is right for your team and your project before work begins.",
  },
  {
    question: "How does billing work for Team Extension?",
    answer:
      "Billing is straightforward and based on the engineers you engage, with monthly invoicing and no long-term hiring commitments. You can scale your team up or down as project priorities change, giving you flexibility without the administrative burden of permanent hiring.",
  },
  {
    question: "What happens if an engineer leaves or isn't the right fit?",
    answer:
      "We handle replacements at no extra cost and work quickly to onboard a suitable substitute, keeping any disruption to your project to a minimum.",
  },
  {
    question: "Will engineers work within our existing tools and processes?",
    answer:
      "Yes, engineers adapt to your existing stack, workflows, and communication tools, integrating with your team rather than asking you to change how you work.",
  },
  {
    question: "Is Team Extension the right engagement model for our team?",
    answer:
      "It works well if you need to scale delivery capacity quickly while retaining control over priorities and roadmap. We can help you assess fit during a quick consultation.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="w-full bg-white px-6 sm:px-10 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[380px_1fr]">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900">
            Frequently Asked
            <br />
            <span className="text-blue-600">Questions</span>
          </h2>
          <p className="mt-5 text-slate-500 leading-relaxed max-w-sm">
            Here is the list of some of the most common questions we hear before
            any engagement. If your query is not listed here, contact us and we
            will get back to you within 24 hours.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "border-blue-300 bg-blue-50/40"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-semibold ${
                      isOpen ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <downArrow />

                  {/* <IoIosArrowDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  /> */}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
