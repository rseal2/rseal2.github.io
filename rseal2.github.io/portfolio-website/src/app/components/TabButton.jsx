import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white text-lg border-b border-[#235347]"
    : "text-[#ADB7BE] text-lg border-b border-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-5 font-bold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;