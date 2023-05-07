import clsx from "clsx";
import { useState } from "react";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-solid-gray px-6 py-3 text-lg  w-1/2 bg-[#D9D9D9] primary_font",
        className
      )}
      {...props}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
