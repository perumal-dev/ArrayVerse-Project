import CodeBlock from "../components/CodeBlock";

const Introduction = () => {
  const basicArrayCode = `const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);`;

  const indexingCode = `const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);`;

  return (
    <div className="space-y-10 fade-in">
      <div>
        <h1 className="text-5xl font-bold text-slate-800">
          Introduction to Arrays
        </h1>

        <p className="text-slate-600 mt-3 text-lg">
          Arrays are one of the most important data structures
          in JavaScript. They allow us to store multiple values
          inside a single variable.
        </p>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          What is an Array?
        </h2>

        <p className="text-slate-700 leading-relaxed">
          An array is a special JavaScript object used to store
          multiple values in a single variable. Instead of creating
          separate variables for each value, arrays help us organize
          related data efficiently.
        </p>

        <CodeBlock code={basicArrayCode} />
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Why Arrays are Used
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Store multiple values in one variable.</li>
          <li>Reduce code duplication.</li>
          <li>Easy data management.</li>
          <li>Useful for loops and data processing.</li>
          <li>Widely used in web applications.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Advantages of Arrays
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-xl">
            ✅ Easy data storage
          </div>

          <div className="bg-green-50 p-5 rounded-xl">
            ✅ Fast access using indexes
          </div>

          <div className="bg-green-50 p-5 rounded-xl">
            ✅ Supports many built-in methods
          </div>

          <div className="bg-green-50 p-5 rounded-xl">
            ✅ Easy iteration using loops
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Limitations of Arrays
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-5 rounded-xl">
            ❌ Mixed data can reduce readability
          </div>

          <div className="bg-red-50 p-5 rounded-xl">
            ❌ Large arrays can affect performance
          </div>

          <div className="bg-red-50 p-5 rounded-xl">
            ❌ Index management may become difficult
          </div>

          <div className="bg-red-50 p-5 rounded-xl">
            ❌ Nested arrays can become complex
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Array Indexing
        </h2>

        <p className="text-slate-700 mb-4">
          JavaScript arrays use Zero-Based Indexing.
          This means indexing starts from 0.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Index</th>
                <th className="border p-3">Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">0</td>
                <td className="border p-3">Apple</td>
              </tr>

              <tr>
                <td className="border p-3">1</td>
                <td className="border p-3">Banana</td>
              </tr>

              <tr>
                <td className="border p-3">2</td>
                <td className="border p-3">Orange</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock code={indexingCode} />
      </section>

      <section className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Interview Tip
        </h2>

        <p className="text-slate-700">
          One of the most commonly asked JavaScript interview
          questions is:
        </p>

        <div className="mt-4 bg-white p-4 rounded-lg">
          <strong>
            Why does array indexing start from 0 in JavaScript?
          </strong>
        </div>

        <p className="mt-4 text-slate-700">
          Arrays use memory offsets internally. Starting from 0
          makes calculations faster and more efficient.
        </p>
      </section>
    </div>
  );
};

export default Introduction;