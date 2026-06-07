import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 border border-gray-600 bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-xs hover:bg-gray-800"
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>

      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
