import React from "react";

const steps = [
  {
    number: "01",
    tag: "Day 0",
    title: "Submit a brief",
    description:
      "Role, stack, seniority, timezone preference, and any team context you want us to match on. It takes 15 minutes. We ask clarifying questions on the same call.",
  },
  {
    number: "02",
    tag: "48 hours",
    title: "Receive shortlist",
    description:
      "Two to three anonymised profiles within 48 hours: experience summary, stack depth, a delivery outcome from a comparable engagement, and availability date. You review, shortlist, and interview whomever you want.",
  },
  {
    number: "03",
    tag: "Day 3-4",
    title: "Interview and select",
    description:
      "Standard technical interview. Your format, your questions. No intermediaries on the call. If none of the first round fit, we re-shortlist at no additional cost.",
  },
  {
    number: "04",
    tag: "Week 1",
    title: "Structured onboarding week",
    description:
      "Day 1: repository and environment access, codebase walkthrough. Day 2-3: architecture context with your tech lead. Day 4-5: first PR submitted.",
  },
  {
    number: "05",
    tag: "Ongoing",
    title: "Ongoing cadence",
    description:
      "Daily standups in your timezone. Async updates via your preferred channel (Slack, Teams, Linear). 90-day checkpoint with your AM and the engineer — covers technical alignment, capacity utilisation, and any fit adjustments before they become issues.",
  },
  {
    number: "06",
    tag: "<2 weeks, guaranteed",
    title: "Replacement guarantee",
    description:
      "If an engineer leaves, underperforms, or doesn't fit the team, you can find a replacement within 2 weeks at no cost. Response on the same day. No ticket queues.",
  },
];

const OnboardingProcess = () => {
  return (
    <section className="Onboarding-section">
      <div className="mx-auto inner-section">
        {/* Header */}
        <div className=" border-b border-slate-100 pb-12 lg:grid-cols-2 lg:gap-16">
          <div className="">
            <p className="text-xs font-semibold tracking-widest text-indigo-500">
              ONBOARDING TO ONGOING
            </p>
          </div>
          <div className="flex items-center gap-10">
            <h1 className=" global-heading text-slate-900 w-[60%]">
              From brief to contributing engineer in five working days
            </h1>
            <p className="global-paragraph text-slate-500 w-[40%]">
              The process is designed around one constraint: your team's
              continuity. Engineers join your workflows — not the other way
              around.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid grid-cols-1  gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-xs font-medium tracking-wide text-slate-400">
                {step.tag}
              </p>

              <div className="mt-3 flex items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-semibold text-indigo-600">
                  {step.number}
                </span>
                <div className="h-px flex-1 border-t border-dashed border-slate-200" />
              </div>
              <div className=" pr-16">
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcess;
