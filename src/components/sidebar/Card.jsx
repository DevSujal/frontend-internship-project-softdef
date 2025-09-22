import React from "react";

const Card = ({ title, render }) => {
  return (
    <div className="bg-[#F6F7F8] p-5 w-full flex flex-col gap-6 rounded-sm z-100">
      <h1>{title}</h1>
      {render()}
    </div>
  );
};

export default Card;
