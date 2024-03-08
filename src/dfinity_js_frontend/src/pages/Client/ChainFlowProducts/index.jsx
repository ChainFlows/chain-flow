import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../../assets/images";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export default function ChainFlowProductsPage() {
  const [searchBarValue14, setSearchBarValue14] = React.useState("");

  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[361px] bg-gray-200 shadow-sm">
        <div className="h-[2396px] w-full mt-[115px] relative max-w-[1153px]">
          <div className="flex flex-col items-start justify-start w-full bottom-0 right-0 left-0 m-auto absolute">
            <div className="flex flex-row justify-between items-start w-[99%]">
              <div className="flex flex-row justify-start w-[58%] gap-3.5">
                <Input
                  color="white_A700_01"
                  size="5xl"
                  name="search"
                  placeholder="Delivery address"
                  value={searchBarValue14}
                  onChange={(e) => setSearchBarValue14(e)}
                  suffix={
                    searchBarValue14?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue14("")}
                        height={31}
                        width={29}
                      />
                    ) : (
                      <Img
                        src="images/img_image_637.png"
                        alt="Image 637"
                        className="w-[29px] h-[31px] cursor-pointer"
                      />
                    )
                  }
                  className="w-[76%] gap-[35px] border-gray-500_03 border border-solid rounded-[24px]"
                />
                <Button
                  color="blue_gray_900_02"
                  size="17xl"
                  className="min-w-[146px] rounded-[15px]"
                >
                  Search
                </Button>
              </div>
              <Link to="/ProductCategories">
                <Button
                  color="blue_gray_900_02"
                  size="18xl"
                  className="mt-2.5 min-w-[185px] rounded-[15px]"
                >
                  Make Order
                </Button>
              </Link>
            </div>
            <div className="flex flex-row justify-start mt-[18px] gap-2.5">
              <Button
                color="blue_gray_900_02"
                className="min-w-[113px] rounded-[20px]"
              >
                open now
              </Button>
              <Button
                color="gray_200"
                className="!text-blue_gray-700 min-w-[133px] rounded-[20px]"
              >
                free delivery
              </Button>
              <Button
                color="gray_200"
                className="!text-blue_gray-700 min-w-[89px] rounded-[20px]"
              >
                5 stars
              </Button>
            </div>
            <Text
              size="9xl"
              as="p"
              className="mt-[105px] !text-blue_gray-900_02"
            >
              New Produtcs on ChainFlow
            </Text>
            <div className="flex flex-row w-full mt-[78px] gap-[22px]">
              <div className="flex flex-row justify-center w-[33%] p-3 bg-white-A700_01 shadow-xs rounded-[24px]">
                <div className="flex flex-col items-start justify-start w-full mb-[7px]">
                  <div className="h-[157px] w-full relative">
                    <div className="flex flex-row justify-center w-[29%] right-[3%] top-[6%] p-2 m-auto border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs absolute rounded-[12px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="mt-px mb-0.5 !text-blue_gray-800 text-center"
                      >
                        25-35 min
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_625.png"
                      alt="bruncherie_one"
                      className="justify-center h-[157px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-4 ml-1.5 !text-blue_gray-900_02"
                  >
                    Bruncherie
                  </Text>
                  <Text as="p" className="mt-[9px] ml-1 !text-gray-400_02">
                    Breakfast, lunch, desserts
                  </Text>
                  <div className="flex flex-row justify-between items-center w-[91%] mt-[29px] ml-[31px]">
                    <Text size="3xl" as="p" className="!text-blue_gray-800">
                      $3.26
                    </Text>
                    <div className="h-[20px] w-[20%] relative">
                      <div className="h-[15px] w-full top-[11%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                      <Text
                        size="4xl"
                        as="p"
                        className="w-max left-[3%] bottom-0 top-0 m-auto !text-blue_gray-800 absolute"
                      >
                        $$$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[33%] p-[13px] bg-white-A700_01 shadow-xs rounded-[24px]">
                <div className="flex flex-col items-start justify-start w-full mb-0.5">
                  <div className="h-[157px] w-full relative">
                    <div className="flex flex-row justify-center w-[29%] right-[3%] top-[6%] p-[7px] m-auto border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs absolute rounded-[12px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="mt-px mb-1 !text-blue_gray-800 text-center"
                      >
                        25-35 min
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_624.png"
                      alt="image624_one"
                      className="justify-center h-[157px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Text
                    size="4xl"
                    as="p"
                    className="mt-[19px] ml-1 !text-blue_gray-900_02"
                  >
                    Mom&#39;s Soups
                  </Text>
                  <Text size="2xl" as="p" className="mt-2 !text-gray-400_02">
                    Lunch
                  </Text>
                  <div className="flex flex-row justify-between items-center w-[99%] mt-7 ml-[3px]">
                    <Text size="6xl" as="p" className="!text-blue_gray-800_09">
                      $3.26
                    </Text>
                    <div className="h-[20px] w-[18%] relative">
                      <div className="h-[15px] w-full top-[8%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                      <Text
                        size="4xl"
                        as="p"
                        className="w-max left-[2%] bottom-0 top-0 m-auto !text-blue_gray-700 absolute"
                      >
                        $$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[33%] p-[13px] bg-white-A700_01 shadow-xs rounded-[24px]">
                <div className="flex flex-col items-start justify-start w-full mb-1">
                  <div className="h-[157px] w-full relative">
                    <div className="flex flex-row justify-center w-[29%] right-[3%] top-[6%] p-2 m-auto border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs absolute rounded-[12px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="mb-[3px] !text-blue_gray-800 text-center"
                      >
                        25-35 min
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_623.png"
                      alt="image623_one"
                      className="justify-center h-[157px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[17px] ml-[18px] !text-blue_gray-800_09"
                  >
                    voBistro
                  </Text>
                  <Text as="p" className="mt-2 ml-[5px] !text-gray-400_02">
                    Breakfast, lunch, snacks
                  </Text>
                  <div className="flex flex-row justify-between w-[99%] mt-[30px] ml-[3px]">
                    <Text
                      size="4xl"
                      as="p"
                      className="mt-px !text-blue_gray-800_09"
                    >
                      w free delivery
                    </Text>
                    <div className="h-[20px] w-[19%] relative">
                      <div className="h-[15px] w-full top-[8%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                      <Text
                        size="4xl"
                        as="p"
                        className="w-max left-[6%] bottom-0 top-0 m-auto !text-blue_gray-800 absolute"
                      >
                        $$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-start w-full mt-40">
              <Text
                size="9xl"
                as="p"
                className="mt-[3px] !text-blue_gray-900_02"
              >
                Popular Suppliers
              </Text>
              <Img
                src="images/img_image_638.png"
                alt="image638_one"
                className="w-[31px] object-cover rounded-[12px]"
              />
            </div>
            <div className="flex flex-row w-full mt-[75px] gap-[22px]">
              <div className="flex flex-row justify-center w-[33%] p-3 bg-white-A700_01 shadow-xs rounded-[24px]">
                <div className="flex flex-col items-start justify-start w-full mt-[3px] mb-1">
                  <div className="h-[157px] w-full relative">
                    <div className="flex flex-row justify-center w-[29%] right-[3%] top-[6%] p-2 m-auto border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs absolute rounded-[12px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="mt-px mb-0.5 !text-blue_gray-800 text-center"
                      >
                        25-35 min
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_623.png"
                      alt="vobistro_one"
                      className="justify-center h-[157px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-row justify-start w-[34%] mt-[17px]">
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="h-[18px] w-[96%] bg-white-A700_01 shadow-xs rounded-[9px]" />
                      <Text
                        size="5xl"
                        as="p"
                        className="ml-[-93px] !text-blue_gray-800_09"
                      >
                        voBistro
                      </Text>
                    </div>
                  </div>
                  <Text as="p" className="mt-2 ml-1 !text-gray-400_02">
                    Breakfast, lunch, snacks
                  </Text>
                  <div className="flex flex-row justify-between items-center w-[99%] mt-[29px] ml-[3px]">
                    <Text size="4xl" as="p" className="!text-blue_gray-800">
                      w free delivery
                    </Text>
                    <div className="h-[23px] w-[19%] relative">
                      <div className="h-[15px] w-full top-[10%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-[7px]" />
                      <Text
                        size="5xl"
                        as="p"
                        className="w-max left-[5%] bottom-0 top-0 m-auto !text-blue_gray-700 absolute"
                      >
                        $$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[33%] p-3.5 bg-white-A700_01 shadow-xs rounded-[24px]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[157px] w-full relative">
                    <div className="flex flex-row justify-end w-[52%] h-max right-0 bottom-0 top-0 p-2 m-auto bg-blue_gray-800 shadow-xs absolute rounded-[12px]">
                      <div className="flex flex-row justify-center w-[65%] mb-[99px] p-[7px] border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs rounded-md">
                        <Text
                          size="2xl"
                          as="p"
                          className="mt-px mb-[7px] !text-blue_gray-800 text-center"
                        >
                          25-35 min
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_image_636.png"
                      alt="image636_one"
                      className="justify-center h-[157px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-4 ml-px !text-blue_gray-800_09"
                  >
                    Pancake World
                  </Text>
                  <Text as="p" className="mt-[9px] ml-px !text-gray-400_02">
                    Brunch, desserts
                  </Text>
                  <div className="flex flex-row justify-between items-start w-full mt-7">
                    <Text size="6xl" as="p" className="!text-blue_gray-800_09">
                      $4.50
                    </Text>
                    <div className="h-[18px] w-[19%] relative">
                      <div className="justify-center h-[15px] w-full left-0 bottom-0 right-0 top-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                      <Text
                        size="3xl"
                        as="p"
                        className="w-max left-[3%] bottom-0 top-0 m-auto !text-blue_gray-800 absolute"
                      >
                        $$$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[33%] p-3.5 bg-white-A700_01 shadow-xs rounded-[24px]">
                <div className="flex flex-col items-start justify-start w-full mb-[5px]">
                  <div className="h-[158px] w-full relative">
                    <div className="flex flex-row justify-center w-[29%] right-[3%] top-[7%] p-1.5 m-auto border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs absolute rounded-[12px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="mt-0.5 mb-[5px] !text-blue_gray-800 text-center"
                      >
                        25-35 min
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_631.png"
                      alt="image631_one"
                      className="justify-center h-[158px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Text
                    size="4xl"
                    as="p"
                    className="mt-[19px] ml-1 !text-blue_gray-900_02"
                  >
                    Bombay Express
                  </Text>
                  <Text
                    size="2xl"
                    as="p"
                    className="mt-2 ml-1.5 !text-gray-400_02"
                  >
                    Indian
                  </Text>
                  <div className="flex flex-row justify-between items-center w-[91%] mt-[30px] ml-[31px]">
                    <Text size="3xl" as="p" className="!text-blue_gray-800">
                      $4.50
                    </Text>
                    <div className="h-[20px] w-[20%] relative">
                      <div className="h-[15px] w-full top-[11%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                      <Text
                        size="4xl"
                        as="p"
                        className="w-max left-[3%] bottom-0 top-0 m-auto !text-blue_gray-800 absolute"
                      >
                        $$$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              size="9xl"
              as="p"
              className="mt-[163px] !text-blue_gray-900_02"
            >
              Free delivery
            </Text>
            <div className="flex flex-row w-full mt-[75px] gap-[22px]">
              <div className="flex flex-row justify-center w-[33%] p-[15px] bg-white-A700_01 shadow-xs rounded-[15px]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[157px] w-full relative">
                    <div className="flex flex-row justify-end w-[52%] h-max right-0 bottom-0 top-0 p-2 m-auto bg-blue_gray-800 shadow-xs absolute rounded-[12px]">
                      <div className="flex flex-row justify-center w-[63%] mb-[101px] p-2 border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs rounded-[9px]">
                        <Text
                          size="2xl"
                          as="p"
                          className="mt-px mb-[3px] !text-blue_gray-800 text-center"
                        >
                          25-35 min
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_image_636.png"
                      alt="pancake_world"
                      className="justify-center h-[157px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-4 ml-px !text-blue_gray-800_09"
                  >
                    Pancake World
                  </Text>
                  <Text as="p" className="mt-[9px] ml-px !text-gray-400_02">
                    Brunch, desserts
                  </Text>
                  <div className="flex flex-row justify-between items-center w-full mt-[29px]">
                    <Text size="4xl" as="p" className="!text-blue_gray-700">
                      w free delivery
                    </Text>
                    <div className="h-[23px] w-[19%] relative">
                      <div className="h-[15px] w-full top-[10%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                      <Text
                        size="5xl"
                        as="p"
                        className="w-max left-[5%] bottom-0 top-0 m-auto !text-blue_gray-700 absolute"
                      >
                        $$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[33%] p-[9px] bg-white-A700_01 shadow-xs rounded-[15px]">
                <div className="flex flex-col items-center justify-start w-[98%] mb-[9px] gap-[21px]">
                  <Img
                    src="images/img_image_629.png"
                    alt="image629_one"
                    className="w-full object-cover rounded-[12px]"
                  />
                  <div className="flex flex-col items-start justify-start w-[99%]">
                    <Text size="5xl" as="p" className="!text-blue_gray-800_09">
                      Little italy
                    </Text>
                    <Text as="p" className="mt-[7px] !text-gray-400_02">
                      Sandwiches, Brunch
                    </Text>
                    <div className="flex flex-row justify-between w-full mt-[30px]">
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-px !text-blue_gray-800"
                      >
                        * free delivery
                      </Text>
                      <div className="h-[20px] w-[18%] relative">
                        <div className="h-[15px] w-full top-[8%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                        <Text
                          size="4xl"
                          as="p"
                          className="w-max left-[2%] bottom-0 top-0 m-auto !text-blue_gray-700 absolute"
                        >
                          $$
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[33%] p-[13px] bg-white-A700_01 shadow-xs rounded-[15px]">
                <div className="flex flex-col items-start justify-start w-full mb-[3px]">
                  <div className="h-[158px] w-full relative">
                    <div className="flex flex-row justify-center w-[29%] right-[3%] top-[7%] p-2 m-auto border-blue_gray-800 border border-solid bg-white-A700_01 shadow-xs absolute rounded-[12px]">
                      <Text
                        size="2xl"
                        as="p"
                        className="mb-[3px] !text-blue_gray-800 text-center"
                      >
                        25-35 min
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_627.png"
                      alt="image627_one"
                      className="justify-center h-[158px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[17px] ml-[18px] !text-blue_gray-800_09"
                  >
                    voBistro
                  </Text>
                  <Text as="p" className="mt-2 ml-[5px] !text-gray-400_02">
                    Breakfast, lunch, snacks
                  </Text>
                  <div className="flex flex-row justify-between items-center w-[99%] mt-[29px] ml-[3px]">
                    <Text size="4xl" as="p" className="!text-blue_gray-700">
                      w free delivery
                    </Text>
                    <div className="h-[23px] w-[18%] relative">
                      <div className="h-[15px] w-full top-[10%] right-0 left-0 m-auto border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs absolute rounded-md" />
                      <Text
                        size="5xl"
                        as="p"
                        className="w-max left-[5%] bottom-0 top-0 m-auto !text-blue_gray-800 absolute"
                      >
                        $$
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start w-[57%] left-[7%] top-[8%] m-auto absolute">
            <Img
              src="images/img_image_630.png"
              alt="image630_one"
              className="w-[10%] mt-[25px] object-cover rounded-[12px]"
            />
            <Img
              src="images/img_image_632.png"
              alt="image632_one"
              className="w-[52%] object-cover rounded-[12px]"
            />
          </div>
          <Img
            src="images/img_image_639.png"
            alt="image639_one"
            className="h-[205px] w-[27%] right-[4%] top-[11%] m-auto object-cover absolute rounded-[12px]"
          />
          <div className="flex flex-row justify-start items-center w-[10%] gap-7 right-[28%] top-[6%] m-auto absolute">
            <Img
              src="images/img_image_635.png"
              alt="image635_one"
              className="w-[41%] mt-px object-cover rounded-[12px]"
            />
            <Img
              src="images/img_image_622.png"
              alt="image622_one"
              className="w-[40px] object-cover rounded-[12px]"
            />
          </div>
          <Img
            src="images/img_image_626.png"
            alt="image626_one"
            className="h-[35px] w-[3%] right-[23%] top-[7%] m-auto object-cover absolute rounded-[12px]"
          />
          <Text
            size="14xl"
            as="p"
            className="w-[14%] left-[3%] top-0 m-auto !text-blue_gray-900_02 absolute"
          >
            CHAIN FLOW
          </Text>
        </div>
        <footer className="flex justify-center items-center w-full pl-[63px] pr-14 py-[63px] bg-gray-400_01 shadow-xs rounded-[12px]">
          <div className="flex flex-row justify-center w-full mb-[49px] mx-auto max-w-[1217px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-between items-center w-full gap-[488px]">
                <Text
                  size="14xl"
                  as="p"
                  className="w-[13%] !text-blue_gray-900_02"
                >
                  CHAIN FLOW
                </Text>
                <div className="flex flex-row justify-between items-start w-[48%]">
                  <div className="flex flex-col items-start justify-start w-[59%] gap-[11px]">
                    <div className="flex flex-row justify-between w-[77%]">
                      <Text
                        size="3xl"
                        as="p"
                        className="mb-[3px] !text-blue_gray-800_09"
                      >
                        Socia
                      </Text>
                      <Text size="3xl" as="p">
                        Get help
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-col items-start justify-start gap-3">
                        <a href="#">
                          <Text size="2xl" as="p">
                            Facebook
                          </Text>
                        </a>
                        <ul className="flex flex-col items-center justify-start gap-11">
                          <li>
                            <a href="#">
                              <Text size="3xl" as="p">
                                Instagram
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text size="3xl" as="p">
                                Linkedin
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-3">
                        <a href="#">
                          <Text size="2xl" as="p">
                            Partner with us
                          </Text>
                        </a>
                        <ul className="flex flex-col items-center justify-start gap-[66px]">
                          <li>
                            <a href="#">
                              <Text
                                size="2xl"
                                as="p"
                                className="!text-blue_gray-700"
                              >
                                Add your restaurant
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text
                                size="2xl"
                                as="p"
                                className="!text-blue_gray-700"
                              >
                                Sign up to deliver
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="flex flex-col items-start justify-start gap-[29px]">
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-700">
                          Read our blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-700">
                          Buy gift card
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-700">
                          Restaurants nearby
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="2xl" as="p" className="!text-blue_gray-700">
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
      </div>
    </>
  );
}
