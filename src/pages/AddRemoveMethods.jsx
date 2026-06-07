import MethodDocumentation from "../components/MethodDocumentation";

const AddRemoveMethods = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">
        Add & Remove Methods
      </h1>

      <MethodDocumentation
        title="push()"
        definition="Adds one or more elements to the end of an array."
        syntax={`array.push(element1, element2)`}
        returnValue="Returns the new length of the array."
        modifiesArray={true}
        example={`const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);`}
        output={`["Apple", "Banana", "Orange"]`}
        interviewTip="push() returns the new length of the array, not the updated array."
      />

      <MethodDocumentation
        title="pop()"
        definition="Removes the last element from an array."
        syntax={`array.pop()`}
        returnValue="Returns the removed element."
        modifiesArray={true}
        example={`const fruits = ["Apple", "Banana", "Orange"];

const removed = fruits.pop();

console.log(removed);
console.log(fruits);`}
        output={`Orange
["Apple", "Banana"]`}
        interviewTip="pop() both removes and returns the last element."
      />

      <MethodDocumentation
        title="shift()"
        definition="Removes the first element from an array."
        syntax={`array.shift()`}
        returnValue="Returns the removed element."
        modifiesArray={true}
        example={`const fruits = ["Apple", "Banana", "Orange"];

const removed = fruits.shift();

console.log(removed);
console.log(fruits);`}
        output={`Apple
["Banana", "Orange"]`}
        interviewTip="shift() is generally slower than pop() because indexes need to be rearranged."
      />

      <MethodDocumentation
        title="unshift()"
        definition="Adds one or more elements to the beginning of an array."
        syntax={`array.unshift(element1, element2)`}
        returnValue="Returns the new length of the array."
        modifiesArray={true}
        example={`const fruits = ["Banana", "Orange"];

fruits.unshift("Apple");

console.log(fruits);`}
        output={`["Apple", "Banana", "Orange"]`}
        interviewTip="unshift() returns the new array length, similar to push()."
      />
    </div>
  );
};

export default AddRemoveMethods;