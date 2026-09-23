import RedmeOne from "../assets/Redmi Note 11 Pro (1).png";
import RedmeTwo from "../assets/Redmi Note 11 Pro (3).png";
import RedmeThree from "../assets/Redmi Note 11 Pro (2).png";
import RedmeFour from "../assets/Redmi Note 11 Pro.png";
import { FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    category: "SAAS / FINTECH",
    title:
      "Series B FinTech Added 4 Backend Engineers Without Slowing an Active Release Cycle",
    description:
      "Managing a designer, Shopify contractor, SEO consultant, and PPC campaign alongside a fast-moving team required tight coordination. 6 months after consolidating with PixelCrayons.",

    image1: RedmeFour,
    image2: RedmeOne,

    stats: [
      { value: "4 engineers", label: "Added to an active team" },
      { value: "6 days", label: "Time to first PR merged" },
      { value: "18 mo", label: "Engagement duration" },
    ],

    featured: true,
  },

  {
    category: "ISV / HEALTHCARE",
    title:
      "Healthcare ISV Scaled QA Automation Capacity by 300% in Three Weeks Ahead of HIPAA Audit",
    description:
      "Orbit had hit their capacity ceiling. Turning away new clients wasn't sustainable, but taking on freelancers was producing inconsistent output.",
    image1: RedmeThree,
    image2: RedmeTwo,

    stats: [
      { value: "3×", label: "QA capacity increase" },
      { value: "21 days", label: "From brief to full capacity" },
      { value: "0", label: "Audit findings from augmented work" },
    ],

    featured: false,
  },
];

function CaseStudyCard({ study }) {
  return (
    <article
      className={`
        group rounded-[11px] bg-white p-5 sm:p-6
        shadow-[0_5px_25px_rgba(20,40,100,0.07)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_35px_rgba(20,40,100,0.12)]
        ${
          study.featured
            ? "border border-[#5c8fff]"
            : "border border-transparent"
        }
      `}
    >
      {/* Images */}
      <div
        className={`
          mb-5 grid h-[260px] grid-cols-2 px-7 pt-4 overflow-hidden
           rounded-[11px]
          ${study.featured ? "bg-[#6c9cff]" : "bg-[#073b78]"}
        `}
      >
        {/* Image 1 */}
        <div className="h-full w-full ">
          <img
            src={study.image1}
            alt={`${study.title} - image 1`}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>

        {/* Image 2 */}
        <div className="h-full w-full overflow-hidden">
          <img
            src={study.image2}
            alt={`${study.title} - image 2`}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>
      </div>

      {/* Category */}
      <p
        className="
          mb-2
          text-[9px]
          font-semibold
          tracking-[2px]
          text-[#0758e8]
        "
      >
        {study.category}
      </p>

      {/* Title */}
      <h3
        className="
          max-w-[450px]
          text-[17px]
          font-medium
          leading-[1.25]
          tracking-[-0.3px]
          text-[#151515]
        "
      >
        {study.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          text-[12px]
          leading-[1.65]
          text-[#686868]
        "
      >
        {study.description}
      </p>

      {/* Stats */}
      <div
        className="
          mt-7
          grid
          grid-cols-3
          gap-4
          border-t
          border-[#eeeeee]
          pt-5
        "
      >
        {study.stats.map((stat, index) => (
          <div key={index}>
            {/* Value */}
            <div
              className="
                text-[14px]
                font-medium
                text-[#202020]
              "
            >
              {stat.value}
            </div>

            {/* Label */}
            <div
              className="
                mt-1
                text-[9px]
                leading-[1.35]
                text-[#858585]
              "
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Link */}
      <a
        href="#"
        className="
          mt-7
          inline-flex
          items-center
          gap-2
          text-[10px]
          font-medium
          text-[#0758e8]
          transition-colors
          hover:text-[#003ea8]
        "
      >
        Read the case study
        <FaArrowRight
          size={14}
          className="
           
            transition-transform
            group-hover:translate-x-1
          "
        />
      </a>
    </article>
  );
}

const ProofSection = () => {
  return (
    <section className="proof-section">
      <div className="inner-section">
        {/* Heading */}
        <div className="mb-10">
          {/* Small Heading */}
          <p
            className="
              mb-2
              text-[9px]
              font-semibold
              tracking-[3px]
              text-[#0758e8]
            "
          >
            PROOF
          </p>

          {/* Heading + Description */}
          <div
            className="
              grid
              gap-5
              md:grid-cols-[1.2fr_0.8fr]
              md:items-end
            "
          >
            {/* Main Heading */}
            <h2
              className="
                global-heading
                text-[#14245b]
              "
            >
              Engineering teams extended,
              <br />
              shipping on their roadmap
            </h2>

            {/* Description */}
            <p
              className="
                global-paragraph
                text-[#666666]
                md:mb-1
              "
            >
              Two representative engagements. Each started as a Team Extension
              and continued beyond the initial three months.
            </p>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
