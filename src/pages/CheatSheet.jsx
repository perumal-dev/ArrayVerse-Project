const CheatSheet = () => {
  const methods = [
    {
      category: "Array Creation",
      items: [
        "const arr = [1, 2, 3]",
        "new Array(1, 2, 3)",
        "Array.of(1, 2, 3)",
        'Array.from("HELLO")',
      ],
    },

    {
      category: "Add & Remove",
      items: [
        "array.push(value)",
        "array.pop()",
        "array.shift()",
        "array.unshift(value)",
      ],
    },

    {
      category: "Access & Search",
      items: [
        "array.at(index)",
        "array.indexOf(value)",
        "array.lastIndexOf(value)",
        "array.includes(value)",
      ],
    },

    {
      category: "Conversion",
      items: ["array.join('-')", "array.toString()"],
    },

    {
      category: "Sorting",
      items: ["array.sort()", "array.sort((a, b) => a - b)", "array.reverse()"],
    },

    {
      category: "Iteration",
      items: [
        "for (...) {}",
        "for (const item of array) {}",
        "for (const index in array) {}",
        "array.forEach((item) => {})",
      ],
    },

    {
      category: "Higher Order",
      items: [
        "array.map((item) => {})",
        "array.filter((item) => {})",
        "array.reduce((acc, curr) => {}, initialValue)",
        "array.find((item) => {})",
        "array.findIndex((item) => {})",
        "array.flatMap((item) => {})",
        "array.every((item) => {})",
        "array.some((item) => {})",
      ],
    },

    {
      category: "Validation & Utility",
      items: [
        "Array.isArray(value)",
        "array.slice(start, end)",
        "const copy = [...array]",
        "const merged = [...arr1, ...arr2]",
      ],
    },
  ];

  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">Array Cheat Sheet</h1>

      <p className="text-lg text-slate-600 mb-10">
        Quick revision guide for JavaScript Arrays.
      </p>

      <div className="space-y-8">
        {methods.map((section) => (
          <div
            key={section.category}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              {section.category}
            </h2>

            <div className="bg-slate-900 text-green-400 rounded-xl p-5 overflow-x-auto">
              {section.items.map((item) => (
                <p key={item} className="mb-2 font-mono">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="bg-green-50 border border-green-200 p-8 rounded-2xl mt-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Quick Interview Revision
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>map() returns a new array.</li>
          <li>forEach() returns undefined.</li>
          <li>filter() returns matching elements.</li>
          <li>find() returns first matching element.</li>
          <li>reduce() returns a single value.</li>
          <li>push() returns new length.</li>
          <li>pop() returns removed element.</li>
          <li>slice() does not modify the original array.</li>
          <li>sort() modifies the original array.</li>
          <li>Array.isArray() checks whether a value is an array.</li>
        </ul>
      </section>
    </div>
  );
};

export default CheatSheet;
