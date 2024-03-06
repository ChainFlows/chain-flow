import React from "react";
import { Text } from "./..";

export default function Footer2({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full mb-12 mx-auto max-w-[1189px]">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between items-center w-full gap-[460px]">
            <Text size="14xl" as="p" className="w-[13%] !text-blue_gray-900_02">
              CHAIN FLOW
            </Text>
            <div className="flex flex-row justify-start items-start w-[49%]">
              <div className="flex flex-col items-start justify-start w-[17%] gap-3">
                <Text size="3xl" as="p" className="!text-blue_gray-900_04">
                  Socia
                </Text>
                <Text size="3xl" as="p" className="!text-blue_gray-800_07">
                  Facebook
                </Text>
                <Text size="3xl" as="p" className="!text-blue_gray-800_07">
                  Instagram
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_07">
                  Linkedin
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[28%] ml-[81px] gap-4">
                <Text size="2xl" as="p" className="w-[75%] !text-blue_gray-800_07 !leading-[22px]">
                  Get help
                  <br />
                  Partner with us
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-800_07 !leading-[22px]">
                  Add your restaurant
                  <br />
                  Sign up to deliver
                </Text>
              </div>
              <Text size="2xl" as="p" className="w-[28%] ml-[83px] !text-blue_gray-800_07 !leading-[22px]">
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
