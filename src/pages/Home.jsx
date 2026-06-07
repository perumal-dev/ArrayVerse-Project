import HeroSection from "../components/HeroSection";
import MethodCard from "../components/MethodCard";

const Home = () => {
  const categories = [
    {
      title: "Array Creation",
      description:
        "Learn Array Literal, Constructor, Array.of(), and Array.from().",
    },
    {
      title: "Add & Remove",
      description: "Master push(), pop(), shift(), and unshift().",
    },
    {
      title: "Access Methods",
      description: "Understand at(), indexOf(), includes(), and more.",
    },
    {
      title: "Iteration",
      description: "Explore for loops, for...of, for...in, and forEach().",
    },
    {
      title: "Higher Order",
      description: "Learn map(), filter(), reduce(), find(), and more.",
    },
    {
      title: "Advanced Methods",
      description:
        "Master splice(), concat(), flat(), fill(), keys(), values(), and more.",
    },
  ];

  return (
    <div className="space-y-16 fade-in">
      <HeroSection />

      {/* Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Array Categories</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <MethodCard
              key={category.title}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Project Statistics</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">35+</h3>
            <p className="mt-2 text-slate-600">Array Methods</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">12+</h3>
            <p className="mt-2 text-slate-600">Learning Sections</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="mt-2 text-slate-600">Code Examples</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="mt-2 text-slate-600">Interview Focused</p>
          </div>
        </div>
      </section>

      {/* Why Learn Arrays */}
      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">Why Learn Arrays?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              🚀 Essential for JavaScript
            </h3>

            <p className="text-slate-600">
              Arrays are one of the most commonly used data structures in
              JavaScript and are used in almost every application.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              💼 Interview Favorite
            </h3>

            <p className="text-slate-600">
              Companies frequently ask array-related questions in coding rounds
              and technical interviews.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              ⚡ Improve Problem Solving
            </h3>

            <p className="text-slate-600">
              Understanding arrays helps you solve real-world programming
              problems efficiently.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              📚 Foundation for DSA
            </h3>

            <p className="text-slate-600">
              Arrays are the building block for learning advanced data
              structures and algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Most Important Methods</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "map()",
            "filter()",
            "reduce()",
            "find()",
            "splice()",
            "sort()",
            "slice()",
            "flat()",
          ].map((method) => (
            <div
              key={method}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-5 rounded-xl text-center font-semibold shadow-md"
            >
              {method}
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white rounded-2xl p-8 shadow-md">
        <h2 className="text-3xl font-bold mb-6">Learning Roadmap</h2>

        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div>📘 Introduction to Arrays</div>
          <div>📘 Array Creation Methods</div>
          <div>📘 Add & Remove Methods</div>
          <div>📘 Access Methods</div>
          <div>📘 Iteration Methods</div>
          <div>📘 Higher Order Methods</div>
          <div>📘 Conversion & Sorting</div>
          <div>📘 Validation & Utility</div>
          <div>📘 Advanced Array Methods</div>
          <div>📘 Comparison Tables</div>
          <div>📘 Interview Questions</div>
          <div>📘 Cheat Sheet</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
