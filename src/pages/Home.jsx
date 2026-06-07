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
      description:
        "Master push(), pop(), shift(), and unshift().",
    },
    {
      title: "Access Methods",
      description:
        "Understand at(), indexOf(), includes(), and more.",
    },
    {
      title: "Iteration",
      description:
        "Explore for loops, for...of, for...in, and forEach().",
    },
    {
      title: "Higher Order",
      description:
        "Learn map(), filter(), reduce(), find(), and more.",
    },
    {
      title: "Interview Prep",
      description:
        "Frequently asked JavaScript Array interview questions.",
    },
  ];

  return (
    <div className="space-y-12">
      <HeroSection />

      <section>
        <h2 className="text-3xl font-bold mb-6">
          Array Categories
        </h2>

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

      <section>
  <h2 className="text-3xl font-bold mb-6">
    Project Statistics
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <h3 className="text-4xl font-bold text-blue-600">
        25+
      </h3>
      <p className="mt-2 text-slate-600">
        Array Methods
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <h3 className="text-4xl font-bold text-blue-600">
        15+
      </h3>
      <p className="mt-2 text-slate-600">
        Topics Covered
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <h3 className="text-4xl font-bold text-blue-600">
        100%
      </h3>
      <p className="mt-2 text-slate-600">
        Interview Focused
      </p>
    </div>
  </div>
</section>


      <section className="bg-white rounded-2xl p-8 shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Learning Roadmap
        </h2>

        <ul className="space-y-3 text-lg">
          <li>📘 Introduction to Arrays</li>
          <li>📘 Array Creation Methods</li>
          <li>📘 Add & Remove Methods</li>
          <li>📘 Access Methods</li>
          <li>📘 Iteration Methods</li>
          <li>📘 Higher Order Methods</li>
          <li>📘 Comparison Tables</li>
          <li>📘 Interview Questions</li>
          <li>📘 Cheat Sheet</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;