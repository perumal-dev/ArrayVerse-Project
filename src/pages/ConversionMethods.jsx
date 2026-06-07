import MethodDocumentation from "../components/MethodDocumentation";

const ConversionMethods = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">
        Conversion & Sorting Methods
      </h1>

      <MethodDocumentation
        title="join()"
        definition="Combines all array elements into a string."
        syntax={`array.join(separator)`}
        returnValue="Returns a string."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.join("-"));`}
        output={`Apple-Banana-Orange`}
        interviewTip="join() is commonly used when generating CSV data or formatted strings."
      />

      <MethodDocumentation
        title="toString()"
        definition="Converts an array into a comma-separated string."
        syntax={`array.toString()`}
        returnValue="Returns a string."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.toString());`}
        output={`Apple,Banana,Orange`}
        interviewTip="toString() automatically uses commas between elements."
      />

      <MethodDocumentation
        title="sort()"
        definition="Sorts array elements."
        syntax={`array.sort()`}
        returnValue="Returns the sorted array."
        modifiesArray={true}
        example={`const numbers = [30, 5, 100, 25];

numbers.sort();

console.log(numbers);`}
        output={`[100, 25, 30, 5]`}
        interviewTip="sort() converts values to strings by default. Use a compare function for numeric sorting."
      />

      <MethodDocumentation
        title="sort() - Numeric Sorting"
        definition="Sorts numbers correctly using a compare function."
        syntax={`array.sort((a, b) => a - b)`}
        returnValue="Returns sorted array."
        modifiesArray={true}
        example={`const numbers = [30, 5, 100, 25];

numbers.sort((a, b) => a - b);

console.log(numbers);`}
        output={`[5, 25, 30, 100]`}
        interviewTip="This is one of the most asked JavaScript interview questions."
      />

      <MethodDocumentation
        title="reverse()"
        definition="Reverses the order of array elements."
        syntax={`array.reverse()`}
        returnValue="Returns the reversed array."
        modifiesArray={true}
        example={`const fruits = ["Apple", "Banana", "Orange"];

fruits.reverse();

console.log(fruits);`}
        output={`["Orange", "Banana", "Apple"]`}
        interviewTip="reverse() modifies the original array."
      />

      <section className="bg-red-50 border border-red-200 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-red-600">
          Common Mistake
        </h2>

        <p className="text-slate-700">
          Many developers expect sort() to sort numbers correctly.
          However, JavaScript converts values to strings before sorting.
        </p>

        <div className="mt-4 bg-white p-4 rounded-lg">
          <strong>Wrong:</strong>

          <pre className="mt-2">
{`[30, 5, 100, 25].sort()

Result:
[100, 25, 30, 5]`}
          </pre>
        </div>

        <div className="mt-4 bg-white p-4 rounded-lg">
          <strong>Correct:</strong>

          <pre className="mt-2">
{`[30, 5, 100, 25].sort(
  (a, b) => a - b
)

Result:
[5, 25, 30, 100]`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default ConversionMethods;