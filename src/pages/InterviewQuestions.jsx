const ComparisonTables = () => {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-5xl font-bold">Array Method Comparison Tables</h1>

      {/* Push vs Unshift */}

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">push() vs unshift()</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Feature</th>
                <th className="border p-3">push()</th>
                <th className="border p-3">unshift()</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Purpose</td>
                <td className="border p-3">Add element at end</td>
                <td className="border p-3">Add element at start</td>
              </tr>

              <tr>
                <td className="border p-3">Returns</td>
                <td className="border p-3">New Length</td>
                <td className="border p-3">New Length</td>
              </tr>

              <tr>
                <td className="border p-3">Modifies Array</td>
                <td className="border p-3">Yes</td>
                <td className="border p-3">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pop vs Shift */}

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">pop() vs shift()</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Feature</th>
                <th className="border p-3">pop()</th>
                <th className="border p-3">shift()</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Purpose</td>
                <td className="border p-3">Remove from end</td>
                <td className="border p-3">Remove from beginning</td>
              </tr>

              <tr>
                <td className="border p-3">Returns</td>
                <td className="border p-3">Removed Element</td>
                <td className="border p-3">Removed Element</td>
              </tr>

              <tr>
                <td className="border p-3">Modifies Array</td>
                <td className="border p-3">Yes</td>
                <td className="border p-3">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Map vs forEach */}

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">map() vs forEach()</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Feature</th>
                <th className="border p-3">map()</th>
                <th className="border p-3">forEach()</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Returns</td>
                <td className="border p-3">New Array</td>
                <td className="border p-3">Undefined</td>
              </tr>

              <tr>
                <td className="border p-3">Purpose</td>
                <td className="border p-3">Transform Data</td>
                <td className="border p-3">Execute Actions</td>
              </tr>

              <tr>
                <td className="border p-3">Chainable</td>
                <td className="border p-3">Yes</td>
                <td className="border p-3">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Every vs Some */}

      <section className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">every() vs some()</h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-3">Feature</th>
                <th className="border p-3">every()</th>
                <th className="border p-3">some()</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Condition</td>
                <td className="border p-3">All Elements</td>
                <td className="border p-3">At Least One</td>
              </tr>

              <tr>
                <td className="border p-3">Returns</td>
                <td className="border p-3">Boolean</td>
                <td className="border p-3">Boolean</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Slice vs Splice */}

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
                <td className="border p-3">Extract Data</td>
                <td className="border p-3">Add/Remove Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-blue-50 border border-blue-200 p-8 rounded-2xl mt-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Interview Tip</h2>

        <p className="text-slate-700">Focus especially on:</p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>map() vs forEach()</li>
          <li>slice() vs splice()</li>
          <li>every() vs some()</li>
          <li>find() vs filter()</li>
          <li>push() return value</li>
          <li>reduce() use cases</li>
        </ul>
      </section>
    </div>
  );
};

export default ComparisonTables;
