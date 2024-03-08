import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../../assets/images";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Input } from "../../../components/Input";
import Sidebar1 from "../../../components/Sidebar1";

export default function ProductCategoriesPage() {
  const [searchBarValue15, setSearchBarValue15] = React.useState("");

  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-start items-start w-full gap-9 bg-gray-200 shadow-sm">
        <Sidebar1 className="w-[116px] h-screen top-0 bg-gray-400_70 shadow-xs !sticky overflow-auto rounded-[12px]" />
        <div className="flex flex-row justify-start w-[86%] mt-12">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <Text size="13xl" as="p">
                Select Categories
              </Text>
              <Img
                src="images/img_image_295.png"
                alt="image295_one"
                className="h-[44px] w-[44px] rounded-[50%]"
              />
            </div>
            <Input
              color="white_A700_01"
              size="lg"
              name="search"
              placeholder="Search Product Categories"
              value={searchBarValue15}
              onChange={(e) => setSearchBarValue15(e)}
              suffix={
                searchBarValue15?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue15("")}
                    height={26}
                    width={26}
                  />
                ) : (
                  <Img
                    src="images/img_image_307.png"
                    alt="Image 307"
                    className="w-[26px] h-[26px] cursor-pointer"
                  />
                )
              }
              className="w-[39%] mt-[17px] ml-[3px] gap-[35px] border-gray-500_03 border border-solid rounded-[20px]"
            />
            <div className="w-[99%] mt-[52px] ml-[3px] gap-[30px] grid-cols-5 grid">
              <div className="flex flex-col items-center justify-center w-full gap-2 p-[13px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Link to="/ProductsUnderCategory">
                  <Img
                    src="images/img_image_294.png"
                    alt="circleimage"
                    className="h-[84px] w-[84px] mt-[9px] rounded-[50%]"
                  />
                </Link>
                <Link to="/ProductsUnderCategory">
                  <Text size="3xl" as="p" className="mb-[9px]">
                    Agricultural Products
                  </Text>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-1.5 p-[17px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_294.png"
                  alt="image294_one"
                  className="h-[84px] w-[84px] mt-[5px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="mb-[7px]">
                  Petroleum Products
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-1.5 p-[22px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_294.png"
                  alt="image294_one"
                  className="h-[84px] w-[84px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="mb-0.5">
                  Wood & Timber
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[5px] p-[15px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_294.png"
                  alt="image294_one"
                  className="h-[84px] w-[84px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="w-[70%]">
                  Automotive & <br />
                  Accessories
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[5px] p-[15px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_294.png"
                  alt="image294_one"
                  className="h-[84px] w-[84px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="w-[73%]">
                  Kitchenware & <br />
                  Cookware
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-2.5 bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_297.png"
                  alt="image297_one"
                  className="h-[85px] w-[85px] mt-px rounded-[50%]"
                />
                <Text size="3xl" as="p" className="w-[64%] !leading-[22px]">
                  Additives & <br />
                  Preservatives
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2 p-4 bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_296.png"
                  alt="image296_one"
                  className="h-[84px] w-[84px] mt-1.5 rounded-[50%]"
                />
                <Text size="2xl" as="p" className="mb-[9px]">
                  Electronic Components{" "}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-1.5 p-[22px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_294.png"
                  alt="image294_one"
                  className="h-[84px] w-[84px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="mb-0.5">
                  Chemicals
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-1.5 p-6 bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_304.png"
                  alt="image304_one"
                  className="h-[80px] w-[80px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="mb-0.5">
                  Plastics{" "}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-1.5 p-[27px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_299.png"
                  alt="image299_one"
                  className="w-[75px] object-cover rounded-[12px]"
                />
                <Text size="3xl" as="p">
                  Textiles & Fibers
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[23px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_294.png"
                  alt="image294_one"
                  className="h-[84px] w-[84px] rounded-[50%]"
                />
                <Text size="3xl" as="p">
                  Construction
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2 p-[17px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_301.png"
                  alt="image301_one"
                  className="h-[84px] w-[84px] mt-[5px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="mb-[5px]">
                  Packaging Materials
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-1.5 p-3.5 bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_294.png"
                  alt="image294_one"
                  className="h-[84px] w-[84px] mt-2 rounded-[50%]"
                />
                <Text size="3xl" as="p" className="mb-2.5">
                  Minerals & Fertilizers
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-1.5 p-[22px] bg-blue_gray-900_0c shadow-xs rounded-[12px]">
                <Img
                  src="images/img_image_298.png"
                  alt="image298_one"
                  className="h-[84px] w-[84px] rounded-[50%]"
                />
                <Text size="3xl" as="p" className="mb-0.5">
                  Metals{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
