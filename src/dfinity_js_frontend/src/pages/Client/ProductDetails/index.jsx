import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import Footer1 from "../../../components/Footer1";
import Header3 from "../../../components/Header3";

export default function ProductDetailsPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-200 shadow-sm">
        <Header3 className="flex flex-row justify-center items-center w-full p-[19px] bg-gray-200 shadow-xs rounded-[12px]" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start w-full p-[17px] z-[1] bg-gray-400_70 shadow-xs rounded-[12px]">
            <div className="flex flex-row justify-between items-center w-[51%] ml-[15px]">
              <div className="flex flex-row justify-start items-center gap-[22px]">
                <Text as="p">Product Category</Text>
                <Text size="2xl" as="p">
                  Brand
                </Text>
              </div>
              <Text size="2xl" as="p">
                Size
              </Text>
              <div className="flex flex-row justify-between w-auto gap-[47px]">
                <Text size="2xl" as="p" className="mb-px">
                  Material
                </Text>
                <Text size="2xl" as="p">
                  Price
                </Text>
              </div>
              <Text as="p">Availability</Text>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full mt-[-3px] p-[18px] bg-gray-200 shadow-xs rounded-[12px]">
            <div className="flex flex-row justify-start w-full mb-[27px] mx-auto max-w-[1055px]">
              <div className="flex flex-row justify-start items-start w-full">
                <div className="flex flex-col items-start justify-start w-[15%] gap-[18px]">
                  <Text size="2xl" as="p" className="ml-6 !text-gray-500_02">
                    Go Back
                  </Text>
                  <div className="flex flex-col items-center justify-start gap-2.5">
                    <Img
                      src="images/img_image_67.png"
                      alt="imagesixtyseven"
                      className="w-full object-cover rounded-[12px]"
                    />
                    <Img
                      src="images/img_image_49.png"
                      alt="imagefortynine"
                      className="w-full object-cover rounded-[12px]"
                    />
                    <Img
                      src="images/img_image_65.png"
                      alt="imagesixtyfive"
                      className="w-[98%] object-cover rounded-[12px]"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_image_68.png"
                  alt="imagesixtyeight"
                  className="w-[45%] mt-8 ml-2.5 object-cover rounded-[12px]"
                />
                <div className="flex flex-col items-start justify-start w-[36%] mt-9 ml-[43px]">
                  <div className="flex flex-row justify-between items-center w-full ml-[3px]">
                    <Text size="8xl" as="p">
                      Colorful Dress
                    </Text>
                    <Button
                      size="7xl"
                      className="!text-gray-700_02 border-gray-600_04 border border-solid min-w-[122px] rounded-[20px]"
                    >
                      Buy Now
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start items-start w-[50%] mt-[17px] gap-[9px]">
                    <Img
                      src="images/img_image_44.png"
                      alt="imagefortyfour"
                      className="w-[44px] object-cover rounded-[12px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[72%] mt-[3px] gap-[21px]">
                      <Text as="p" className="ml-0.5">
                        Seller Information
                      </Text>
                      <Text size="5xl" as="p">
                        *****
                      </Text>
                    </div>
                  </div>
                  <Text as="p" className="w-[92%] mt-11 ml-[3px] !leading-[18px]">
                    This colorful dress is perfect for any occasion. It
                    <br />
                    is brand new with tags and made with high
                    <br />
                    quality materials. Available in various sizes.
                    <br />
                    Limited stock, so grab yours now
                  </Text>
                  <div className="flex flex-row justify-center items-center mt-[120px] ml-3">
                    <Link to="/MakeOrderRequest">
                    <Button color="blue_gray_900_02" size="14xl" className="min-w-[239px] !rounded-[12px]">
                      Make an Order Request
                    </Button>
                    </Link>
                    <Img
                      src="images/img_image_63.png"
                      alt="imagesixtythree"
                      className="w-[9%] ml-9 object-cover rounded-[12px]"
                    />
                    <Img src="images/img_maps_ugc_1.svg" alt="mapsugcone_one" className="h-[24px] w-[24px] ml-[17px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="flex justify-center items-center w-full mt-[37px] pl-14 pr-16 py-16 bg-gray-400_03 shadow-xs rounded-[12px]" />
      </div>
    </>
  );
}
