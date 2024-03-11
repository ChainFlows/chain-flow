import React from "react";
import { Helmet } from "react-helmet";
import * as Images from "../../assets/images";
// import { Text, Button, Input } from "../../components";
import { Img } from "../../components/utils/Img";
import { Text } from "../../components/utils/Text";
import { Button } from "../../components/utils/Button";
import { Input } from "../../components/utils/Input";
import { Link } from "react-router-dom";

export default function HomeLandingpagePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>ChainFlow</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pr-[3px] gap-[250px] py-[3px] bg-gray-200 shadow-sm">
        <div className="flex flex-col items-center justify-start w-full mt-[73px] max-w-[1171px]">
          <div className="flex flex-col items-start justify-start w-full gap-10">
            <Text
              size="14xl"
              as="p"
              className="w-[14%] ml-2.5 !text-blue_gray-900_02"
            >
              CHAIN FLOW
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[405px] w-[99%] relative">
                <div className="flex flex-row justify-start items-center w-[59%] gap-px bottom-0 right-0 left-0 m-auto absolute">
                  <Input
                    color="white_A700_01"
                    size="5xl"
                    name="search"
                    placeholder="Delivery address"
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e)}
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue("")}
                          height={16}
                          width={16}
                        />
                      ) : (
                        <Img
                          src={Images.img_image_702}
                          alt="Image 702"
                          className="w-[16px] h-[16px] cursor-pointer"
                        />
                      )
                    }
                    className="w-[76%] gap-[35px] border-gray-500_03 border border-solid rounded-[24px]"
                  />
                  <Button
                    color="blue_gray_900_02"
                    size="19xl"
                    className="min-w-[165px] rounded-[24px]"
                  >
                    Search
                  </Button>
                </div>
                <Img
                  src={Images.img_image_705}
                  alt="image705_one"
                  className="h-[189px] w-[189px] left-0 top-0 m-auto rounded-[50%] absolute"
                />
                <Img
                  src={Images.img_image_693}
                  alt="image693_one"
                  className="h-[179px] w-[17%] bottom-[1%] right-0 m-auto object-cover absolute rounded-[12px]"
                />
                <Text
                  size="17xl"
                  as="p"
                  className="w-[85%] top-[21%] right-0 left-0 m-auto !text-blue_gray-900_02 absolute"
                >
                  The quickest way to
                  <br />
                  find your perfect products
                </Text>
              </div>
              <div className="flex flex-row justify-between items-start w-[99%] mt-[271px]">
                <Text
                  size="9xl"
                  as="p"
                  className="mt-2.5 !text-blue_gray-900_02"
                >
                  How it works
                </Text>
                <Img
                  src={Images.img_image_699}
                  alt="image699_one"
                  className="w-[4%] mb-1 object-cover rounded-[12px]"
                />
              </div>
              <div className="flex flex-row w-[99%] mt-[41px] gap-[66px]">
                <div className="flex flex-col items-center justify-start w-[27%] mt-[76px] mb-[90px] cursor-pointer hover:shadow-xs">
                  <div className="flex flex-col items-end justify-start w-full gap-[11px]">
                    <div className="flex flex-row justify-start items-center w-[70%] mr-2 gap-[7px]">
                      <div className="flex flex-row justify-between items-center w-[69%] p-[5px] border-gray-500_03 border border-solid bg-gray-200 shadow-xs rounded-[10px]">
                        <Text size="s" as="p" className="!text-gray-500_02">
                          Delivery address
                        </Text>
                        <Img
                          src={Images.img_image_704}
                          alt="delivery"
                          className="h-[9px] w-[9px] mr-1 rounded-[50%]"
                        />
                      </div>
                      <Button
                        color="blue_gray_900_02"
                        size="xs"
                        className="!text-gray-400_02 min-w-[59px]"
                      >
                        Seach
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Img
                        src={Images.img_image_691}
                        alt="step_one"
                        className="w-[76%] ml-0.5 object-cover rounded-[12px]"
                      />
                      <Text
                        size="10xl"
                        as="p"
                        className="mt-6 !text-blue_gray-900_03"
                      >
                        Step
                      </Text>
                      <Text
                        size="3xl"
                        as="p"
                        className="mt-[25px] ml-0.5 !text-blue_gray-800_08"
                      >
                        Enter your location. Type in your
                      </Text>
                      <Text
                        size="3xl"
                        as="p"
                        className="w-[97%] mt-1.5 ml-0.5 !text-blue_gray-800_08 !leading-6"
                      >
                        address, or pin your location by
                        <br />
                        enabling location services.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[37%] gap-24 p-10 bg-gray-200 shadow-xs cursor-pointer rounded-[12px] hover:shadow-xs">
                  <Img
                    src={Images.img_image_694}
                    alt="image694_one"
                    className="h-[250px] w-[250px] ml-8 rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start mb-[47px] ml-[11px] gap-[25px]">
                    <Text size="8xl" as="p" className="!text-blue_gray-900_03">
                      Step 2
                    </Text>
                    <Text
                      size="3xl"
                      as="p"
                      className="!text-blue_gray-800_08 !leading-6"
                    >
                      Now select a Fulfilling Company and a Product item.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[31%] mt-6 mb-[87px] gap-[18px] cursor-pointer hover:shadow-xs">
                  <Img
                    src={Images.img_image_696}
                    alt="image696_one"
                    className="w-full object-cover rounded-[12px]"
                  />
                  <div className="flex flex-col items-start justify-start w-[82%]">
                    <Text
                      size="8xl"
                      as="p"
                      className="ml-px !text-blue_gray-900_03"
                    >
                      Step 3
                    </Text>
                    <Text
                      size="3xl"
                      as="p"
                      className="mt-[30px] ml-px !text-blue_gray-800_08"
                    >
                      Settle your payment. Then, sit
                    </Text>
                    <Text
                      size="4xl"
                      as="p"
                      className="mt-1.5 !text-blue_gray-800_08 !leading-[26px]"
                    >
                      back and relax as we get you product order ready
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-[99%] mt-[41px]">
                <Text size="9xl" as="p" className="!text-blue_gray-900_02">
                  Work with ChainFlow
                </Text>
                <Img
                  src={Images.img_image_703}
                  alt="image703_one"
                  className="w-[3%] object-cover rounded-[12px]"
                />
              </div>
              <div className="flex flex-row justify-between items-center w-[98%] mt-[61px]">
                <div className="flex flex-col items-start justify-start w-[59%] gap-[100px]">
                  <Img
                    src={Images.img_image_698}
                    alt="image698_one"
                    className="w-[89%] ml-3 object-cover rounded-[12px]"
                  />
                  <div className="h-[301px] w-[68%] ml-[38px] relative">
                    <div className="flex flex-col items-center justify-start w-[65%] h-max gap-[37px] right-[6%] bottom-0 top-0 m-auto absolute">
                      <div className="flex flex-row justify-center w-full p-[5px] bg-gray-200 shadow-xs rounded-[12px]">
                        <Text
                          size="6xl"
                          as="p"
                          className="mb-px !text-blue_gray-900_03 text-center"
                        >
                          RESTAURANT
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start w-full p-[11px] bg-gray-400_03 shadow-xs rounded-[12px]">
                        <div className="flex flex-col items-start justify-start w-[63%] mt-[3px] mb-3">
                          <Text
                            size="11xl"
                            as="p"
                            className="!text-blue_gray-900_02 z-[1]"
                          >
                            Proident
                          </Text>
                          <div className="h-[146px] w-full mt-[-32px] bg-blue_gray-900_02 shadow-xs rounded-md" />
                        </div>
                      </div>
                    </div>
                    <Img
                      src={Images.img_image_700}
                      alt="image700_one"
                      className="justify-center h-[301px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Img
                    src={Images.img_image_695}
                    alt="image695_one"
                    className="w-full object-cover rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[27%]">
                  <Text
                    size="10xl"
                    as="p"
                    className="ml-px !text-blue_gray-900_02"
                  >
                    As a Driver
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="w-[94%] mt-6 ml-px !text-blue_gray-800_08 !leading-6"
                  >
                    Earn money by delivering food
                    <br />
                    from restaurants. All you need
                    <br />
                    are the skills and a bike
                  </Text>
                  <Link
                    to="/drivers?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai"
                    className="no-underline"
                  >
                    <Button
                      color="gray_200"
                      size="18xl"
                      className="mt-[31px] min-w-[214px] rounded-[24px] no-underline border-2 border-blue_gray-900_02"
                    >
                      Drive with us
                    </Button>
                  </Link>
                  <Text
                    size="9xl"
                    as="p"
                    className="mt-[174px] ml-px !text-blue_gray-900_02"
                  >
                    As a Supplier
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-6 ml-px !text-blue_gray-800_08"
                  >
                    ChainFlow helps Supplier
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="w-[88%] mt-[7px] ml-px !text-blue_gray-800_08 !leading-6"
                  >
                    grow with online ordering.
                    <br />
                    loyalty programs, and more.
                  </Text>
                  <Link
                    to="/suppliers?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai"
                    className="no-underline"
                  >
                    <Button
                      color="gray_200"
                      size="18xl"
                      className="mt-[31px] min-w-[214px] rounded-[24px] no-underline border-2 border-blue_gray-900_02"
                    >
                      Partner with us
                    </Button>
                  </Link>
                  <Text
                    size="9xl"
                    as="p"
                    className="mt-[169px] ml-px !text-blue_gray-900_02"
                  >
                    As a Client
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-7 ml-px !text-blue_gray-800_08"
                  >
                    Be part of a team that&#39;s
                  </Text>
                  <Text
                    size="4xl"
                    as="p"
                    className="mt-[13px] ml-px !text-blue_gray-800_08"
                  >
                    building a top-notch delivery
                  </Text>
                  <Text
                    size="4xl"
                    as="p"
                    className="mt-3 ml-px !text-blue_gray-800_08"
                  >
                    service
                  </Text>
                  <Link
                    to="/clients?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai"
                    className="no-underline"
                  >
                    <Button
                      color="gray_200"
                      size="18xl"
                      className="mt-[31px] min-w-[214px] rounded-[24px] no-underline border-2 border-blue_gray-900_02"
                    >
                      Work with us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start w-[99%] mt-[74px]">
                <Text size="9xl" as="p" className="mt-2 !text-blue_gray-900_02">
                  Download our app
                </Text>
                <Img
                  src={Images.img_image_697}
                  alt="image697_one"
                  className="w-[35px] mb-1.5 object-cover rounded-[12px]"
                />
              </div>
              <div className="h-[382px] w-full mt-[53px] relative">
                <div className="flex flex-row justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Button
                    color="blue_gray_900_02"
                    size="18xl"
                    className="z-[1] min-w-[179px] rounded-[15px]"
                  >
                    Download
                  </Button>
                  <div className="flex flex-row justify-center items-start w-full ml-[-177px]">
                    <Text
                      size="3xl"
                      as="p"
                      className="w-[46%] mt-[116px] !text-blue_gray-800_08 z-[1] !leading-6"
                    >
                      Get to experience the most convinite to fulfill you
                      SupplyChain demands. Our fastest delivery
                      <br />
                      service carries a variety of goods and Products from both
                      <br />
                      local global fulfilling Companies.
                    </Text>
                    <div className="h-[382px] w-[56%] ml-[-11px] relative">
                      <Img
                        src={Images.img_image_692}
                        alt="image692_one"
                        className="justify-center h-[382px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                      />
                      <Text
                        size="7xl"
                        as="p"
                        className="bottom-[19%] left-[13%] m-auto text-center absolute"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[23px] w-[23px] bottom-[21%] right-[46%] m-auto bg-gray-200 shadow-xs absolute rounded-[11px]" />
                <Text
                  size="11xl"
                  as="p"
                  className="left-0 top-[15%] m-auto !text-blue_gray-900_02 absolute"
                >
                  Order easily
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full pl-[63px] pr-14 py-[63px] bg-gray-400_03 shadow-xs rounded-[12px]">
          <div className="flex flex-row justify-center w-full mb-12 mx-auto max-w-[1190px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-between items-center w-full gap-[461px]">
                <Text
                  size="14xl"
                  as="p"
                  className="w-[13%] mt-px !text-blue_gray-900_02"
                >
                  CHAIN FLOW
                </Text>
                <div className="flex flex-row justify-start items-start w-[49%] gap-[82px]">
                  <div className="flex flex-col items-start justify-start w-[59%] gap-3">
                    <div className="flex flex-row justify-between w-[77%]">
                      <Text
                        size="3xl"
                        as="p"
                        className="mb-0.5 !text-blue_gray-900_03"
                      >
                        Social
                      </Text>
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-blue_gray-700_01"
                      >
                        Get help
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-col items-start justify-start gap-3">
                        <a href="facebook">
                          <Text
                            size="2xl"
                            as="p"
                            className="!text-blue_gray-700_01"
                          >
                            Facebook
                          </Text>
                        </a>
                        <ul className="flex flex-col items-center justify-start gap-11">
                          <li>
                            <a href="Instagram">
                              <Text
                                size="3xl"
                                as="p"
                                className="!text-blue_gray-700_01"
                              >
                                Instagram
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="Linkedin">
                              <Text
                                size="3xl"
                                as="p"
                                className="!text-blue_gray-700_01"
                              >
                                Linkedin
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-3">
                        <a href="Partner with us">
                          <Text
                            size="2xl"
                            as="p"
                            className="!text-blue_gray-700_01"
                          >
                            Partner with us
                          </Text>
                        </a>
                        <ul className="flex flex-col items-center justify-start gap-[66px]">
                          <li>
                            <a href="Add your restaurant">
                              <Text
                                size="2xl"
                                as="p"
                                className="!text-blue_gray-800_08"
                              >
                                Add your restaurant
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="Sign up to deliver">
                              <Text
                                size="2xl"
                                as="p"
                                className="!text-blue_gray-800_08"
                              >
                                Sign up to deliver
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="2xl"
                    as="p"
                    className="w-[28%] !text-blue_gray-700_01 !leading-[22px]"
                  >
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
      </div>
    </>
  );
}
