import React from "react";

const Tag = ({ tagTitle, handleTagSelect, selected }) => {
  return (
    <>
      <button
        type="button"
        className={`border-2 border-blue-400 px-2 py-1 rounded ${
          selected ? "bg-red-500" : "bg-slate-50"
        } ${selected ? "text-white" : "text-black"}`}
        onClick={() => handleTagSelect(tagTitle)}
      >
        {tagTitle}
      </button>
    </>
  );
};

export default Tag;
