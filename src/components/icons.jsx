import React from "react";

const Icons = ({ icon, color, click }) => {
  return (
    <button
      className={`bg-${color}-100 p-4 active:scale-90 active:rounded-md duration:100 cursor-pointer`}
      onClick={click}
    >
      <span className={`text-${color}-500`}>{icon}</span>
    </button>
  );
};

export default Icons;
