import React from "react";

const sizes = {
  "5xl": "text-lg font-normal leading-[23px]",
  "6xl": "text-xl font-normal leading-[25px]",
  "7xl": "text-[22px] font-normal leading-7",
  "8xl": "text-2xl font-normal leading-[30px]",
  "2xl": "text-xs font-normal leading-[15px]",
  "3xl": "text-sm font-normal leading-[18px]",
  "4xl": "text-base font-normal leading-5",
  xs: "text-[5px] font-normal leading-[7px]",
  lg: "text-[9px] font-normal leading-3",
  s: "text-[6px] font-normal leading-[8px]",
  xl: "text-[11px] font-normal leading-[14px]",
  "14xl": "text-4xl font-normal leading-[50px]",
  "15xl": "text-[38px] font-normal leading-[48px]",
  "17xl": "text-[56px] font-normal leading-[78px]",
  "16xl": "text-[40px] font-normal leading-[50px]",
  "9xl": "text-[26px] font-normal leading-[33px]",
  "10xl": "text-[27px] font-normal leading-[34px]",
  md: "text-[8px] font-normal leading-[10px]",
  "11xl": "text-[28px] font-normal leading-[35px]",
  "12xl": "text-[32px] font-normal leading-10",
  "13xl": "text-[34px] font-normal leading-[43px]",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_01 font-kronaone ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
