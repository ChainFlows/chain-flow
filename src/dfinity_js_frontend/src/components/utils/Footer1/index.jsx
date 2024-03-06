import React from "react";
import { Text } from "./..";

export default function Footer1({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full mb-[47px] mx-auto max-w-[1155px]">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between items-center w-full gap-[468px]">
            <Text size="11xl" as="p" className="w-[10%] mt-1.5 !text-blue_gray-900_02 !leading-9">
              QUICK
              <br />
              BITE
            </Text>
            <div className="flex flex-row justify-end items-start w-[50%]">
              <div className="flex flex-col items-start justify-start w-[17%] gap-[13px]">
                <Text size="3xl" as="p" className="!text-blue_gray-900">
                  Socia
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                  Facebook
                </Text>
                <Text size="3xl" as="p" className="!text-blue_gray-800_02">
                  Instagram
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_04">
                  Linkedin
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[28%] ml-[81px] gap-4">
                <Text size="2xl" as="p" className="w-[75%] !text-blue_gray-800_02 !leading-[22px]">
                  Get help
                  <br />
                  Partner with us
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_02 !leading-[22px]">
                  Add your restaurant
                  <br />
                  Sign up to deliver
                </Text>
              </div>
              <Text size="2xl" as="p" className="w-[28%] ml-[83px] !text-blue_gray-800_02 !leading-[22px]">
                Read our blog
                <br />
                Buy gft card
                <br />
                Restaurants nearby
                <br />
                Save on first order
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
