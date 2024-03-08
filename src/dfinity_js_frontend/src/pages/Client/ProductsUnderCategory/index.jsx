import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";

export default function ProductsUnderCategoryPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full gap-[148px] bg-gray-200 shadow-sm">
        <div className="flex flex-col items-center justify-start w-full mt-16 max-w-[1165px]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row justify-between items-start w-full ml-[5px] gap-[692px]">
              <Text
                size="14xl"
                as="p"
                className="w-[14%] !text-blue_gray-900_02"
              >
                CHAIN FLOW
              </Text>
            </div>
            <Img
              src="images/img_image_661.png"
              alt="image661_one"
              className="w-full mt-[46px] ml-[5px] object-cover rounded-[12px]"
            />
            <Text
              size="16xl"
              as="p"
              className="mt-20 ml-3 !text-blue_gray-900_02"
            >
              Bruncherie
            </Text>
            <div className="flex flex-row justify-start w-[57%] mt-[58px] ml-[5px] gap-3.5">
              <div className="flex flex-row justify-between items-center w-[76%] p-3 border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs rounded-[24px]">
                <Text
                  size="3xl"
                  as="p"
                  className="mt-[11px] mb-[7px] !text-gray-400_02"
                >
                  Delivery address
                </Text>
                <Img
                  src="images/img_image_667.png"
                  alt="image667_one"
                  className="w-[3%] mr-1.5 object-cover rounded-[50%]"
                />
              </div>
              <Button
                color="blue_gray_900_02"
                size="17xl"
                className="min-w-[146px] rounded-[24px]"
              >
                Search
              </Button>
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-6">
              <div className="flex flex-col items-start justify-start w-[48%] mb-[5px] gap-[113px]">
                <div className="flex flex-row justify-start items-center gap-[5px]">
                  <Text
                    size="3xl"
                    as="p"
                    className="flex justify-center items-center w-[109px] h-[46px] pt-[19px] pb-2 pl-[22px] pr-4 !text-white-A700_01 text-center bg-blue_gray-900_02 text-shadow-ts rounded-[23px]"
                  >
                    popular
                  </Text>
                  <Button
                    color="gray_200"
                    size="9xl"
                    className="!text-blue_gray-800_01 min-w-[114px] rounded-[22px]"
                  >
                    breakfast
                  </Button>
                  <Button
                    color="gray_200"
                    size="8xl"
                    className="!text-blue_gray-800_01 min-w-[130px] rounded-[20px]"
                  >
                    sandwiches
                  </Button>
                  <Button
                    color="gray_200"
                    size="8xl"
                    className="!text-blue_gray-800_01 min-w-[102px] rounded-[20px]"
                  >
                    desserts
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[99%] ml-[9px]">
                  <Text
                    size="9xl"
                    as="p"
                    className="ml-px !text-blue_gray-900_01"
                  >
                    Sandwiches
                  </Text>
                  <Text
                    size="6xl"
                    as="p"
                    className="mt-[75px] ml-px !text-blue_gray-900_01"
                  >
                    Artichoke Sandwich
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-[21px] ml-px !text-blue_gray-800_01"
                  >
                    Artichoke, spinach, cheddar and mushrooms
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-[68px] gap-[11px]">
                    <Text size="6xl" as="p" className="!text-blue_gray-900_01">
                      $7.50
                    </Text>
                    <Button
                      color="amber_300"
                      size="10xl"
                      className="min-w-[144px] rounded-[22px]"
                    >
                      Popular
                    </Button>
                  </div>
                  <Text
                    size="6xl"
                    as="p"
                    className="mt-[69px] ml-px !text-blue_gray-900_01"
                  >
                    Egg Sandwich
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-[19px] ml-px !text-blue_gray-800_01"
                  >
                    Tomato, mozzarella topped with fried egg and fresh chives
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-[74px] gap-5">
                    <Text size="6xl" as="p" className="!text-blue_gray-900_01">
                      $5.70
                    </Text>
                    <Button
                      color="amber_300"
                      size="8xl"
                      className="min-w-[89px] rounded-[20px]"
                    >
                      Popular
                    </Button>
                  </div>
                  <Text
                    size="6xl"
                    as="p"
                    className="mt-[70px] ml-px !text-blue_gray-900_02"
                  >
                    Chili chicken
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-[22px] ml-px !text-blue_gray-800_01"
                  >
                    Chicken, rocket and chili peppers with mayonnaise
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-[71px] gap-[27px]">
                    <Text size="5xl" as="p" className="!text-blue_gray-900_01">
                      $7.30
                    </Text>
                    <Button
                      color="amber_300"
                      size="8xl"
                      className="min-w-[87px] rounded-[20px]"
                    >
                      Populav
                    </Button>
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[75px] !text-blue_gray-900_01"
                  >
                    Turkey Sandwich
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-[18px] ml-px !text-blue_gray-800_01"
                  >
                    Turkey, mozzarella, tomato and pesto.
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-[71px] gap-[17px]">
                    <Text size="5xl" as="p" className="!text-blue_gray-900_01">
                      $7.90
                    </Text>
                    <Button
                      color="amber_300"
                      size="8xl"
                      className="min-w-[95px] rounded-[21px]"
                    >
                      Populav
                    </Button>
                  </div>
                  <Text
                    size="8xl"
                    as="p"
                    className="mt-[197px] ml-1.5 !text-blue_gray-900_01"
                  >
                    Desserts
                  </Text>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[79px] ml-px !text-blue_gray-900_02"
                  >
                    Strawberry Cheesecake
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-[19px] ml-px !text-blue_gray-800_01"
                  >
                    Topped with fresh strawberries and mint
                  </Text>
                  <div className="flex flex-row justify-start items-start mt-[73px] gap-[26px]">
                    <Text
                      size="5xl"
                      as="p"
                      className="mt-2 !text-blue_gray-900_01"
                    >
                      $4.50
                    </Text>
                    <Button
                      color="amber_300"
                      size="8xl"
                      className="min-w-[89px] rounded-[20px]"
                    >
                      Popular
                    </Button>
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[73px] ml-px !text-blue_gray-900_01"
                  >
                    Lemon Mousse
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-5 ml-px !text-blue_gray-800_01"
                  >
                    Topped with fresh oranges and berries.
                  </Text>
                  <div className="flex flex-row justify-start items-center mt-[73px] gap-6">
                    <Text size="5xl" as="p" className="!text-blue_gray-900_01">
                      $4.00
                    </Text>
                    <Button
                      color="amber_300"
                      size="8xl"
                      className="min-w-[89px] rounded-[19px]"
                    >
                      Popular
                    </Button>
                  </div>
                  <Text
                    size="5xl"
                    as="p"
                    className="mt-[71px] ml-px !text-blue_gray-900_02"
                  >
                    Homemade Granola
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="mt-[21px] ml-px !text-blue_gray-800_01"
                  >
                    Granola, greek yogurt topped with fresh peaches
                  </Text>
                  <div className="flex flex-row justify-start items-start mt-[73px] gap-[26px]">
                    <Text
                      size="5xl"
                      as="p"
                      className="mt-2 !text-blue_gray-900_01"
                    >
                      $4.30
                    </Text>
                    <Button
                      color="amber_300"
                      size="8xl"
                      className="min-w-[89px] rounded-[20px]"
                    >
                      Popular
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Link to="/OrderingPage">
                  <Img
                    src="images/img_image_663.png"
                    alt="image663_one"
                    className="w-full object-cover rounded-[12px]"
                  />
                </Link>
                <Img
                  src="images/img_image_668.png"
                  alt="image668_one"
                  className="w-full mt-[58px] object-cover rounded-[12px]"
                />
                <Img
                  src="images/img_image_664.png"
                  alt="image664_one"
                  className="w-full mt-[58px] object-cover rounded-[12px]"
                />
                <Img
                  src="images/img_image_662.png"
                  alt="image662_one"
                  className="w-full mt-[58px] object-cover rounded-[12px]"
                />
                <Img
                  src="images/img_image_666.png"
                  alt="image666_one"
                  className="w-full mt-[293px] object-cover rounded-[12px]"
                />
                <Img
                  src="images/img_image_660.png"
                  alt="image660_one"
                  className="w-full mt-[58px] object-cover rounded-[12px]"
                />
                <Img
                  src="images/img_image_665.png"
                  alt="image665_one"
                  className="w-[99%] mt-[53px] object-cover rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full pl-[63px] pr-14 py-[63px] bg-gray-400_03 shadow-xs rounded-[12px]">
          <div className="flex flex-row justify-center w-full mb-12 mx-auto max-w-[1170px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-between items-center w-full gap-[441px]">
                <Text
                  size="14xl"
                  as="p"
                  className="w-[14%] !text-blue_gray-900_02"
                >
                  CHAIN FLOW
                </Text>
                <div className="flex flex-row justify-start items-start w-[50%] gap-[82px]">
                  <div className="flex flex-col items-start justify-start w-[59%] gap-[11px]">
                    <div className="flex flex-row justify-between w-[77%]">
                      <Text
                        size="3xl"
                        as="p"
                        className="mb-0.5 !text-blue_gray-900_01"
                      >
                        Socia
                      </Text>
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-blue_gray-800_06"
                      >
                        Get help
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between w-[89%]">
                      <Text size="2xl" as="p" className="mb-px">
                        Facebook
                      </Text>
                      <Text size="2xl" as="p">
                        Partner with us
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-[82px]">
                      <Text
                        size="3xl"
                        as="p"
                        className="w-[29%] mt-px !text-blue_gray-800_06 !leading-[22px]"
                      >
                        Instagram
                        <br />
                        Linkedin
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="w-[48%] !text-blue_gray-800_06 !leading-[22px]"
                      >
                        Add your restaurant
                        <br />
                        Sign up to deliver
                      </Text>
                    </div>
                  </div>
                  <Text
                    size="2xl"
                    as="p"
                    className="w-[28%] !text-blue_gray-800_06 !leading-[22px]"
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
