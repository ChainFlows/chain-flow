import React from "react";
import { Text } from "./..";

export default function Footer3({ ...props }) {
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
            <div className="flex flex-row justify-between items-start w-[50%]">
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <Text size="3xl" as="p" className="!text-blue_gray-900">
                  Socia
                </Text>
                <ul className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <li>
                    <a href="#">
                      <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                        Facebook
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text size="3xl" as="p" className="!text-blue_gray-800_02">
                        Instagram
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text size="2xl" as="p" className="!text-blue_gray-800_04">
                        Linkedin
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start w-[28%] gap-4">
                <Text size="2xl" as="p" className="w-[75%] !text-blue_gray-800_02 !leading-[22px]">
                  Get help
                  <br />
                  Partner with us
                </Text>
                <div className="flex flex-row justify-start w-full">
                  <ul className="flex flex-col items-center justify-start w-full gap-[66px]">
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                          Add your restaurant
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                          Sign up to deliver
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="flex flex-col items-start justify-start gap-[29px]">
                <li>
                  <a href="#">
                    <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                      Read our blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                      Buy gft card
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                      Restaurants nearby
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text size="2xl" as="p" className="!text-blue_gray-800_02">
                      Save on first order
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
