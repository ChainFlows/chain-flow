import React from "react";
import { Text } from "./..";

export default function Header2({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mt-1.5 mx-auto max-w-[1316px]">
        <Text size="6xl" as="p">
          Order Details
        </Text>
        <div className="flex flex-row justify-start items-center gap-2">
          <a
            href="#"
            className="flex justify-center items-center w-[126px] h-[40px] px-[7px] py-[13px] border-gray-600_06 border border-solid bg-white-A700_01 text-shadow-ts rounded-md"
          >
            <Text as="p" className="!text-gray-500_02 text-center">
              Create Account
            </Text>
          </a>
          <a
            href="#"
            className="flex justify-center items-center w-[118px] h-[46px] px-[34px] py-[15px] bg-blue_gray-900_02 text-shadow-ts rounded-[23px]"
          >
            <Text size="2xl" as="p" className="!text-white-A700_01 text-center">
              Log In
            </Text>
          </a>
        </div>
      </div>
    </header>
  );
}
