import React from "react";
import { Text } from "./..";

export default function Footer4({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full mb-[52px] mx-auto max-w-[1131px]">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between items-center w-full gap-[402px]">
            <Text size="14xl" as="p" className="w-[14%] !text-blue_gray-900_02">
              CHAIN FLOW
            </Text>
            <div className="flex flex-row justify-end items-start w-[51%] mt-[5px]">
              <div className="flex flex-col items-start justify-start w-[17%] gap-[13px]">
                <Text size="3xl" as="p" className="!text-blue_gray-800_05">
                  Socia
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_03">
                  Facebook
                </Text>
                <Text size="3xl" as="p" className="!text-blue_gray-800_03">
                  Instagram
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_03">
                  Linkedin
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[28%] ml-[81px] gap-4">
                <Text size="2xl" as="p" className="w-[75%] !text-blue_gray-800_03 !leading-[22px]">
                  Get help
                  <br />
                  Partner with us
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_03 !leading-[22px]">
                  Add your restaurant
                  <br />
                  Sign up to deliver
                </Text>
              </div>
              <Text size="2xl" as="p" className="w-[28%] ml-[83px] !text-blue_gray-800_03 !leading-[22px]">
                Read our blog
                <br />
                Buy gift card
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
