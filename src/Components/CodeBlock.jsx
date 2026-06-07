const CodeBlock = ({ code }) => {
  return (
    <div className="bg-slate-900 text-green-400 rounded-xl p-5 mt-4 overflow-x-auto shadow-lg">
      <pre className="text-sm md:text-base">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;