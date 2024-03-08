import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { SelectBox } from "../../../components/SelectBox";

import Header1 from "../../../components/Header1/";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ActivateSupplierAccountVerifyBusinessPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[260px] gap-[31px] bg-white-A700_01 shadow-sm">
        <Header1 className="flex flex-row justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1099px]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start ml-10 gap-6">
              <Text size="12xl" as="p">
                Activate your Supplier account
              </Text>
              <Button
                color="gray_100_02"
                size="17xl"
                leftIcon={<Img src="images/img_alarm_2.svg" alt="Alarm 2" />}
                className="ml-[315px] gap-4 min-w-[744px] rounded-[24px]"
              >
                Collecting this information to ensure the security and verify
                your identity
              </Button>
            </div>
            <div className="flex flex-row justify-start items-start w-[95%] mt-1.5 gap-10">
              <div className="flex flex-col items-center justify-center w-[31%] pl-3.5 py-3.5 bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-start justify-start w-full mt-[3px] gap-px">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Text
                      size="3xl"
                      as="p"
                      className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                    >
                      1
                    </Text>
                    <Text size="4xl" as="p">
                      Verify your business
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <div className="h-[340px] w-[11%] relative">
                      <div className="h-[322px] w-px top-0 right-0 left-0 m-auto bg-gray-400_02 absolute" />
                      <div className="flex flex-col items-start justify-start w-full gap-[104px] bottom-0 right-0 left-0 m-auto absolute">
                        <Text
                          size="3xl"
                          as="p"
                          className="flex justify-center items-center h-[28px] w-[28px] !text-gray-800 bg-gray-100 text-center rounded-[50%]"
                        >
                          2
                        </Text>
                        <Text
                          size="3xl"
                          as="p"
                          className="flex justify-center items-center h-[28px] w-[28px] ml-1 !text-gray-800 bg-gray-100 text-center rounded-[50%]"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[87%]">
                      <Button
                        color="lime_100"
                        leftIcon={
                          <Img src="images/img_apartment.svg" alt="Apartment" />
                        }
                        className="gap-2 min-w-[254px] !rounded-[12px]"
                      >
                        Business Information
                      </Button>
                      <div className="flex flex-row justify-start items-start mt-[17px] gap-2 p-2">
                        <Img
                          src="images/img_circle_09.svg"
                          alt="image"
                          className="h-[24px] w-[24px] ml-2"
                        />
                        <Text
                          size="3xl"
                          as="p"
                          className="mt-0.5 !text-gray-700_02"
                        >
                          Ower Information
                        </Text>
                      </div>
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-[61px] ml-1 !text-gray-600"
                      >
                        Connect Wallet
                      </Text>
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-[108px] ml-[3px] !text-gray-600"
                      >
                        Complete
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[66%] mt-[13px]">
                <div className="flex flex-row justify-start items-start gap-3">
                  <Img
                    src="images/img_container_583.svg"
                    alt="container583"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p" className="mt-1">
                    Business Information
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-full mt-3.5 gap-6">
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Company name
                    </Text>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Company name"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Business type
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="indivitual"
                      placeholder="Indivitual"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full mt-4 gap-[25px]">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Phone number
                    </Text>
                    <div className="flex flex-row justify-center items-center w-full p-1.5 bg-gray-200_01 rounded-[12px]">
                      <div className="flex flex-row justify-start items-center w-[14%] gap-[7px]">
                        <Img
                          src="images/img_image_492.svg"
                          alt="image492_one"
                          className="h-[15px]"
                        />
                        <Img
                          src="images/img_arrow_down_gray_800_01.svg"
                          alt="arrowdown_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <div className="h-[22px] w-px ml-[15px] bg-gray-400_02" />
                      <Text size="3xl" as="p" className="ml-6">
                        (209)2423858798
                      </Text>
                      <Img
                        src="images/img_lock.svg"
                        alt="lock_one"
                        className="h-[16px] w-[16px] ml-[34px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Email
                    </Text>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-4 gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Address
                    </Text>
                    <Input
                      name="address"
                      placeholder="Add address"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-0.5">
                    <Text size="3xl" as="p" className="mt-px !text-gray-800">
                      Country/Region
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="country"
                      placeholder="Select country/region"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-4 gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Domain
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="client"
                      placeholder="Client"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      City
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="city"
                      placeholder="Select city"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                </div>
                <Text size="3xl" as="p" className="mt-[25px] !text-gray-800">
                  Owner name
                </Text>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="w-[49%] mt-[3px]"
                />
              </div>
            </div>
            <div className="h-px w-[91%] mt-[191px] ml-11 bg-gray-100" />
            <Link to="/SupplierConnectWallet">
              <Button
                color="lime_700"
                size="9xl"
                rightIcon={
                  <Img src="images/img_arrow_right.svg" alt="Arrow right" />
                }
                className="mt-8 ml-[915px] gap-1.5 min-w-[153px] !rounded-[12px]"
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
