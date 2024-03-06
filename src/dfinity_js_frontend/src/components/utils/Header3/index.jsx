import React from "react";
import { Text } from "./..";

export default function Header3({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mb-[3px] mx-auto max-w-[1379px]">
        <Text size="5xl" as="p">
          Product Details
        </Text>
        <div className="flex flex-row justify-start gap-[7px]">
          <a
            href="#"
            className="flex justify-center items-center w-[120px] h-[43px] pt-4 pb-[11px] px-[29px] border-gray-600_08 border border-solid bg-white-A700_01 text-shadow-ts rounded-[12px]"
          >
            <Text size="2xl" as="p" className="!text-gray-500_02 text-center">
              Sign Up
            </Text>
          </a>
          <a
            href="#"
            className="flex justify-center items-center w-[114px] h-[43px] pt-[17px] pb-2.5 px-[33px] border-gray-600_06 border border-solid bg-white-A700_01 text-shadow-ts rounded-[12px]"
          >
            <Text size="2xl" as="p" className="!text-gray-500_02 text-center">
              Log In
            </Text>
          </a>
        </div>
      </div>
    </header>
  );
}
