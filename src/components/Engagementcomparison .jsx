import React from "react";

import ChevronDown from "../assets/icons/AnimatedDownArrow.svg";

const columns = ["Team Extension", "Delivery Pods", "Development Centres"];

const rows = [
  {
    factor: "Team management",
    values: [
      "You manage directly",
      "ValueCoders manages pod",
      "You manage, VC handles ops",
    ],
  },
  {
    factor: "Governance structure",
    values: [
      "Your PM, your rituals",
      "VC sprint governance + metrics",
      "Your brand and standards",
    ],
  },
  {
    factor: "Billing model",
    values: [
      "Per-engineer, monthly",
      "Monthly pod rate",
      "Cost-plus or managed",
    ],
  },
  {
    factor: "Ramp speed",
    values: [
      "Per-engineer, monthly",
      "1-2 week pod formation",
      "4-6 week centre setup",
    ],
  },
  {
    factor: "Minimum commitment",
    values: ["3 months", "3 months", "12 months"],
  },
];

const EngagementComparison = () => {
  return (
    <section className="EngagementComparison-section">
      <div className="mx-auto inner-section">
        {/* Header */}
        <div className="text-center mx-w-lg">
          <h1 className="global-heading text-slate-900 ">
            Which Engagement Model Fits Your Situation?
          </h1>
          <p className="mx-auto mt-3 max-w-2xl global-paragraph text-slate-500">
            Staff augmentation is not the right model for every buyer. Use this
            comparison to determine which engagement model best matches your
            delivery needs.
          </p>
        </div>

        {/* Table */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="bg-[#F0F0F3]">
                  <th className="w-1/4 px-6 py-6 text-left text-lg font-semibold tracking-wide text-slate-500">
                    FACTOR
                  </th>
                  {columns.map((col, i) => (
                    <th
                      key={col}
                      className={`w-1/4 px-6 py-6 text-left text-lg font-semibold tracking-wide ${
                        i === 0
                          ? "bg-indigo-100 text-indigo-600"
                          : "text-slate-500"
                      }`}
                    >
                      {col.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr
                    key={row.factor}
                    className={rowIdx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {row.factor}
                    </td>
                    {row.values.map((value, colIdx) => (
                      <td
                        key={colIdx}
                        className={`px-6 py-4 text-sm text-slate-500 ${
                          colIdx === 0 ? "bg-indigo-50/40" : ""
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scroll indicator button */}
          <button
            type="button"
            aria-label="Show more rows"
            className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition hover:bg-indigo-700"
          >
            <img src={ChevronDown} alt="Show more" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EngagementComparison;
