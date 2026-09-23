import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="cta-section">
      {/* Content */}
      <div className="relative z-10 inner-section px-6 text-center">
        {/* Heading */}
        <h2 className="global-heading text-white ">
          Extend your team with engineers who ship
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-3xl global-paragraph text-[#d1d8eb] ">
          A Delivery Pod is operational in under two weeks. The first sprint
          metric report is at the first weekly demo.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="group inline-flex h-11 items-center justify-center gap-3 rounded-full bg-[#2867e8] px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-[#3b76ee] hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span>Talk to Us</span>

            <FaArrowRight size={14} />
          </button>

          <button
            type="button"
            className="group inline-flex h-11 items-center justify-center gap-3 rounded-full border border-white/90 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#081952]"
          >
            <span>Book a Call</span>

            <FaArrowRight size={14} />
          </button>
        </div>

        {/* Bottom text */}
        <p className="mt-4 text-sm font-medium text-[#8d98b7]">
          30 minutes with a solution architect. No obligation.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
