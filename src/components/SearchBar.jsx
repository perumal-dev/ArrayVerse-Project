import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const methods = {
    push: "/add-remove",
    pop: "/add-remove",
    shift: "/add-remove",
    unshift: "/add-remove",

    at: "/access-methods",
    indexof: "/access-methods",
    lastindexof: "/access-methods",
    includes: "/access-methods",

    map: "/higher-order",
    filter: "/higher-order",
    reduce: "/higher-order",
    find: "/higher-order",
    findindex: "/higher-order",

    foreach: "/iteration-methods",

    join: "/conversion-methods",
    sort: "/conversion-methods",
    reverse: "/conversion-methods",

    slice: "/validation-methods",
    splice: "/advanced-methods",
    concat: "/advanced-methods",
    flat: "/advanced-methods",
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = search.toLowerCase().trim();

    if (methods[keyword]) {
      navigate(methods[keyword]);
      setSearch("");
      setError("");
    } else {
      setError(`No method found for "${search}"`);
    }
  };
  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search methods..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setError("");
        }}
        className="border border-gray-300 px-4 py-2 rounded-lg w-64"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
};

export default SearchBar;
