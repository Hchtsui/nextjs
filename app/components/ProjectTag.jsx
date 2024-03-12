import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-green-400 text-white"
    : " text-[#ADB7BE] hover:border-white border-slate-600";

  return (
    <button
      className={`${buttonStyles}rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
