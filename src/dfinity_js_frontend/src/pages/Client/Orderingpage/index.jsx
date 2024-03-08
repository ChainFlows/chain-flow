import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../../components/Text";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";

export default function OrderingpagePage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-center w-full p-[52px] bg-gray-700_01 shadow-sm">
        <div className="flex flex-row justify-center items-center w-full mb-[7px] max-w-[1157px]">
          <div className="flex flex-col items-start justify-start w-[31%]">
            <Input
              color="gray_700_01"
              size="5xl"
              name="address"
              placeholder="Delivery address"
              className="w-full border-gray-500_03 border border-solid"
            />
            <div className="flex flex-row justify-start items-center w-full mt-[29px] gap-[7px]">
              <Button
                color="blue_gray_900_05"
                size="8xl"
                className="min-w-[100px] rounded-[20px]"
              >
                popular
              </Button>
              <Button
                color="gray_700_01"
                size="8xl"
                className="min-w-[112px] rounded-[20px]"
              >
                breakfast
              </Button>
              <div className="h-[37px] w-[36%] relative">
                <div className="justify-center h-[37px] w-[98%] left-0 bottom-0 right-0 top-0 m-auto bg-gray-700_01 shadow-xs absolute rounded-[12px]" />
                <Text
                  size="3xl"
                  as="p"
                  className="w-max right-0 bottom-0 top-0 m-auto absolute"
                >
                  sandwiches
                </Text>
              </div>
            </div>
            <Text size="9xl" as="p" className="mt-28 ml-0.5">
              Sandwiches
            </Text>
            <Text size="6xl" as="p" className="mt-[76px] ml-0.5">
              Artichoke Sandwich
            </Text>
            <Text size="3xl" as="p" className="mt-5 ml-0.5">
              Artichoke, spinach, cheddar and m
            </Text>
            <div className="flex flex-row justify-start items-start mt-[73px] gap-[19px]">
              <Text size="6xl" as="p" className="mt-1.5">
                $7.50
              </Text>
              <Button
                color="gray_700"
                size="8xl"
                className="min-w-[87px] rounded-[20px]"
              >
                Popular
              </Button>
            </div>
            <Text
              size="3xl"
              as="p"
              className="w-[92%] mt-[67px] ml-0.5 !leading-6"
            >
              Egg Sandwich
              <br />
              Tomato, mozzarella topped with fril
            </Text>
            <div className="flex flex-row justify-start items-center mt-[88px] gap-[15px]">
              <Text size="6xl" as="p">
                $5.70
              </Text>
              <Button
                color="gray_700"
                size="10xl"
                className="min-w-[99px] rounded-[23px]"
              >
                Popular
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[42%] ml-[-5px] p-3.5 z-[2] bg-white-A700_02 shadow-xs rounded-[9px]">
            <div className="flex flex-col items-center justify-start w-[99%] my-[9px]">
              <div className="flex flex-row justify-end w-[99%] p-[17px] bg-blue_gray-100 rounded-[12px]">
                <div className="h-[25px] w-[25px] mb-[182px] mr-px bg-blue_gray-100 rounded-[12px]" />
              </div>
              <div className="flex flex-row justify-between items-start w-[97%] mt-[27px]">
                <Text size="6xl" as="p" className="mt-1.5">
                  Artichoke Sandwich
                </Text>
                <Button
                  color="amber_300"
                  size="8xl"
                  className="min-w-[87px] rounded-[20px]"
                >
                  Popular
                </Button>
              </div>
              <Text size="3xl" as="p" className="mt-3.5">
                $7.50
              </Text>
              <Text size="2xl" as="p" className="w-[92%] mt-[21px] !leading-5">
                Artichoke, spinach, vegan cheddar and mushrooms
                <br />
                Vegan friendly option
              </Text>
              <Text size="3xl" as="p" className="mt-[46px]">
                Toppings
              </Text>
              <Text size="2xl" as="p" className="mt-[21px]">
                Choose up to 4 aditional items
              </Text>
              <div className="flex flex-row justify-between items-center w-full mt-[19px]">
                <div className="flex flex-row justify-start items-center w-[28%] gap-[15px]">
                  <div className="h-[25px] w-[23%] bg-blue_gray-100 rounded-[12px]" />
                  <Text size="3xl" as="p">
                    Avocado
                  </Text>
                </div>
                <Text size="3xl" as="p">
                  + $l.50
                </Text>
              </div>
              <div className="flex flex-row justify-between items-start w-[98%] mt-[9px]">
                <div className="flex flex-row justify-start items-center w-[34%] gap-5">
                  <div className="h-[21px] w-[20px] bg-blue_gray-100 rounded-[50%]" />
                  <Text size="2xl" as="p">
                    Chilli peppers
                  </Text>
                </div>
                <Text size="2xl" as="p" className="mt-0.5">
                  + $1.00
                </Text>
              </div>
              <div className="flex flex-row justify-between w-full mt-[38px]">
                <Text size="3xl" as="p" className="mb-px">
                  Subtota
                </Text>
                <Text size="3xl" as="p">
                  $7.50
                </Text>
              </div>
              <div className="flex flex-row justify-center items-center w-[94%] mt-[51px]">
                <div className="h-[22px] w-[6%] bg-blue_gray-100 rounded-[11px]" />
                <div className="h-[23px] w-[22px] ml-[41px] bg-blue_gray-100 rounded-[50%]" />
                <Link to="/ProductDetails">
                  <Button
                    color="blue_gray_900_02"
                    size="16xl"
                    className="ml-[29px] min-w-[300px] rounded-[24px]"
                  >
                    Add to Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-[29%] ml-[-2px] gap-[70px]">
            <div className="h-[32px] w-[32px] bg-blue_gray-100 rounded-[12px]" />
            <div className="flex flex-col items-center justify-start w-[99%] mr-[5px] gap-[61px]">
              <div className="h-[186px] w-full bg-blue_gray-100 rounded-[12px]" />
              <div className="flex flex-row justify-end w-full p-[25px] bg-blue_gray-100 rounded-[12px]">
                <div className="h-[24px] w-[24px] mt-28 mr-3 bg-blue_gray-100 rounded-[50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
