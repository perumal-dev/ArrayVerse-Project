import MethodDocumentation from "../components/MethodDocumentation";

const AccessMethods = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">
        Access & Search Methods
      </h1>

      <MethodDocumentation
        title="at()"
        definition="Returns the element at a specific index. Supports negative indexing."
        syntax={`array.at(index)`}
        returnValue="Returns the element at the specified index."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.at(1));
console.log(fruits.at(-1));`}
        output={`Banana
Orange`}
        interviewTip="at(-1) is a modern way to access the last element of an array."
      />

      <MethodDocumentation
        title="indexOf()"
        definition="Returns the first index of the specified element."
        syntax={`array.indexOf(element)`}
        returnValue="Returns index if found, otherwise -1."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Mango"));`}
        output={`1
-1`}
        interviewTip="indexOf() returns -1 when the value is not found."
      />

      <MethodDocumentation
        title="lastIndexOf()"
        definition="Returns the last occurrence index of an element."
        syntax={`array.lastIndexOf(element)`}
        returnValue="Returns last matching index or -1."
        modifiesArray={false}
        example={`const numbers = [10, 20, 30, 20, 40];

console.log(numbers.lastIndexOf(20));`}
        output={`3`}
        interviewTip="Useful when duplicate values exist inside an array."
      />

      <MethodDocumentation
        title="includes()"
        definition="Checks whether an element exists inside an array."
        syntax={`array.includes(element)`}
        returnValue="Returns true or false."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));
console.log(fruits.includes("Mango"));`}
        output={`true
false`}
        interviewTip="includes() is often preferred over indexOf() when you only need a boolean result."
      />

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">
          Quick Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Method</th>
                <th className="border p-3">Purpose</th>
                <th className="border p-3">Returns</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">at()</td>
                <td className="border p-3">
                  Access by Index
                </td>
                <td className="border p-3">
                  Element Value
                </td>
              </tr>

              <tr>
                <td className="border p-3">indexOf()</td>
                <td className="border p-3">
                  Find First Index
                </td>
                <td className="border p-3">
                  Index / -1
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  lastIndexOf()
                </td>
                <td className="border p-3">
                  Find Last Index
                </td>
                <td className="border p-3">
                  Index / -1
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  includes()
                </td>
                <td className="border p-3">
                  Search Value
                </td>
                <td className="border p-3">
                  Boolean
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AccessMethods;