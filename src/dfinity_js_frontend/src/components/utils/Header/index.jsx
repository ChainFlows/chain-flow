import React from "react";
import { Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-center w-full mx-auto max-w-[1371px]">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-start items-start gap-3">
            <Img src="images/img_image_493.svg" alt="image496_one" className="h-[33px]" />
            <Text size="6xl" as="p" className="mt-[3px]">
              ChainFlow
            </Text>
          </div>
          <Img src="images/img_help_2.svg" alt="helpthree_one" className="h-[24px] w-[24px] mt-1" />
        </div>
      </div>
    </header>
  );
}
