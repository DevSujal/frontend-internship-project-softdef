import React, { useId } from "react";

const Input = ({ name, type, className, ...props }) => {
  const id = useId();
  return (
    <input
      type={type}
      id={id}
      className={`${className}`}
      name={name}
      {...props}
    />
  );
};

export default Input;
