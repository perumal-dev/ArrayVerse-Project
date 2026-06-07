import MethodDocumentation from "../components/MethodDocumentation";

const ArrayCreation = () => {
  return (
    <div className="fade-in">
      <h1 className="text-5xl font-bold mb-10">
        Array Creation Methods
      </h1>

      <MethodDocumentation
        title="Array Literal"
        definition="The easiest and most commonly used way to create an array."
        syntax={`const fruits = ["Apple", "Banana"];`}
        returnValue="Returns a new array."
        modifiesArray={false}
        example={`const fruits = ["Apple", "Banana"];

console.log(fruits);`}
        output='["Apple", "Banana"]'
        interviewTip="Array Literal is the most preferred method because it is simple and readable."
      />

      <MethodDocumentation
        title="Array Constructor"
        definition="Creates an array using the Array constructor."
        syntax={`const arr = new Array(1, 2, 3);`}
        returnValue="Returns a new array."
        modifiesArray={false}
        example={`const arr = new Array(1, 2, 3);

console.log(arr);`}
        output="[1, 2, 3]"
        interviewTip="Be careful: new Array(5) creates an empty array with length 5."
      />

      <MethodDocumentation
        title="Array.of()"
        definition="Creates a new array from provided arguments."
        syntax={`Array.of(1, 2, 3)`}
        returnValue="Returns a new array."
        modifiesArray={false}
        example={`const numbers = Array.of(1, 2, 3);

console.log(numbers);`}
        output="[1, 2, 3]"
        interviewTip="Array.of() avoids the confusion of new Array(5)."
      />

      <MethodDocumentation
        title="Array.from()"
        definition="Creates an array from iterable or array-like objects."
        syntax={`Array.from("HELLO")`}
        returnValue="Returns a new array."
        modifiesArray={false}
        example={`const letters = Array.from("HELLO");

console.log(letters);`}
        output='["H", "E", "L", "L", "O"]'
        interviewTip="Array.from() is commonly used to convert strings, NodeLists, and Sets into arrays."
      />
    </div>
  );
};

export default ArrayCreation;