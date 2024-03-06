import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  outline: {
    blue_gray_900_02: "border-blue_gray-900_02 border border-solid text-gray-900_01",
    blue_gray_900_30: "border-blue_gray-900_30 border-[5px] border-solid text-white-A700_01",
  },
  fill: {
    white_A700_01: "bg-white-A700_01 text-gray-500_02",
    gray_200_01: "bg-gray-200_01 text-gray-400_02",
  },
};
const sizes = {
  xs: "h-[31px] pl-2.5 pr-[29px] text-[11px]",
  lg: "h-[43px] pl-4 pr-[35px] text-base",
  sm: "h-[35px] pl-3 pr-[35px] text-sm",
  md: "h-[39px] pl-3 pr-[35px] text-sm",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "round",
      size = "md",
      variant = "fill",
      color = "white_A700_01",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#ffffff",
              color: state.isSelected && "#959592",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#959592",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "lg", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_900_02", "blue_gray_900_30", "white_A700_01", "gray_200_01"]),
};

export { SelectBox };
