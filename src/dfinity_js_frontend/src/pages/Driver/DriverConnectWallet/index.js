import React from "react";
import { Img, Text, Input } from "../../../components/utils";
import * as Images from "../../../assets/images";

export default function ActivatedriverAccountConnectWalletPage({ login }) {
  return (
    <>
      <div className="flex flex-row justify-start items-start w-[96%] mt-6 gap-[21px]">
        <div className="flex flex-col items-center justify-center w-[30%] p-[17px] bg-white-A700_01 rounded-[12px]">
          <div className="flex flex-col items-start justify-start w-[92%]">
            <div className="flex flex-row justify-start items-center w-full mt-[-1px] gap-3">
              <div className="h-[338px] w-[11%] relative">
                <div className="h-[322px] w-px top-[1%] right-0 left-0 m-auto bg-gray-400_02 absolute" />
                <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="h-[87px] w-[2px] mr-3 bg-lime-500" />
                  <div className="flex flex-col items-center justify-start w-full gap-[83px]">
                    <Text
                      size="3xl"
                      as="p"
                      className="flex justify-center items-center h-[28px] w-[28px] !text-gray-800 bg-gray-100 text-center rounded-[50%]"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[85%] gap-[90px]">
                <Text size="4xl" as="p" className="ml-2.5 !text-gray-600">
                  Connect Wallet
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[70%]">
          <Input
            color="gray_100_02"
            size="5xl"
            name="container589"
            placeholder="Connecting a wallet enables you to make various payment transactions"
            prefix={<Img src={Images.img_alarm_2} alt="Alarm 3" />}
            className="w-full gap-4 rounded-[24px]"
          />
          <div className="flex flex-row justify-start items-start mt-5 gap-4">
            <Img
              src={Images.img_container_590}
              alt="container590"
              className="h-[36px] w-[36px] rounded-[12px]"
            />
            <Text size="6xl" as="p" className="mt-1">
              Connect Wallet
            </Text>
          </div>
          <div
            onClick={() => {
              login();
            }}
            className="flex cursor-pointer  flex-row justify-start w-[43%] mt-1.5 p-[9px] border-lime-500 border border-solid bg-lime-50 rounded-[12px]"
          >
            <div className="flex flex-row justify-start items-center w-[47%] ml-[15px]">
              <Img src={Images.img_frame} alt="image" className="h-[28px]" />
              <Img
                src={Images.img_image_503}
                alt="image503_one"
                className="w-[81%] ml-[-20px] object-cover"
              />
            </div>
          </div>

          {/* <div className="flex flex-row justify-start items-end mt-9 gap-4">
            <Img
              src={Images.img_container_591}
              alt="container591"
              className="h-[36px] w-[36px] rounded-[12px]"
            />
            <Text size="6xl" as="p" className="mb-[3px]">
              Integrate Mpesa
            </Text>
            <Button
              color="gray_100_02"
              size="md"
              className="mb-[3px] !text-blue_gray-900_02 min-w-[83px] rounded-[14px]"
            >
              Optional
            </Button>
          </div>
          <div className="flex flex-row justify-start w-[43%] mt-6 p-5 border-lime-500 border border-solid bg-lime-50 rounded-[12px]">
            <div className="flex flex-row justify-start items-center w-[44%] ml-1">
              <Img
                src={Images.img_frame}
                alt="image_one"
                className="h-[28px]"
              />
              <Img
                src={Images.img_image_502}
                alt="image502_one"
                className="w-[72%] ml-[-12px] object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
