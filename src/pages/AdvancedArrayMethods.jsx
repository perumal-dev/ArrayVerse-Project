import MethodDocumentation from "../components/MethodDocumentation";

const AdvancedArrayMethods = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">Advanced Array Methods</h1>

      <MethodDocumentation
        title="splice()"
        definition="Adds, removes, or replaces elements in an array."
        syntax={`array.splice(startIndex, deleteCount, item1, item2)`}
        returnValue="Returns an array containing removed elements."
        modifiesArray={true}
        example={`const fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits);`}
        output='["Apple", "Orange"]'
        interviewTip="splice() modifies the original array, while slice() does not."
      />

      <MethodDocumentation
        title="concat()"
        definition="Combines two or more arrays into a new array."
        syntax={`array1.concat(array2)`}
        returnValue="Returns a new merged array."
        modifiesArray={false}
        example={`const arr1 = [1, 2];
const arr2 = [3, 4];

const result = arr1.concat(arr2);

console.log(result);`}
        output="[1, 2, 3, 4]"
        interviewTip="concat() never modifies the original arrays."
      />

      <MethodDocumentation
        title="fill()"
        definition="Fills all elements with a specified value."
        syntax={`array.fill(value)`}
        returnValue="Returns the modified array."
        modifiesArray={true}
        example={`const numbers = [1, 2, 3, 4];

numbers.fill(0);

console.log(numbers);`}
        output="[0, 0, 0, 0]"
        interviewTip="fill() mutates the original array."
      />

      <MethodDocumentation
        title="flat()"
        definition="Flattens nested arrays into a single array."
        syntax={`array.flat(depth)`}
        returnValue="Returns a new flattened array."
        modifiesArray={false}
        example={`const nested = [1, [2, 3], [4, 5]];

const result = nested.flat();

console.log(result);`}
        output="[1, 2, 3, 4, 5]"
        interviewTip="Use flat(Infinity) to completely flatten deeply nested arrays."
      />

      <MethodDocumentation
        title="copyWithin()"
        definition="Copies array elements to another position within the same array."
        syntax={`array.copyWithin(target, start)`}
        returnValue="Returns the modified array."
        modifiesArray={true}
        example={`const numbers = [1, 2, 3, 4, 5];

numbers.copyWithin(0, 3);

console.log(numbers);`}
        output="[4, 5, 3, 4, 5]"
        interviewTip="copyWithin() modifies the original array."
      />

      <MethodDocumentation
        title="entries()"
        definition="Returns an iterator containing index-value pairs."
        syntax={`array.entries()`}
        returnValue="Returns an iterator object."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana"];

for (const [index, value] of fruits.entries()) {
  console.log(index, value);
}`}
        output={`0 Apple
1 Banana`}
        interviewTip="Useful when you need both index and value."
      />

      <MethodDocumentation
        title="keys()"
        definition="Returns an iterator containing array indexes."
        syntax={`array.keys()`}
        returnValue="Returns an iterator object."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana"];

for (const key of fruits.keys()) {
  console.log(key);
}`}
        output={`0
1`}
        interviewTip="keys() returns only indexes."
      />

      <MethodDocumentation
        title="values()"
        definition="Returns an iterator containing array values."
        syntax={`array.values()`}
        returnValue="Returns an iterator object."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana"];

for (const value of fruits.values()) {
  console.log(value);
}`}
        output={`Apple
Banana`}
        interviewTip="Similar to using for...of."
      />
    </div>
  );
};

export default AdvancedArrayMethods;
