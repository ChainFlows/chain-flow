import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[11px]",
};
const variants = {
  outline: {
    blue_gray_900_30: "border-blue_gray-900_30 border-[5px] border-solid text-white-A700_01",
  },
  fill: {
    lime_50: "bg-lime-50 text-lime-900",
    white_A700_01: "bg-white-A700_01 shadow-xs text-gray-500_02",
    lime_500: "bg-lime-500 text-light_green-900",
    blue_gray_900_05: "bg-blue_gray-900_05 shadow-xs text-gray-700_02",
    gray_700_01: "bg-gray-700_01 shadow-xs text-gray-900_01",
    blue_gray_900_0c: "bg-blue_gray-900_0c shadow-xs text-gray-900_01",
    blue_gray_900_02: "bg-blue_gray-900_02 shadow-xs text-white-A700_01",
    gray_700: "bg-gray-700 shadow-xs text-gray-900_01",
    gray_200_02: "bg-gray-200_02 shadow-xs text-gray-900_01",
    lime_100: "bg-lime-100 text-lime-900",
    lime_100_01: "bg-lime-100_01 text-lime-900",
    blue_gray_900_01: "bg-blue_gray-900_01 shadow-xs text-white-A700_01",
    gray_100_02: "bg-gray-100_02 text-gray-900_01",
    lime_700: "bg-lime-700 text-gray-900",
    amber_300: "bg-amber-300 shadow-xs text-gray-900_01",
    gray_200: "bg-gray-200 shadow-xs text-blue_gray-900_03",
  },
};
const sizes = {
  "20xl": "h-[101px] px-[35px] text-sm",
  "19xl": "h-[69px] px-[35px] text-sm",
  "7xl": "h-[40px] px-[9px] text-lg",
  "13xl": "h-[52px] px-[35px] text-lg",
  "11xl": "h-[48px] pl-[19px] pr-3.5 text-base",
  "15xl": "h-[54px] px-[35px] text-[11px]",
  "4xl": "h-[38px]",
  "2xl": "h-[34px]",
  "16xl": "h-[57px] px-[35px] text-sm",
  sm: "h-[28px] px-2",
  "10xl": "h-[45px] pl-[18px] pr-[35px] text-[11px]",
  "12xl": "h-[49px] px-[35px] text-xs",
  lg: "h-[31px] px-[15px] text-[11px]",
  "18xl": "h-[64px] px-8 text-lg",
  "14xl": "h-[52px] px-3 text-sm",
  xs: "h-[23px] px-2.5 text-[9px]",
  xl: "h-[34px] px-[18px] text-[11px]",
  "6xl": "h-[39px] px-[31px] text-[11px]",
  "17xl": "h-[63px] px-[35px] text-sm",
  "9xl": "h-[44px] px-4 text-base",
  "3xl": "h-[37px] px-[19px] text-lg",
  "8xl": "h-[41px] px-[11px] text-sm",
  md: "h-[28px] px-[7px] text-xs",
  "5xl": "h-[38px] pl-4 pr-2.5 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "5xl",
  color = "white_A700_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf([
    "20xl",
    "19xl",
    "7xl",
    "13xl",
    "11xl",
    "15xl",
    "4xl",
    "2xl",
    "16xl",
    "sm",
    "10xl",
    "12xl",
    "lg",
    "18xl",
    "14xl",
    "xs",
    "xl",
    "6xl",
    "17xl",
    "9xl",
    "3xl",
    "8xl",
    "md",
    "5xl",
  ]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_900_30",
    "lime_50",
    "white_A700_01",
    "lime_500",
    "blue_gray_900_05",
    "gray_700_01",
    "blue_gray_900_0c",
    "blue_gray_900_02",
    "gray_700",
    "gray_200_02",
    "lime_100",
    "lime_100_01",
    "blue_gray_900_01",
    "gray_100_02",
    "lime_700",
    "amber_300",
    "gray_200",
  ]),
};

export { Button };
