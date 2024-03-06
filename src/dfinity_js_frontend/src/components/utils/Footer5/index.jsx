import React from "react";
import { Text } from "./..";

export default function Footer5({ ...props }) {
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
                <ul className="flex flex-col items-start justify-start w-full gap-3">
                  <li>
                    <a href="#">
                      <Text size="3xl" as="p" className="!text-blue_gray-800_07">
                        Facebook
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text size="3xl" as="p" className="!text-blue_gray-800_07">
                        Instagram
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text size="2xl" as="p" className="!text-blue_gray-800_07">
                        Linkedin
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start w-[28%] ml-[81px] gap-4">
                <Text size="2xl" as="p" className="w-[75%] !text-blue_gray-800_07 !leading-[22px]">
                  Get help
                  <br />
                  Partner with us
                </Text>
                <div className="flex flex-row justify-start w-full">
                  <ul className="flex flex-col items-center justify-start w-full gap-[66px]">
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-800_07">
                          Add your restaurant
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-800_07">
                          Sign up to deliver
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
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
