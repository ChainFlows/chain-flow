import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    blue_gray_900_0c: "bg-blue_gray-900_0c shadow-xs text-gray-900_01",
    gray_700_01: "bg-gray-700_01 shadow-xs text-gray-900_01",
    lime_100_01: "bg-lime-100_01 text-lime-900",
    white_A700_01: "bg-white-A700_01 shadow-xs text-gray-400_02",
    gray_100_02: "bg-gray-100_02 text-gray-900_01",
    gray_200_01: "bg-gray-200_01 text-gray-400_02",
  },
  outline: {
    blue_gray_900_02: "border-blue_gray-900_02 border border-solid text-blue_gray-900_51",
  },
};
const sizes = {
  md: "h-[36px] pl-5 pr-[35px] text-lg",
  "4xl": "h-[55px] pl-3 pr-[35px] text-[11px]",
  "2xl": "h-[51px] pl-7 pr-[35px] text-[11px]",
  sm: "h-[35px] pl-[19px] pr-[35px] text-[11px]",
  "3xl": "h-[54px] pl-6 pr-3.5 text-sm",
  xl: "h-[45px] pl-3 pr-[35px] text-[11px]",
  "5xl": "h-[60px] pl-[11px] pr-[17px] text-sm",
  lg: "h-[40px] px-[23px] text-xs",
  xs: "h-[35px] pl-3 pr-[35px] text-sm",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "xs",
      color = "gray_200_01",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "4xl", "2xl", "sm", "3xl", "xl", "5xl", "lg", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_900_0c",
    "gray_700_01",
    "lime_100_01",
    "white_A700_01",
    "gray_100_02",
    "gray_200_01",
    "blue_gray_900_02",
  ]),
};

export { Input };
