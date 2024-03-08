import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../../assets/images";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { SelectBox } from "../../../components/SelectBox";
import { Slider } from "../../../components/Slider"

import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CompanyOverviewPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue32, setSearchBarValue32] = React.useState("");

  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start items-start w-full gap-[29px] bg-gray-200 shadow-sm">
        <Sidebar
          width="116px !important"
          className="h-screen top-0 bg-gray-400_70 shadow-xs !sticky overflow-auto rounded-[12px]"
        >
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                height: "43px !important",
              },
            }}
            className="flex flex-col items-center justify-start w-full mt-24 mb-[1930px] gap-[50.00px] px-[35px]"
          >
            <MenuItem>
              <Img src="images/img_image_195.png" alt="image195_one" className="w-[42px] object-cover rounded-[12px]" />
            </MenuItem>
            <MenuItem>
              <Img src="images/img_image_214.png" alt="image214_one" className="w-[80%] object-cover rounded-[12px]" />
            </MenuItem>
            <MenuItem>
              <Img src="images/img_image_193.png" alt="image193_one" className="w-[32px] object-cover rounded-[12px]" />
            </MenuItem>
            <MenuItem>
              <Img src="images/img_image_186.png" alt="image186_one" className="w-[68%] object-cover rounded-[12px]" />
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="flex flex-col items-center justify-start w-[76%]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-start items-center w-[79%] gap-[21px]">
                <Input
                  color="white_A700_01"
                  size="4xl"
                  name="search"
                  placeholder="Search for products"
                  value={searchBarValue32}
                  onChange={(e) => setSearchBarValue32(e)}
                  suffix={searchBarValue32?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue32("")} /> : null}
                  className="w-[84%] rounded-[24px]"
                />
                <Button color="blue_gray_900_02" size="16xl" className="min-w-[115px] rounded-[28px]">
                  Add
                </Button>
              </div>
              <Img src="images/img_image_189.png" alt="image189_one" className="h-[52px] w-[52px] rounded-[50%]" />
            </div>
            <Text size="12xl" as="p" className="mt-6 ml-[3px]">
              Company A/Supplier
            </Text>
            <div className="flex flex-row justify-start items-start w-full mt-[45px] gap-[29px]">
              <div className="flex flex-col items-center justify-start w-[66%] gap-7">
                <div className="flex flex-row justify-start w-full p-[29px] bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                  <div className="flex flex-col items-start justify-start w-[50%] mt-2.5 mb-[22px]">
                    <Text size="4xl" as="p">
                      Overview
                    </Text>
                    <Text as="p" className="mt-[31px] ml-[92px]">
                      Total Revenue
                    </Text>
                    <div className="flex flex-row justify-between w-[96%] ml-[15px]">
                      <Img src="images/img_credit_card_1.svg" alt="creditcardone" className="h-[40px] w-[40px] mb-px" />
                      <Text size="12xl" as="p">
                        $9,876.33
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end w-full p-[13px] bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                  <div className="flex flex-col items-center justify-start w-[97%] mt-4 mr-1 gap-8">
                    <div className="flex flex-row justify-between items-center w-full">
                      <Text size="3xl" as="p">
                        Completed Jobs
                      </Text>
                      <SelectBox
                        size="xs"
                        indicator={<Img src="images/img_arrow_drop_down_1.svg" alt="Arrow drop down 1" />}
                        name="search"
                        placeholder="Search by SKU"
                        options={dropDownOptions}
                        className="w-[23%] gap-px !text-gray-400_02 shadow-xl rounded-[15px]"
                      />
                    </div>
                    <div className="flex flex-row justify-center w-[97%]">
                      <div className="flex flex-row justify-center items-start w-full">
                        <div className="flex flex-col items-start justify-start w-[4%] gap-[47px] z-[1]">
                          <Text size="2xl" as="p">
                            30
                          </Text>
                          <Text size="2xl" as="p">
                            24
                          </Text>
                          <Text size="2xl" as="p">
                            16
                          </Text>
                          <Text size="2xl" as="p">
                            8
                          </Text>
                          <Text size="2xl" as="p">
                            0
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[97%] mt-[11px] gap-[23px]">
                          <Img src="images/img_graph.svg" alt="graph_one" className="h-[241px]" />
                          <div className="flex flex-row justify-between items-center w-[98%]">
                            <Text size="2xl" as="p">
                              July
                            </Text>
                            <div className="flex flex-row justify-between w-auto">
                              <Text as="p" className="mt-[3px]">
                                August
                              </Text>
                              <Text as="p">Septemb</Text>
                              <Text as="p">October</Text>
                              <Text as="p">Novembe</Text>
                              <Text as="p">Decembe</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Tabs
                  className="flex flex-col items-start justify-end w-full p-[21px] bg-blue_gray-900_0c shadow-xs rounded-[19px]"
                  selectedTabClassName="!text-gray-900_01 bg-blue_gray-900_0c shadow-xs rounded-[20px]"
                  selectedTabPanelClassName="mt-[88px] mb-[7px] ml-[7px] relative tab-panel--selected"
                >
                  <Text size="6xl" as="p" className="mt-4 ml-[9px]">
                    Jobs
                  </Text>
                  <TabList className="flex flex-row justify-between w-[98%] mt-5 ml-[9px] gap-[130px] p-[17px]">
                    <Tab className="mt-0.5 ml-[13px] text-gray-900_01 text-[11px] font-normal">Ongoing Deliveries</Tab>
                    <Tab className="text-gray-900_01 text-[11px] font-normal">On Joblist</Tab>
                    <Tab className="mr-[52px] text-gray-900_01 text-[11px] font-normal">New Orders</Tab>
                  </TabList>
                  {[...Array(3)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} className="w-[99%] absolute">
                      <div className="flex flex-col items-center justify-start w-[99%] mt-[88px] mb-[7px] ml-[7px]">
                        <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                          <div className="h-[3px] w-[98%] bg-gray-400_02" />
                          <div className="flex flex-col w-full pb-[18px] gap-[17px]">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[31%] gap-[15px]">
                                  <Img
                                    src="images/img_image_181.png"
                                    alt="product_details"
                                    className="h-[69px] w-[69px] rounded-[50%]"
                                  />
                                  <Text size="2xl" as="p">
                                    Product Details
                                  </Text>
                                </div>
                                <div className="flex flex-col items-end justify-start gap-[9px]">
                                  <Text size="2xl" as="p">
                                    al-199.99
                                  </Text>
                                  <Button
                                    size="md"
                                    className="border-gray-600_07 border border-solid min-w-[58px] !rounded-[12px]"
                                  >
                                    view
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="w-[645px] h-[3px] bg-gray-400_02" />
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-start gap-[17px]">
                                  <Img
                                    src="images/img_image_185.png"
                                    alt="image185_one"
                                    className="w-[33%] object-cover rounded-[12px]"
                                  />
                                  <Text size="2xl" as="p" className="mt-6">
                                    Product Details
                                  </Text>
                                </div>
                                <div className="flex flex-col items-end justify-start gap-[9px]">
                                  <Text size="2xl" as="p">
                                    al-199.99
                                  </Text>
                                  <Button
                                    size="md"
                                    className="border-gray-600_07 border border-solid min-w-[58px] !rounded-[12px]"
                                  >
                                    view
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="w-[645px] h-[3px] bg-gray-400_02" />
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-start gap-4">
                                  <Img
                                    src="images/img_image_180.png"
                                    alt="image180_one"
                                    className="w-[66px] object-cover rounded-[12px]"
                                  />
                                  <Text size="2xl" as="p" className="mt-6">
                                    Product Details
                                  </Text>
                                </div>
                                <div className="flex flex-col items-end justify-start gap-[9px]">
                                  <Text size="2xl" as="p">
                                    al-199.99
                                  </Text>
                                  <Button
                                    size="md"
                                    className="border-gray-600_07 border border-solid min-w-[58px] !rounded-[12px]"
                                  >
                                    view
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="w-[645px] h-[3px] bg-gray-400_02" />
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[30%] gap-[15px]">
                                  <Img
                                    src="images/img_image_192.png"
                                    alt="image192_one"
                                    className="h-[69px] w-[69px] rounded-[50%]"
                                  />
                                  <Text as="p">Product Details</Text>
                                </div>
                                <div className="flex flex-col items-end justify-start gap-1.5">
                                  <Text size="2xl" as="p">
                                    al-199.99
                                  </Text>
                                  <Button
                                    size="lg"
                                    className="border-gray-600_07 border border-solid min-w-[62px] !rounded-[12px]"
                                  >
                                    view
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href=" View All"
                            className="flex justify-center items-center w-full h-[39px] px-[35px] py-3 bg-white-A700_01 text-shadow-ts1 max-w-[648px] rounded-[19px]"
                          >
                            <Text size="2xl" as="p" className="!text-gray-700_02">
                              View All
                            </Text>
                          </a>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
                <div className="flex flex-col items-center justify-end w-full gap-[25px] p-4 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                  <Text size="3xl" as="p" className="mt-[22px]">
                    Best Selling Products
                  </Text>
                  <div className="w-[98%]">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 13 } }}
                      disableDotsControls
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      items={[...Array(39)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="flex flex-col items-center justify-start p-[17px] mx-2.5 bg-gray-500 shadow-xs rounded-[12px]">
                            <div className="flex flex-row justify-center items-start h-[55px] w-[56px] mb-7 bg-gray-300_01 shadow-xs rounded-[12px]">
                              <div className="flex flex-col items-start justify-start w-[93%] mb-[5px] gap-[7px]">
                                <div className="flex flex-row justify-center w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-row justify-center w-full p-[5px] bg-gray-300_01 shadow-xs rounded-[12px]">
                                      <Text size="2xl" as="p" className="mb-px text-center">
                                        N5
                                      </Text>
                                    </div>
                                    <Text size="lg" as="p" className="mt-[-9px] text-center">
                                      CHANEL
                                    </Text>
                                  </div>
                                </div>
                                <Text size="xs" as="p" className="ml-[3px] !text-gray-500_02 text-center">
                                  EAU (E PIRFUM
                                </Text>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <div className="flex flex-row justify-between w-[16%] mb-2.5">
                    <Img src="images/img_previous_page.svg" alt="previouspage" className="h-[32px] w-[32px]" />
                    <Img
                      src="images/img_arrow_right_gray_900_01.svg"
                      alt="arrowright_one"
                      className="h-[32px] w-[32px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full p-7 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                  <div className="flex flex-col items-start justify-start w-[95%] mt-[9px] ml-[3px]">
                    <Text size="3xl" as="p" className="ml-px">
                      Expand Your Customer Base
                    </Text>
                    <Text as="p" className="mt-[31px] ml-px">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, elit sed
                    </Text>
                    <Text as="p" className="mt-2.5 ml-px">
                      pellentesque bibendum, est ligula feugiat libero, eu convallis justo est et elit. Nulla
                    </Text>
                    <div className="flex flex-row justify-start mt-[30px]">
                      <Button
                        size="6xl"
                        leftIcon={<Img src="images/img_logo_facebook_1.svg" alt="Logo facebook 1" />}
                        className="gap-3 !text-blue_gray-900_02 border-gray-600_01 border border-solid min-w-[171px] rounded-[19px]"
                      >
                        Facebook
                      </Button>
                      <Button
                        size="6xl"
                        leftIcon={<Img src="images/img_logo_twitter_1.svg" alt="Logo twitter 1" />}
                        className="ml-[50px] gap-3 !text-blue_gray-900_02 border-gray-600_01 border border-solid min-w-[180px] rounded-[19px]"
                      >
                        Twitter
                      </Button>
                      <Button
                        size="6xl"
                        leftIcon={<Img src="images/img_logo_linkedin_1.svg" alt="Logo linkedin 1" />}
                        className="ml-[39px] gap-[13px] !text-blue_gray-900_02 border-gray-600_01 border border-solid min-w-[174px] rounded-[19px]"
                      >
                        Linkedin
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] gap-[30px]">
                <div className="justify-center w-full gap-[15px] grid-cols-2 grid">
                  <div className="flex flex-col items-center justify-start w-full p-[11px] bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                    <Img src="images/img_transactions.svg" alt="total" className="h-[35px] w-[35px]" />
                    <Text size="lg" as="p" className="mt-[3px] text-center">
                      Total Transactions
                    </Text>
                    <Text size="4xl" as="p" className="mt-[9px] mb-2.5 text-center">
                      $20,850
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-1.5 p-2.5 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                    <Img src="images/img_expenses.svg" alt="expenses_one" className="h-[35px] w-[35px]" />
                    <div className="flex flex-col items-center justify-start w-[67%] mb-2.5 gap-2">
                      <Text size="lg" as="p" className="text-center">
                        Total Expenses
                      </Text>
                      <Text size="4xl" as="p" className="text-center">
                        $20,850
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-2.5 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                    <Img src="images/img_group_11.svg" alt="image" className="h-[35px] w-[35px]" />
                    <Text size="lg" as="p" className="mt-[5px] text-center">
                      Total Income
                    </Text>
                    <Text size="4xl" as="p" className="mt-[9px] mb-2.5 text-center">
                      $20,850
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[5px] p-2.5 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                    <Img src="images/img_group_11.svg" alt="image" className="h-[35px] w-[35px]" />
                    <div className="flex flex-col items-center justify-start w-[67%] mb-2.5 gap-[9px]">
                      <Text size="lg" as="p" className="text-center">
                        Total Revenue
                      </Text>
                      <Text size="4xl" as="p" className="text-center">
                        $20,850
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end w-full p-6 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                  <div className="flex flex-col items-start justify-start w-full mt-[13px] mb-[3px] gap-[26px]">
                    <Text size="3xl" as="p" className="ml-1.5">
                      Reviews
                    </Text>
                    <div className="flex flex-col w-[99%] ml-1 gap-[30px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                          <div className="flex flex-row justify-between items-start w-full">
                            <div className="flex flex-row justify-center w-[75%]">
                              <div className="flex flex-row justify-start items-center w-full gap-[11px]">
                                <Img
                                  src="images/img_image_194.png"
                                  alt="john_doe_one"
                                  className="h-[52px] w-[52px] rounded-[50%]"
                                />
                                <div className="flex flex-col items-start justify-start w-[70%] gap-[7px]">
                                  <Text size="2xl" as="p">
                                    John Doe
                                  </Text>
                                  <Text as="p">on Product - SKU123</Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_image_198.png"
                              alt="john_doe_three"
                              className="w-[8%] object-cover rounded-[10px]"
                            />
                          </div>
                          <Text as="p">Great product, highly</Text>
                          <div className="flex flex-row justify-between w-[53%]">
                            <Img
                              src="images/img_chat_circle_dots.svg"
                              alt="on_product"
                              className="h-[24px] w-[24px] opacity-0.78"
                            />
                            <Img
                              src="images/img_thumbs_up_1.svg"
                              alt="image"
                              className="h-[24px] w-[24px] opacity-0.78"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-start items-start w-full gap-1.5">
                          <Img
                            src="images/img_image_194.png"
                            alt="image200_one"
                            className="h-[52px] w-[52px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[80%] gap-[15px]">
                            <div className="flex flex-col items-start justify-start w-[98%] ml-[5px]">
                              <div className="flex flex-row justify-between items-center w-full">
                                <Text size="2xl" as="p">
                                  Jane Smith
                                </Text>
                                <Img
                                  src="images/img_image_211.png"
                                  alt="image211_one"
                                  className="w-[10%] object-cover rounded-[10px]"
                                />
                              </div>
                              <Text as="p" className="mt-1">
                                on Product - SKU456
                              </Text>
                              <Text as="p" className="mt-5">
                                Very useful, exceeded my
                              </Text>
                            </div>
                            <div className="flex flex-row justify-between w-[66%]">
                              <Img
                                src="images/img_chat_circle_dots.svg"
                                alt="image"
                                className="h-[24px] w-[24px] opacity-0.78"
                              />
                              <Img
                                src="images/img_thumbs_up_1.svg"
                                alt="thumbsupone_one"
                                className="h-[24px] w-[24px] opacity-0.78"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full gap-1.5">
                        <Img
                          src="images/img_image_194.png"
                          alt="image183_one"
                          className="h-[52px] w-[52px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[80%] gap-[17px]">
                          <div className="flex flex-col items-start justify-start w-[97%] ml-[7px]">
                            <div className="flex flex-row justify-between items-center w-full">
                              <Text size="2xl" as="p">
                                David Johnson
                              </Text>
                              <Img
                                src="images/img_image_205.png"
                                alt="image205_one"
                                className="w-[9%] object-cover rounded-[9px]"
                              />
                            </div>
                            <Text as="p" className="mt-1.5">
                              on Product - SKU789
                            </Text>
                            <Text as="p" className="mt-5">
                              Best product I&#39;ve ever
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between w-[66%]">
                            <Img
                              src="images/img_chat_circle_dots.svg"
                              alt="image"
                              className="h-[24px] w-[24px] opacity-0.78"
                            />
                            <Img
                              src="images/img_thumbs_up_1.svg"
                              alt="thumbsupone_one"
                              className="h-[24px] w-[24px] opacity-0.78"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="View All"
                      className="flex justify-center items-center w-[289px] h-[47px] px-[35px] py-4 bg-white-A700_01 text-shadow-ts1 rounded-[18px]"
                    >
                      <Text size="2xl" as="p" className="!text-gray-500_02">
                        View All
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full p-[22px] bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                  <div className="flex flex-col items-start justify-start w-[95%] mt-3.5 gap-8">
                    <Text size="3xl" as="p" className="ml-0.5">
                      Manage Refund Requests
                    </Text>
                    <div className="flex flex-row justify-start items-start ml-[9px] gap-[19px]">
                      <Img
                        src="images/img_image_196.png"
                        alt="image196_one"
                        className="w-[13%] mt-1 object-cover rounded-[12px]"
                      />
                      <Text as="p" className="w-[79%] !leading-[18px]">
                        You have 52 open refund
                        <br />
                        requests to process. This
                        <br />
                        includes 8 new requests
                      </Text>
                    </div>
                    <a
                      href="View All"
                      className="flex justify-center items-center w-[280px] h-[39px] px-[35px] py-3 border-gray-600_07 border border-solid bg-white-A700_01 text-shadow-ts rounded-[19px]"
                    >
                      <Text size="2xl" as="p" className="!text-gray-500_02">
                        View All
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[25px] p-[23px] bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                  <Text size="3xl" as="p" className="mt-[15px] ml-[9px]">
                    Product Ads
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full mb-[97px] gap-3">
                    <Text as="p">Need some ideas for your next product?</Text>
                    <div className="flex flex-col w-full gap-[5px]">
                      <div className="flex flex-row justify-start w-full p-2 bg-gray-400_30 shadow-xs rounded-[12px]">
                        <div className="flex flex-row justify-start items-center w-[95%] gap-3 my-[7px]">
                          <Img
                            src="images/img_image_194.png"
                            alt="product_name"
                            className="h-[52px] w-[52px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[9px]">
                            <Text size="2xl" as="p">
                              Product Name
                            </Text>
                            <Text as="p">Product details/description</Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start w-full p-2 bg-gray-400_30 shadow-xs rounded-[12px]">
                        <div className="flex flex-row justify-start items-center w-[95%] gap-3 my-[7px]">
                          <Img
                            src="images/img_image_194.png"
                            alt="image194_one"
                            className="h-[52px] w-[52px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[9px]">
                            <Text size="2xl" as="p">
                              Product Name
                            </Text>
                            <Text as="p">Product details/description</Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start w-full p-2 bg-gray-400_30 shadow-xs rounded-[12px]">
                        <div className="flex flex-row justify-start items-center w-[95%] gap-3 my-[7px]">
                          <Img
                            src="images/img_image_194.png"
                            alt="image194_one"
                            className="h-[52px] w-[52px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[9px]">
                            <Text size="2xl" as="p">
                              Product Name
                            </Text>
                            <Text as="p">Product details/description</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
