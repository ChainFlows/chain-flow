import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import Footer5 from "../../../components/Footer5";
import { Link } from "react-router-dom";

export default function OrderCompleteOnePage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-60 bg-gray-200 shadow-sm">
        <div className="flex flex-row justify-start w-full mt-[68px] mx-auto max-w-[1230px]">
          <div className="flex flex-col items-end justify-start w-full gap-[53px]">
            <div className="flex flex-row justify-between items-start w-full gap-[1034px]">
              <Text size="14xl" as="p" className="w-[13%] !text-blue_gray-900_02">
                CHAIN FLOW
              </Text>
              <Img src="images/img_image_601.png" alt="image601_one" className="h-[42px] w-[42px] rounded-[50%]" />
            </div>
            <div className="h-[366px] w-[87%] mr-[45px] relative">
              <Img
                src="images/img_image_607.png"
                alt="image607_one"
                className="justify-center h-[366px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
              />
              <Img
                src="images/img_image_606.png"
                alt="image606_one"
                className="h-[46px] w-[5%] bottom-[34%] left-[7%] m-auto object-cover absolute rounded-[12px]"
              />
            </div>
            <Text size="16xl" as="p" className="w-[38%] mr-[344px] !text-blue_gray-900_02 text-center !leading-[56px]">
              Thank you
              <br />
              for your Order
            </Text>
            <Link to="/Quotations">
            <Button color="blue_gray_900_02" size="17xl" className="mr-[461px] min-w-[234px] rounded-[24px]">
              View Submited Quotes
            </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end w-full">
          <Footer5 className="flex justify-center items-center w-full mt-60 pl-16 pr-14 py-16 bg-gray-400_01 shadow-xs rounded-[12px]" />
        </div>
      </div>
    </>
  );
}
