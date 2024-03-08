import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../../components/Text";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Img } from "../../../components/Img";
import { CheckBox } from "../../../components/CheckBox";
import { Radio } from "../../../components/Radio";
import { SelectBox } from "../../../components/SelectBox";
import { RadioGroup } from "../../../components/RadioGroup";
import { DatePicker } from "../../../components/DatePicker";

import { ReactTable } from "../../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    rowname: "images/img_image.png",
    rowview: "Product name",
    quantity: "1",
    rowviewtwo: "images/img_create_gray_500_02.svg",
  },
];

export default function MakeOrderOnePage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center justify-start h-[101px] w-[100px] p-3 border-white-A700_01 border-[0.5px] border-solid bg-white-A700_01">
              <Img
                src={info?.getValue?.()}
                alt="image_one"
                className="w-[86%] object-cover"
              />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Button
              size="9xl"
              shape="square"
              className="w-full !text-gray-700_02 border-white-A700_01 border-t-[0.5px] border-b-[0.5px] border-solid"
            >
              Name
            </Button>
          </div>
        ),
        meta: { width: "100px" },
      }),
      tableColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-start justify-center w-full gap-[3px] p-4 border-white-A700_01 border-[0.5px] border-solid bg-white-A700_01">
              <Text size="3xl" as="p" className="mt-1.5 !text-gray-800">
                {info?.getValue?.()}
              </Text>
              <SelectBox
                size="sm"
                indicator={
                  <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                }
                name="name"
                placeholder="Size: 50ml"
                options={dropDownOptions}
                className="w-full mb-1.5 gap-px !text-gray-400_02 border-gray-500_02 border border-solid"
              />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <div className="h-[46px] w-full border-white-A700_01 border-t-[0.5px] border-b-[0.5px] border-solid bg-white-A700_01" />
          </div>
        ),
        meta: { width: "176px" },
      }),
      tableColumnHelper.accessor("rowviewone", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <div className="h-[101px] w-full border-white-A700_01 border-[0.5px] border-solid bg-white-A700_01" />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <div className="h-[46px] w-full border-white-A700_01 border-t-[0.5px] border-b-[0.5px] border-solid bg-white-A700_01" />
          </div>
        ),
        meta: { width: "136px" },
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <div className="flex flex-row justify-start items-center w-full p-4 border-white-A700_01 border-[0.5px] border-solid bg-white-A700_01">
              <Img
                src="images/img_create.svg"
                alt="create_one"
                className="h-[16px] w-[16px]"
              />
              <Text size="3xl" as="p" className="ml-1 my-[25px]">
                {info?.getValue?.()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            size="3xl"
            as="p"
            className="flex justify-center items-center h-[46px] !text-gray-700_02 border-white-A700_01 border-t-[0.5px] border-b-[0.5px] border-solid bg-white-A700_01"
          >
            Quantity
          </Text>
        ),
        meta: { width: "136px" },
      }),
      tableColumnHelper.accessor("rowviewtwo", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-center h-[202px]">
            <div className="flex flex-col items-center justify-center w-[34%] p-[22px] border-white-A700_01 border-[0.5px] border-solid bg-white-A700_01">
              <Img
                src={info?.getValue?.()}
                alt="create_three"
                className="h-[24px] w-[24px] my-4"
              />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-start">
            <div className="h-[46px] w-[34%] border-white-A700_01 border-t-[0.5px] border-b-[0.5px] border-solid bg-white-A700_01" />
          </div>
        ),
        meta: { width: "203px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[78px] gap-[247px] bg-white-A700_01 shadow-sm">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full px-14 py-[58px] bg-white-A700_01">
            <div className="flex flex-row justify-start items-start w-full mb-[290px] gap-[17px] max-w-[1176px]">
              <div className="flex flex-col items-end justify-start w-[69%] gap-[55px]">
                <Text
                  size="16xl"
                  as="p"
                  className="mr-10 !text-gray-800_01 text-center"
                >
                  Make Order
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row justify-center w-full pt-7 px-7 border-gray-100 border border-solid bg-white-A700_01 rounded-[12px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Img
                          src="images/img_shopping_cart_1.svg"
                          alt="shoppingcartone"
                          className="h-[30px] w-[30px]"
                        />
                        <Text size="6xl" as="p">
                          Order summary
                        </Text>
                      </div>
                      <ReactTable
                        size="sm"
                        bodyProps={{ className: "" }}
                        headerProps={{ className: "" }}
                        rowDataProps={{ className: "" }}
                        className="w-[751px]"
                        columns={tableColumns}
                        data={tableData}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full mt-[37px] p-[27px] border-gray-100 border border-solid bg-white-A700_01 rounded-[12px]">
                    <div className="flex flex-col items-start justify-start w-full mt-1.5 mb-[11px] gap-[34px]">
                      <div className="flex flex-col items-start justify-start ml-2 gap-[21px]">
                        <Text size="6xl" as="p">
                          Order Category
                        </Text>
                        <SelectBox
                          size="lg"
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          name="electronic"
                          placeholder="Electronic Components "
                          options={dropDownOptions}
                          className="w-full gap-px !text-gray-900_01 border-gray-500_02 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-full gap-5">
                        <div className="flex flex-row justify-start items-center gap-2">
                          <Img
                            src="images/img_delivery_1.svg"
                            alt="deliveryone_one"
                            className="h-[30px] w-[30px]"
                          />
                          <Text size="6xl" as="p">
                            Delivery options
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-[93%] pt-1">
                          <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                            <Text size="4xl" as="p" className="!text-gray-800">
                              Vehicle Type
                            </Text>
                            <div className="flex flex-row justify-start w-full gap-[33px]">
                              <Radio
                                color="lime_900_01"
                                value="boxtrucks1"
                                name="boxtrucks"
                                label="Box Trucks"
                                className="pl-2 gap-2 py-[3px] text-gray-900_01 border-lime-900_01"
                              />
                              <div className="flex flex-row justify-start w-[27%] gap-2 py-0.5">
                                <div className="h-[20px] w-[20px] border-gray-700_02 border border-solid rounded-[50%]" />
                                <Text size="4xl" as="p">
                                  Flatbed Trucks
                                </Text>
                              </div>
                              <RadioGroup name="flatbedtrucks" className="flex">
                                <Radio
                                  value="semitrucks"
                                  label="Semi-Trucks"
                                  className="pl-2 gap-2 py-[3px] text-gray-900_01"
                                />
                                <Radio
                                  value="reefers"
                                  label="reefers"
                                  className="ml-[33px] pl-2 gap-2 py-[3px] text-gray-900_01"
                                />
                              </RadioGroup>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row w-full gap-7">
                          <div className="flex flex-row justify-start w-[49%] p-4 border-lime-500 border border-solid bg-lime-50 rounded-[12px]">
                            <div className="flex flex-col items-start justify-start w-[74%] gap-1">
                              <div className="flex flex-row justify-start items-center gap-4">
                                <Img
                                  src="images/img_c_check_1.svg"
                                  alt="instant"
                                  className="h-[24px] w-[24px]"
                                />
                                <Text
                                  size="6xl"
                                  as="p"
                                  className="mt-[3px] !text-lime-900"
                                >
                                  Instant delivery
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start ml-10 gap-1">
                                <Text
                                  size="3xl"
                                  as="p"
                                  className="!text-lime-900"
                                >
                                  Instant delivery
                                </Text>
                                <Text
                                  size="2xl"
                                  as="p"
                                  className="!text-lime-900"
                                >
                                  Est. arrival: Today
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-[49%] p-4 border-gray-400_02 border border-solid bg-white-A700_01 rounded-[12px]">
                            <div className="flex flex-col items-start justify-start w-[84%] mb-0.5 gap-1">
                              <div className="flex flex-row justify-start items-center gap-4">
                                <Img
                                  src="images/img_c_check_2.svg"
                                  alt="cchecktwo_one"
                                  className="h-[24px] w-[24px]"
                                />
                                <Text size="6xl" as="p" className="mt-[3px]">
                                  Standard delivery
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start ml-10 gap-[3px]">
                                <Text size="3xl" as="p">
                                  Standard delivery
                                </Text>
                                <Text size="2xl" as="p">
                                  Est. arrival: DD/MM
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full mt-[22px] p-[27px] border-gray-100 border border-solid bg-white-A700_01 rounded-[12px]">
                    <div className="flex flex-col items-start justify-start w-full mb-1.5">
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Img
                          src="images/img_circle_09_1.svg"
                          alt="image_two"
                          className="h-[30px] w-[30px]"
                        />
                        <Text size="6xl" as="p">
                          Customer information
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start w-full mt-5 gap-4">
                        <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                          <Text size="3xl" as="p" className="!text-gray-800">
                            Full name
                          </Text>
                          <Input
                            name="fullName"
                            placeholder="Amaya Dunne"
                            className="w-full !text-gray-900_01"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                          <Text size="3xl" as="p" className="!text-gray-800">
                            Phone number
                          </Text>
                          <Input
                            name="phoneNumber"
                            placeholder="732-123-4567"
                            className="w-full !text-gray-900_01"
                          />
                        </div>
                      </div>
                      <Text
                        size="3xl"
                        as="p"
                        className="mt-[21px] !text-gray-800"
                      >
                        Address
                      </Text>
                      <Input
                        name="address"
                        placeholder="4706 Pooz Street, Bayville, New Jersey(NJ)"
                        className="w-full mt-[3px] !text-gray-900_01"
                      />
                      <CheckBox
                        color="lime_900_01"
                        name="saveasdefault"
                        label="Save as default"
                        className="mt-[21px] pr-[35px] gap-1.5 text-left"
                      />
                      <div className="flex flex-row justify-start w-full mt-5 p-3.5 border-red-400 border border-solid bg-red-50 rounded-[12px]">
                        <div className="flex flex-row justify-start items-start w-[76%] mt-[5px] gap-3">
                          <Img
                            src="images/img_c_info_1.svg"
                            alt="cinfoone_one"
                            className="h-[24px] w-[24px] mt-1"
                          />
                          <div className="flex flex-col items-start justify-start w-[94%] gap-px">
                            <Text size="2xl" as="p">
                              Delivery note
                            </Text>
                            <Text size="2xl" as="p" className="!leading-5">
                              Eiusmod et nisi non sunt dolor proident consequat
                              irure ut exercitation consectetur fugiat
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[30%] mt-[105px] p-6 border-lime-500 border border-solid bg-white-A700_01 rounded-[24px]">
                <div className="flex flex-col items-start justify-start w-[99%] my-[7px]">
                  <Text size="6xl" as="p" className="ml-1">
                    Payment method
                  </Text>
                  <Text size="2xl" as="p" className="mt-5 ml-1 !text-blue-400">
                    Change payment methods
                  </Text>
                  <div className="flex flex-row justify-between items-start w-[99%] mt-[7px] ml-1 p-[11px] border-lime-500 border border-solid bg-lime-50 rounded-[12px]">
                    <div className="flex flex-row justify-start items-center gap-1.5">
                      <Img
                        src="images/img_image_617.png"
                        alt="image617_one"
                        className="w-[35px] object-cover"
                      />
                      <Text size="2xl" as="p" className="!text-lime-900">
                        Mpesa
                      </Text>
                    </div>
                    <Text
                      size="2xl"
                      as="p"
                      className="mt-[9px] !text-lime-900 text-right"
                    >
                      **** 6111
                    </Text>
                  </div>
                  <Text size="4xl" as="p" className="mt-8 ml-1">
                    Delivery Date
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-[3px] gap-[11px]">
                    <DatePicker
                      name="calendar"
                      placeholder="09 Feb 2021"
                      className="flex w-[64%] pl-4 pr-[30px] gap-1.5 py-3 text-gray-900_01 text-left text-sm border-lime-500_33 border-[5px] border-solid bg-transparent rounded-[12px]"
                    />
                    <Input
                      color="lime_100_01"
                      name="buttonthirtysev"
                      placeholder="Change"
                      className="w-[33%]"
                    />
                  </div>
                  <Link to="/OrderComplete">
                    <Button
                      color="lime_700"
                      size="13xl"
                      className="mt-[91px] ml-1 min-w-[296px] !rounded-[12px]"
                    >
                      Make Order
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full p-[37px] bg-gray-400_01 shadow-xs rounded-[12px]">
          <div className="flex flex-row justify-center w-full mt-[39px] mb-[34px] mx-auto max-w-[1290px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center items-center w-full gap-[99px]">
                <Text
                  size="14xl"
                  as="p"
                  className="w-[12%] !text-blue_gray-900_02"
                >
                  CHAIN FLOW
                </Text>
                <div className="flex flex-col items-start justify-start w-[81%]">
                  <div className="flex flex-row justify-start items-start">
                    <Text size="6xl" as="p" className="!text-blue_gray-900_02">
                      About
                    </Text>
                    <Text
                      size="6xl"
                      as="p"
                      className="mt-0.5 ml-[97px] !text-blue_gray-900_02"
                    >
                      Help
                    </Text>
                    <Text
                      size="6xl"
                      as="p"
                      className="ml-[115px] !text-blue_gray-900_02"
                    >
                      Contact
                    </Text>
                    <Text
                      size="8xl"
                      as="p"
                      className="mt-[3px] ml-[117px] !text-blue_gray-900_02"
                    >
                      Receive new promotions
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mt-2.5">
                    <ul className="flex flex-col items-start justify-start w-[9%] gap-5">
                      <li>
                        <a href="#">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900_02"
                          >
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900_02"
                          >
                            Shop
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900_02"
                          >
                            Our story
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900_02"
                          >
                            Blogs
                          </Text>
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-col items-start justify-start w-[11%] ml-[91px] gap-[27px]">
                      <ul className="flex flex-col items-start justify-start gap-11">
                        <li>
                          <a href="#">
                            <Text
                              size="3xl"
                              as="p"
                              className="!text-blue_gray-900_02"
                            >
                              Shipping &{" "}
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              size="3xl"
                              as="p"
                              className="!text-blue_gray-900_02"
                            >
                              Returns
                            </Text>
                          </a>
                        </li>
                      </ul>
                      <a href="#">
                        <Text
                          size="3xl"
                          as="p"
                          className="!text-blue_gray-900_02"
                        >
                          Track Order
                        </Text>
                      </a>
                      <a href="#">
                        <Text
                          size="3xl"
                          as="p"
                          className="!text-blue_gray-900_02"
                        >
                          FAQs
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[67%] ml-[68px]">
                      <div className="flex flex-col items-start justify-start gap-5">
                        <a href="#">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900_02"
                          >
                            Phone:{" "}
                          </Text>
                        </a>
                        <Text
                          size="3xl"
                          as="p"
                          className="!text-blue_gray-900_02"
                        >
                          (+1) 123 456 7893
                        </Text>
                        <a href="#">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900_02"
                          >
                            Email:{" "}
                          </Text>
                        </a>
                        <a href="#">
                          <Text
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900_02"
                          >
                            name@email.com
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[68%]">
                        <Text
                          size="4xl"
                          as="p"
                          className="!text-blue_gray-900_02"
                        >
                          Duis ea tempor commodo amet reprehende
                        </Text>
                        <div className="flex flex-row justify-start items-center mt-[9px] gap-px">
                          <Input
                            color="blue_gray_900_02"
                            size="md"
                            variant="outline"
                            type="email"
                            name="email"
                            placeholder="Input your email"
                            prefix={
                              <Img src="images/img_mail.svg" alt="Mail" />
                            }
                            className="w-[66%] gap-2 rounded-tl-[19px] rounded-bl-[19px]"
                          />
                          <Button
                            color="blue_gray_900_02"
                            size="3xl"
                            className="rounded-tr-[19px] rounded-br-[19px] min-w-[160px]"
                          >
                            Subscribe
                          </Button>
                        </div>
                        <div className="flex flex-row justify-between w-[26%] mt-[47px]">
                          <Img
                            src="images/img_logo_twitter_2.svg"
                            alt="logotwittertwo"
                            className="h-[24px] w-[24px]"
                          />
                          <Img
                            src="images/img_logo_facebook_2.svg"
                            alt="logofacebooktwo"
                            className="h-[24px] w-[24px]"
                          />
                          <Img
                            src="images/img_logo_linkedin_2.svg"
                            alt="logolinkedintwo"
                            className="h-[24px] w-[24px]"
                          />
                          <Img
                            src="images/img_logo_youtube_1.svg"
                            alt="logoyoutubeone"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-start w-full mt-5">
                    <SelectBox
                      color="blue_gray_900_02"
                      size="sm"
                      variant="outline"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="language"
                      placeholder="English"
                      options={dropDownOptions}
                      className="w-[13%] mb-[3px] gap-px"
                    />
                    <div className="flex flex-row justify-start items-start mt-[18px] gap-1">
                      <Text
                        size="3xl"
                        as="p"
                        className="mt-px !text-blue_gray-900_02"
                      >
                        © 2024 ChainFlow, Inc.
                      </Text>
                      <Text as="p" className="mt-px !text-blue_gray-900_02">
                        •
                      </Text>
                      <a href="#" className="mt-px">
                        <Text
                          size="3xl"
                          as="p"
                          className="!text-blue_gray-900_02"
                        >
                          Privacy
                        </Text>
                      </a>
                      <Text as="p" className="mt-px !text-blue_gray-900_02">
                        •
                      </Text>
                      <a href="#">
                        <Text
                          size="3xl"
                          as="p"
                          className="!text-blue_gray-900_02"
                        >
                          Terms
                        </Text>
                      </a>
                      <Text as="p" className="mt-px !text-blue_gray-900_02">
                        •
                      </Text>
                      <a href="#" className="mt-px">
                        <Text
                          size="3xl"
                          as="p"
                          className="!text-blue_gray-900_02"
                        >
                          Sitemap
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
