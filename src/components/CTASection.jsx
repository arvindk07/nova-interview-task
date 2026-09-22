const CTASection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#081952] py-16 sm:py-20">
      {/* Left decorative wave */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-30">
        <svg
          width="75"
          height="130"
          viewBox="0 0 75 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-20 5C5 5 5 25 30 25C55 25 55 5 80 5"
            stroke="#3157B7"
            strokeWidth="3"
          />
          <path
            d="M-20 20C5 20 5 40 30 40C55 40 55 20 80 20"
            stroke="#3157B7"
            strokeWidth="3"
          />
          <path
            d="M-20 35C5 35 5 55 30 55C55 55 55 35 80 35"
            stroke="#3157B7"
            strokeWidth="3"
          />
          <path
            d="M-20 50C5 50 5 70 30 70C55 70 55 50 80 50"
            stroke="#3157B7"
            strokeWidth="3"
          />
          <path
            d="M-20 65C5 65 5 85 30 85C55 85 55 65 80 65"
            stroke="#3157B7"
            strokeWidth="3"
          />
          <path
            d="M-20 80C5 80 5 100 30 100C55 100 55 80 80 80"
            stroke="#3157B7"
            strokeWidth="3"
          />
          <path
            d="M-20 95C5 95 5 115 30 115C55 115 55 95 80 95"
            stroke="#3157B7"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Top-right curved decoration */}
      <div className="pointer-events-none absolute -right-24 -top-52 h-[570px] w-[340px] rounded-[50%] border border-[#33467d]/70" />

      <div className="pointer-events-none absolute -right-40 -top-64 h-[650px] w-[420px] rounded-[50%] border border-[#33467d]/60" />

      {/* Bottom-right curve */}
      <div className="pointer-events-none absolute -bottom-64 right-20 h-[450px] w-[180px] rounded-[50%] border border-[#33467d]/50 rotate-[-15deg]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[40px]">
          Extend your team with engineers who ship
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#d1d8eb] sm:text-base">
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

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            type="button"
            className="group inline-flex h-11 items-center justify-center gap-3 rounded-full border border-white/90 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#081952]"
          >
            <span>Book a Call</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Bottom text */}
        <p className="mt-4 text-sm text-[#8d98b7]">
          30 minutes with a solution architect. No obligation.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
