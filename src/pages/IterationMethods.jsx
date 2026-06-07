import MethodDocumentation from "../components/MethodDocumentation";

const IterationMethods = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">
        Iteration Methods
      </h1>

      <MethodDocumentation
        title="for Loop"
        definition="The traditional way of iterating through an array using indexes."
        syntax={`for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}`}
        returnValue="Does not return anything automatically."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
        output={`Apple
Banana
Orange`}
        interviewTip="for loop gives full control over index, start point, and end point."
      />

      <MethodDocumentation
        title="for...of"
        definition="Iterates directly over array values."
        syntax={`for(const item of array) {
  console.log(item);
}`}
        returnValue="Does not return anything automatically."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

for(const fruit of fruits) {
  console.log(fruit);
}`}
        output={`Apple
Banana
Orange`}
        interviewTip="for...of is the preferred way when you only need values."
      />

      <MethodDocumentation
        title="for...in"
        definition="Iterates over array indexes."
        syntax={`for(const index in array) {
  console.log(index);
}`}
        returnValue="Does not return anything automatically."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

for(const index in fruits) {
  console.log(index);
}`}
        output={`0
1
2`}
        interviewTip="Avoid using for...in for arrays. It is mainly intended for objects."
      />

      <MethodDocumentation
        title="forEach()"
        definition="Executes a callback function once for every array element."
        syntax={`array.forEach((item) => {
  console.log(item);
});`}
        returnValue="Returns undefined."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});`}
        output={`Apple
Banana
Orange`}
        interviewTip="forEach() cannot use break or continue statements."
      />

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">
          Iteration Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Method</th>
                <th className="border p-3">Returns</th>
                <th className="border p-3">Works With</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">for</td>
                <td className="border p-3">Nothing</td>
                <td className="border p-3">Indexes & Values</td>
              </tr>

              <tr>
                <td className="border p-3">for...of</td>
                <td className="border p-3">Nothing</td>
                <td className="border p-3">Values</td>
              </tr>

              <tr>
                <td className="border p-3">for...in</td>
                <td className="border p-3">Nothing</td>
                <td className="border p-3">Indexes</td>
              </tr>

              <tr>
                <td className="border p-3">forEach()</td>
                <td className="border p-3">undefined</td>
                <td className="border p-3">Values</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Interview Question
        </h2>

        <p className="text-slate-700">
          What is the difference between forEach() and map()?
        </p>

        <div className="mt-4 bg-white p-4 rounded-lg">
          <strong>Answer:</strong>
          <p className="mt-2">
            forEach() returns undefined and is mainly used for
            performing actions. map() returns a brand-new array
            and is used for data transformation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IterationMethods;