import MethodDocumentation from "../components/MethodDocumentation";
import CodeBlock from "../components/CodeBlock";

const ValidationMethods = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">Validation & Utility Methods</h1>

      <MethodDocumentation
        title="Array.isArray()"
        definition="Checks whether a value is an array."
        syntax={`Array.isArray(value)`}
        returnValue="Returns true or false."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana"];

console.log(Array.isArray(fruits));
console.log(Array.isArray("Hello"));`}
        output={`true
false`}
        interviewTip="typeof [] returns 'object'. Use Array.isArray() to properly check arrays."
      />

      <MethodDocumentation
        title="slice()"
        definition="Returns a portion of an array without modifying the original array."
        syntax={`array.slice(start, end)`}
        returnValue="Returns a new array."
        modifiesArray={false}
        example={`const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);`}
        output={`[20, 30, 40]`}
        interviewTip="slice() does not modify the original array."
      />

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">Spread Operator (...)</h2>

        <p className="text-slate-700 mb-4">
          The spread operator expands elements from an array. It is widely used
          in React for state updates.
        </p>

        <h3 className="text-xl font-semibold mb-2">Copy an Array</h3>

        <CodeBlock
          code={`const fruits = ["Apple", "Banana"];

const copy = [...fruits];

console.log(copy);`}
        />

        <h3 className="text-xl font-semibold mt-8 mb-2">Merge Arrays</h3>

        <CodeBlock
          code={`const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);`}
        />

        <h3 className="text-xl font-semibold mt-8 mb-2">Add New Elements</h3>

        <CodeBlock
          code={`const numbers = [1, 2, 3];

const updated = [...numbers, 4];

console.log(updated);`}
        />

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-8">
          <h4 className="font-bold text-blue-700">Interview Tip</h4>

          <p className="mt-2">
            The spread operator is heavily used in React when updating state
            because it helps create new arrays without mutating the original
            array.
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">slice() vs splice()</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Feature</th>
                <th className="border p-3">slice()</th>
                <th className="border p-3">splice()</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Returns</td>
                <td className="border p-3">New Array</td>
                <td className="border p-3">Removed Elements</td>
              </tr>

              <tr>
                <td className="border p-3">Modifies Original Array</td>
                <td className="border p-3">No</td>
                <td className="border p-3">Yes</td>
              </tr>

              <tr>
                <td className="border p-3">Purpose</td>
                <td className="border p-3">Extract Elements</td>
                <td className="border p-3">Add/Remove Elements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ValidationMethods;
