import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import Header from "../../../components/Header";

export default function ActivateClientAccountConnectWalletPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pb-[120px] gap-[23px] bg-white-A700_01 shadow-sm">
        <Header className="flex justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1109px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text size="12xl" as="p" className="ml-6">
              Activate your client account
            </Text>
            <div className="flex flex-row justify-start items-center w-full mt-4 gap-[22px]">
              <div className="flex flex-col items-center justify-center w-[29%] p-[18px] bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-center justify-start w-[95%] mb-1">
                  <div className="flex flex-row justify-start items-start w-[99%] gap-[19px]">
                    <Button
                      color="lime_500"
                      size="sm"
                      shape="circle"
                      className="w-[28px]"
                    >
                      <Img src="images/img_container_598.svg" />
                    </Button>
                    <Text size="4xl" as="p" className="mt-[3px]">
                      Verify your business
                    </Text>
                  </div>
                  <div className="h-[332px] w-[99%] relative">
                    <div className="flex flex-col items-start justify-start w-[84%] h-full left-0 bottom-0 top-0 m-auto absolute">
                      <div className="flex flex-col items-start justify-start w-full z-[1]">
                        <div className="h-[65px] w-[2px] ml-3.5 bg-lime-500" />
                        <div className="flex flex-row justify-start items-center mt-[-19px] gap-3">
                          <Text
                            size="3xl"
                            as="p"
                            className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                          >
                            2
                          </Text>
                          <Text size="5xl" as="p">
                            Connect Wallet
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[-9px]">
                        <div className="h-[266px] w-px bg-gray-400_02" />
                        <Text
                          size="3xl"
                          as="p"
                          className="flex justify-center items-center h-[28px] w-[28px] mt-[-27px] !text-gray-800 bg-gray-100 text-center rounded-[50%]"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[87%] bottom-[1%] right-0 m-auto absolute">
                      <Button
                        color="lime_100"
                        leftIcon={
                          <Img src="images/img_money_13.svg" alt="Money 13" />
                        }
                        className="w-full gap-2 !rounded-[12px]"
                      >
                        Business account
                      </Button>
                      <div className="flex flex-row justify-start items-center mt-[17px] gap-2 p-2">
                        <Img
                          src="images/img_money_13_gray_700_02.svg"
                          alt="moneythirteen"
                          className="h-[24px] w-[24px] ml-2"
                        />
                        <Text size="3xl" as="p" className="!text-gray-700_02">
                          Integrate Mpesa
                        </Text>
                      </div>
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-[115px] ml-[5px] !text-gray-600"
                      >
                        Complete
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
                  prefix={<Img src="images/img_alarm_2.svg" alt="Alarm 3" />}
                  className="w-full gap-4 rounded-[24px]"
                />
                <div className="flex flex-row justify-start items-start mt-5 gap-4">
                  <Img
                    src="images/img_container_590.svg"
                    alt="container590"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p" className="mt-1">
                    Connect Wallet
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[43%] mt-1.5 p-[9px] border-lime-500 border border-solid bg-lime-50 rounded-[12px]">
                  <div className="flex flex-row justify-start items-center w-[47%] ml-[15px]">
                    <Img
                      src="images/img_frame.svg"
                      alt="image"
                      className="h-[28px]"
                    />
                    <Img
                      src="images/img_image_503.png"
                      alt="image503_one"
                      className="w-[81%] ml-[-20px] object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[89%] mt-4 gap-6">
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Private Key
                    </Text>
                    <Input
                      name="textfield"
                      placeholder="MIICWwIBAAs+LCnCcgGUG4GW"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Public Key
                    </Text>
                    <Input
                      name="textfield_one"
                      placeholder="MIICWwIBAAs+LCnCcgGUG4GW"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-end mt-9 gap-4">
                  <Img
                    src="images/img_container_591.svg"
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
                      src="images/img_frame.svg"
                      alt="image_one"
                      className="h-[28px]"
                    />
                    <Img
                      src="images/img_image_502.png"
                      alt="image502_one"
                      className="w-[72%] ml-[-12px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-[62%] mt-4 ml-[340px] gap-6">
              <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                  Paybill Number
                </Text>
                <Input
                  type="number"
                  name="textfield_two"
                  placeholder="Enter  your Paybill Number"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                <Text size="3xl" as="p" className="!text-gray-800">
                  Phone Number
                </Text>
                <Input
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[90%] mt-[146px] ml-[33px] gap-8">
              <div className="h-px w-full bg-gray-100" />
              <div className="flex flex-row justify-between w-full">
                <Link to="/ActiveClientAccount">
                  <Button
                    color="lime_100_01"
                    size="9xl"
                    leftIcon={
                      <Img src="images/img_arrow_left.svg" alt="Arrow left" />
                    }
                    className="gap-1.5 min-w-[110px] !rounded-[12px]"
                  >
                    Back
                  </Button>
                </Link>
                <Link to="/ClientAccountSuccessfully">
                  <Button
                    color="lime_700"
                    size="9xl"
                    rightIcon={
                      <Img src="images/img_arrow_right.svg" alt="Arrow right" />
                    }
                    className="gap-1.5 min-w-[121px] !rounded-[12px]"
                  >
                    Finish
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
