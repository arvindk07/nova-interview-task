const Engagement = () => {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid inner-section grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        {/* Left column */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-indigo-600">
            THE ENGAGEMENT
          </p>
          <h1 className="mt-3 global-heading">
            You need engineers who fit into your team, not another team to
            manage.
          </h1>
          <p className="mt-5 max-w-xl global-paragraph">
            Your engineers shouldn't have to adapt to someone else's methods.
            Augmented engineers join your standups, work from your backlog,
            commit to your repositories, and follow your release process. They
            work like engineers you've hired, not a separate vendor operating
            alongside you.
          </p>
        </div>

        {/* Right column */}
        <div className="rounded-2xl border border-indigo-200 bg-gradient-to-b from-indigo-50/40 to-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold tracking-wide text-indigo-600">
            WHAT IS STAFF AUGMENTATION?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Staff augmentation is an engagement model where pre-vetted engineers
            join your existing team under your management, processes, and tools.
            The vendor handles employment, payroll, HR compliance, and
            replacement SLA. Your sprint board doesn't change. Your release
            process doesn't change. The only difference is additional
            engineering capacity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
