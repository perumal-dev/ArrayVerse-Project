const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 shadow-lg slide-up">
      <h1 className="text-5xl font-bold mb-4">ArrayVerse</h1>

      <p className="text-xl max-w-3xl leading-relaxed">
        A modern JavaScript Array documentation platform built with React and
        Tailwind CSS. Learn array fundamentals, methods, interview concepts, and
        real-world examples in one place.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <span className="bg-white/20 px-4 py-2 rounded-full">25+ Methods</span>

        <span className="bg-white/20 px-4 py-2 rounded-full">
          Interview Ready
        </span>

        <span className="bg-white/20 px-4 py-2 rounded-full">
          React + Tailwind
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
