import MethodDocumentation from "../components/MethodDocumentation";

const HigherOrderMethods = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">Higher Order Array Methods</h1>

      <MethodDocumentation
        title="map()"
        definition="Creates a new array by transforming every element."
        syntax={`array.map((item) => {})`}
        returnValue="Returns a brand-new array."
        modifiesArray={false}
        example={`const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);`}
        output={`[2, 4, 6]`}
        interviewTip="map() always returns a new array."
      />

      <MethodDocumentation
        title="filter()"
        definition="Creates a new array containing elements that satisfy a condition."
        syntax={`array.filter((item) => condition)`}
        returnValue="Returns a filtered array."
        modifiesArray={false}
        example={`const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(
  (num) => num % 2 === 0
);

console.log(evenNumbers);`}
        output={`[2, 4]`}
        interviewTip="filter() can return multiple elements."
      />

      <MethodDocumentation
        title="reduce()"
        definition="Reduces an array into a single value."
        syntax={`array.reduce((acc, curr) => {}, initialValue)`}
        returnValue="Returns a single value."
        modifiesArray={false}
        example={`const numbers = [10, 20, 30];

const total = numbers.reduce(
  (acc, curr) => acc + curr,
  0
);

console.log(total);`}
        output={`60`}
        interviewTip="reduce() is commonly used for sums, totals, grouping, and aggregations."
      />

      <MethodDocumentation
        title="find()"
        definition="Returns the first matching element."
        syntax={`array.find((item) => condition)`}
        returnValue="Returns first matching element or undefined."
        modifiesArray={false}
        example={`const users = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

const user = users.find(
  (item) => item.id === 2
);

console.log(user);`}
        output={`{ id: 2 }`}
        interviewTip="find() returns only the first match."
      />

      <MethodDocumentation
        title="findIndex()"
        definition="Returns index of first matching element."
        syntax={`array.findIndex((item) => condition)`}
        returnValue="Returns index or -1."
        modifiesArray={false}
        example={`const numbers = [10, 20, 30];

const index = numbers.findIndex(
  (num) => num === 20
);

console.log(index);`}
        output={`1`}
        interviewTip="findIndex() returns index, not the element."
      />

      <MethodDocumentation
        title="flatMap()"
        definition="Maps elements and flattens the result into a new array."
        syntax={`array.flatMap((item) => {})`}
        returnValue="Returns flattened array."
        modifiesArray={false}
        example={`const words = ["hello", "world"];

const result = words.flatMap(
  (word) => word.split("")
);

console.log(result);`}
        output={`["h","e","l","l","o","w","o","r","l","d"]`}
        interviewTip="flatMap() = map() + flat()"
      />

      <MethodDocumentation
        title="every()"
        definition="Checks if all elements satisfy a condition."
        syntax={`array.every((item) => condition)`}
        returnValue="Returns true or false."
        modifiesArray={false}
        example={`const numbers = [2, 4, 6];

const result = numbers.every(
  (num) => num % 2 === 0
);

console.log(result);`}
        output={`true`}
        interviewTip="every() stops as soon as one condition fails."
      />

      <MethodDocumentation
        title="some()"
        definition="Checks if at least one element satisfies a condition."
        syntax={`array.some((item) => condition)`}
        returnValue="Returns true or false."
        modifiesArray={false}
        example={`const numbers = [1, 3, 6];

const result = numbers.some(
  (num) => num % 2 === 0
);

console.log(result);`}
        output={`true`}
        interviewTip="some() stops as soon as one match is found."
      />

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">
          Higher Order Methods Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Method</th>
                <th className="border p-3">Returns</th>
                <th className="border p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">map()</td>
                <td className="border p-3">New Array</td>
                <td className="border p-3">Transform Data</td>
              </tr>

              <tr>
                <td className="border p-3">filter()</td>
                <td className="border p-3">New Array</td>
                <td className="border p-3">Filter Data</td>
              </tr>

              <tr>
                <td className="border p-3">reduce()</td>
                <td className="border p-3">Single Value</td>
                <td className="border p-3">Aggregation</td>
              </tr>

              <tr>
                <td className="border p-3">find()</td>
                <td className="border p-3">Element</td>
                <td className="border p-3">Search</td>
              </tr>

              <tr>
                <td className="border p-3">every()</td>
                <td className="border p-3">Boolean</td>
                <td className="border p-3">Validate All</td>
              </tr>

              <tr>
                <td className="border p-3">some()</td>
                <td className="border p-3">Boolean</td>
                <td className="border p-3">Validate Any</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default HigherOrderMethods;
