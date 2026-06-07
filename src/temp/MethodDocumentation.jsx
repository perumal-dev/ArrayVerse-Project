import CodeBlock from "./CodeBlock";

const MethodDocumentation = ({
  title,
  definition,
  syntax,
  returnValue,
  modifiesArray,
  example,
  output,
  interviewTip,
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md mb-8 hover:shadow-xl transition-all duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">{title}</h2>

      <div className="space-y-5">
        <div>
          <h3 className="font-semibold text-lg">Definition</h3>
          <p className="text-slate-700">{definition}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Syntax</h3>
          <CodeBlock code={syntax} />
        </div>

        <div>
          <h3 className="font-semibold text-lg">Return Value</h3>
          <p className="text-slate-700">{returnValue}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Modifies Original Array?</h3>

          <span
            className={`inline-block px-4 py-2 rounded-lg font-medium ${
              modifiesArray
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {modifiesArray ? "Yes" : "No"}
          </span>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Example</h3>
          <CodeBlock code={example} />
        </div>

        <div>
          <h3 className="font-semibold text-lg">Output</h3>

          <div className="bg-slate-100 p-4 rounded-lg">{output}</div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-700">Interview Tip</h3>

          <p className="mt-2 text-slate-700">{interviewTip}</p>
        </div>
      </div>
      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Method</th>
                <th className="border p-3">Action</th>
                <th className="border p-3">Returns</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">push()</td>
                <td className="border p-3">Add at End</td>
                <td className="border p-3">New Length</td>
              </tr>

              <tr>
                <td className="border p-3">pop()</td>
                <td className="border p-3">Remove from End</td>
                <td className="border p-3">Removed Element</td>
              </tr>

              <tr>
                <td className="border p-3">shift()</td>
                <td className="border p-3">Remove from Start</td>
                <td className="border p-3">Removed Element</td>
              </tr>

              <tr>
                <td className="border p-3">unshift()</td>
                <td className="border p-3">Add at Start</td>
                <td className="border p-3">New Length</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MethodDocumentation;
