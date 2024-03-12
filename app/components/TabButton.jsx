import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  // Destructure the props here
  const buttonClass = active
    ? "mr-3 text-white border-b border-white"
    : " text-[#ADB7BE] ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
