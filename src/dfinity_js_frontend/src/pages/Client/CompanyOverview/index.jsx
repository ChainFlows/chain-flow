import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

import {
  Text,
  Img,
  Button,
  NotificationSuccess,
  NotificationError,
  Loader,
  SelectBox,
} from "../../../components/utils";
import * as Images from "../../../assets/images";
import Wallet from "../../../components/Wallet";
import {
  getClientCompanyActiveOrders,
  getClientCompanyCompletedOrders,
  getClientCompanyNewOrders,
  paySupplier,
} from "../../../utils/clientCompany";
import { toast } from "react-toastify";
import {
  assignSupplier,
  createOrderDetails,
  markOrderAsCompleted,
} from "../../../utils/orders";
import AddOrder from "../../order/AddOrder";
import ViewBids from "../Bids";
import PaySupplier from "../components/PaySupplier";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CompanyOverviewPage({ client }) {
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue32, setSearchBarValue32] = useState("");
  const [loading, setLoading] = useState(false);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [tab, setTab] = useState("new");

  const { id } = client;

  const saveOrder = async (data) => {
    try {
      setLoading(true);

      data.companyId = id;

      createOrderDetails(data).then((resp) => {
        console.log(resp);
        console.log(data);
        fetchNewOrders();
        toast(<NotificationSuccess text="Order added successfully." />);
      });
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a order." />);
    } finally {
      setLoading(false);
    }
  };

  // assign supplier to bid
  const assignSupplierBid = async (orderId, supplierId) => {
    try {
      setLoading(true);
      await assignSupplier(orderId, supplierId);
      fetchNewOrders();
      fetchCurrentOrders();
      toast(<NotificationSuccess text="Supplier assigned successfully." />);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast(<NotificationError text="Failed to assign supplier." />);
    }
  };

  // pay supplier
  const paySupplierFunc = async (orderId) => {
    try {
      setLoading(true);
      await paySupplier({ orderId }).then((resp) => {
        console.log("resp", resp);
        fetchCompletedOrders();
        toast(<NotificationSuccess text="Supplier paid successfully." />);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast(<NotificationError text="Failed to pay supplier." />);
    }
  };

  // mark order as delivered
  const markDelivered = async (data) => {
    try {
      setLoading(true);
      await markOrderAsCompleted(data);
      toast(<NotificationSuccess text="Order marked as delivered." />);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast(<NotificationError text="Failed to mark order as delivered." />);
    }
  };

  // function to get client completed orders
  const fetchCompletedOrders = useCallback(async () => {
    try {
      setLoading(true);
      setCompletedOrders(await getClientCompanyCompletedOrders(client.id));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  // get new orders
  const fetchNewOrders = useCallback(async () => {
    try {
      setLoading(true);
      setNewOrders(await getClientCompanyNewOrders(client.id));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  // get getClientCompanyActiveOrders
  const fetchCurrentOrders = useCallback(async () => {
    try {
      setLoading(true);
      setCurrentOrders(await getClientCompanyActiveOrders(client.id));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchCompletedOrders();
    fetchCurrentOrders();
    fetchNewOrders();
    // fetchOrders();
  }, []);

  console.log("new", newOrders);
  console.log("current", currentOrders);
  console.log("completed", completedOrders);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>dApp Hackthon-Javascript</title>
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
          </Helmet>
          <div className="flex flex-row justify-start items-start w-full h-full bg-gray-200 shadow-sm">
            <div className="mx-auto flex flex-col items-center justify-start w-[85%]">
              <div className="flex flex-col items-start justify-start w-full mt-[2rem]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row justify-end items-center w-full gap-[21px]">
                    <AddOrder save={saveOrder} />
                    <Button
                      color="blue_gray_900_02"
                      size="12xl"
                      className="min-w-[115px] rounded-[28px]"
                    >
                      Update Profile
                    </Button>
                    <Wallet />
                  </div>
                </div>
                <Text size="12xl" as="p" className="mt-6 ml-[3px]">
                  Company {client.name} Overview
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
                          <Img
                            src={Images.img_credit_card_1}
                            alt="creditcardone"
                            className="h-[40px] w-[40px] mb-px"
                          />
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
                            indicator={
                              <Img
                                src={Images.img_arrow_drop_down_1}
                                alt="Arrow drop down 1"
                              />
                            }
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
                              <Img
                                src={Images.img_graph}
                                alt="graph_one"
                                className="h-[241px]"
                              />
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
                      selectedTabPanelClassName="mt-[20px] mb-[7px] ml-[7px] relative tab-panel--selected"
                    >
                      <Text size="6xl" as="p" className="mt-4 ml-[9px]">
                        Jobs
                      </Text>
                      <div className="flex flex-col items-start justify-between w-full mt-4 gap-[29px] ">
                        <TabList className="flex flex-row justify-between mt-2 w-[98%] items-center p-3 bg-white-A700_01 shadow-xs rounded-[25px]">
                          <Tab className="mt-0.5 ml-[13px] text-gray-900_01 text-[11px] font-normal">
                            <Button
                              color="blue_gray_900_0c"
                              size="6xl"
                              className="ml-px rounded-[20px]"
                              onClick={() => setTab("new")}
                            >
                              New Orders
                            </Button>
                          </Tab>
                          <Tab className="mt-0.5 ml-[13px] text-gray-900_01 text-[11px] font-normal">
                            <Button
                              color="blue_gray_900_0c"
                              size="6xl"
                              className="ml-px rounded-[20px]"
                              onClick={() => setTab("maintainance")}
                            >
                              Current Orders
                            </Button>
                          </Tab>
                          <Tab className="mt-0.5 ml-[13px] text-gray-900_01 text-[11px] font-normal">
                            <Button
                              color="blue_gray_900_0c"
                              size="6xl"
                              className="ml-px rounded-[20px]"
                              onClick={() => setTab("completed")}
                            >
                              Completed Orders
                            </Button>
                          </Tab>
                        </TabList>
                      </div>
                      {[...Array(3)].map((_, index) => (
                        <TabPanel
                          key={`tab-panel${index}`}
                          className="w-[99%] absolute"
                        >
                          <div className="flex flex-col items-center justify-start w-[99%] mb-[7px] ml-[7px]">
                            <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                              <div className="flex flex-col w-full pb-[18px] gap-[17px]">
                                <div className="h-[3px] w-[98%] bg-gray-400_02" />
                                {tab === "new" ? (
                                  <>
                                    {newOrders.map((order, index) => (
                                      <div
                                        key={index}
                                        className="flex flex-row justify-center w-full p-2 bg-white-A700_01 shadow-xs rounded-[12px]"
                                      >
                                        <div className="flex flex-row justify-start items-center w-[95%] gap-[17px]">
                                          <Img
                                            src={Images.img_image_389}
                                            alt="image389_one"
                                            className="w-[86px] object-cover rounded-[12px]"
                                          />
                                          <div className="flex flex-col w-[84%]">
                                            <div className="flex flex-row justify-between items-center">
                                              <Text
                                                size="3xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderName}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.priority}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.category}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderWeight}
                                              </Text>
                                            </div>
                                            <div className="mt-2 flex justify-between items-center">
                                              <Text size="2xl" as="p">
                                                {order.deliveryAddress}
                                              </Text>
                                              <ViewBids
                                                order={order}
                                                save={assignSupplierBid}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </>
                                ) : tab === "maintainance" ? (
                                  <>
                                    {currentOrders.map((order, index) => (
                                      <div
                                        key={index}
                                        className="flex flex-row justify-center w-full p-2 bg-white-A700_01 shadow-xs rounded-[12px]"
                                      >
                                        <div className="flex flex-row justify-start items-center w-[95%] gap-[17px]">
                                          <Img
                                            src={Images.img_image_389}
                                            alt="image389_one"
                                            className="w-[86px] object-cover rounded-[12px]"
                                          />
                                          <div className="flex flex-col w-[84%]">
                                            <div className="flex flex-row justify-between items-center">
                                              <Text
                                                size="3xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderName}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderStatus}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.priority}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.expectedDelivery}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderWeight}
                                              </Text>
                                            </div>
                                            <div className="mt-2 flex justify-between items-center">
                                              <Text size="2xl" as="p">
                                                {order.deliveryAddress}
                                              </Text>
                                              <Text size="2xl" as="p">
                                                {order.supplierId}
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </>
                                ) : (
                                  <>
                                    {completedOrders.map((order, index) => (
                                      <div
                                        key={index}
                                        className="flex flex-row justify-center w-full p-2 bg-white-A700_01 shadow-xs rounded-[12px]"
                                      >
                                        <div className="flex flex-row justify-start items-center w-[95%] gap-[17px]">
                                          <Img
                                            src={Images.img_image_389}
                                            alt="image389_one"
                                            className="w-[86px] object-cover rounded-[12px]"
                                          />
                                          <div className="flex flex-col w-[84%]">
                                            <div className="flex flex-row justify-between items-center">
                                              <Text
                                                size="3xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderName}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.delivery}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.category}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderType}
                                              </Text>
                                              <Text
                                                size="2xl"
                                                as="p"
                                                className="mb-px "
                                              >
                                                {order.orderWeight}
                                              </Text>
                                            </div>
                                            <div className="mt-2 flex justify-between items-center">
                                              <Text size="2xl" as="p">
                                                {order.deliveryAddress}
                                              </Text>
                                              <Text size="2xl" as="p">
                                                {order.supplierId}
                                              </Text>
                                              <PaySupplier
                                                order={order}
                                                save={paySupplierFunc}
                                                markDelivered={markDelivered}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                    </Tabs>
                    <div className="flex flex-row justify-start w-full p-7 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                      <div className="flex flex-col items-start justify-start w-[95%] mt-[9px] ml-[3px]">
                        <Text size="3xl" as="p" className="ml-px">
                          Expand Your Customer Base
                        </Text>
                        <Text as="p" className="mt-[31px] ml-px">
                          Expanding your customer base is crucial for the growth
                          and success of your business.
                        </Text>
                        <Text as="p" className="mt-[31px] ml-px">
                          By reaching out to new demographics and markets, you
                          can unlock untapped potential and increase your
                          revenue streams
                        </Text>
                        <div className="flex flex-row justify-start mt-[30px]">
                          <Button
                            size="6xl"
                            leftIcon={
                              <Img
                                src={Images.img_logo_facebook_1}
                                alt="Logo facebook 1"
                              />
                            }
                            className="gap-3 !text-blue_gray-900_02 border-gray-600_01 border border-solid min-w-[171px] rounded-[19px]"
                          >
                            Facebook
                          </Button>
                          <Button
                            size="6xl"
                            leftIcon={
                              <Img
                                src={Images.img_logo_twitter_1}
                                alt="Logo twitter 1"
                              />
                            }
                            className="ml-[50px] gap-3 !text-blue_gray-900_02 border-gray-600_01 border border-solid min-w-[180px] rounded-[19px]"
                          >
                            Twitter
                          </Button>
                          <Button
                            size="6xl"
                            leftIcon={
                              <Img
                                src={Images.img_logo_linkedin_1}
                                alt="Logo linkedin 1"
                              />
                            }
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
                        <Img
                          src={Images.img_transactions}
                          alt="total"
                          className="h-[35px] w-[35px]"
                        />
                        <Text size="lg" as="p" className="mt-[3px] text-center">
                          Total Transactions
                        </Text>
                        <Text
                          size="4xl"
                          as="p"
                          className="mt-[9px] mb-2.5 text-center"
                        >
                          $20,850
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-1.5 p-2.5 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                        <Img
                          src={Images.img_expenses}
                          alt="expenses_one"
                          className="h-[35px] w-[35px]"
                        />
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
                        <Img
                          src={Images.img_group_11}
                          alt="image"
                          className="h-[35px] w-[35px]"
                        />
                        <Text size="lg" as="p" className="mt-[5px] text-center">
                          Total Income
                        </Text>
                        <Text
                          size="4xl"
                          as="p"
                          className="mt-[9px] mb-2.5 text-center"
                        >
                          $20,850
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[5px] p-2.5 bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                        <Img
                          src={Images.img_group_11}
                          alt="image"
                          className="h-[35px] w-[35px]"
                        />
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
                                      src={Images.img_image_194}
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
                                  src={Images.img_image_198}
                                  alt="john_doe_three"
                                  className="w-[8%] object-cover rounded-[10px]"
                                />
                              </div>
                              <Text as="p">Great product, highly</Text>
                              <div className="flex flex-row justify-between w-[53%]">
                                <Img
                                  src={Images.img_chat_circle_dots}
                                  alt="on_product"
                                  className="h-[24px] w-[24px] opacity-0.78"
                                />
                                <Img
                                  src={Images.img_thumbs_up_1}
                                  alt="image"
                                  className="h-[24px] w-[24px] opacity-0.78"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row justify-start items-start w-full gap-1.5">
                              <Img
                                src={Images.img_image_194}
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
                                      src={Images.img_image_211}
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
                                    src={Images.img_chat_circle_dots}
                                    alt="image"
                                    className="h-[24px] w-[24px] opacity-0.78"
                                  />
                                  <Img
                                    src={Images.img_thumbs_up_1}
                                    alt="thumbsupone_one"
                                    className="h-[24px] w-[24px] opacity-0.78"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-start w-full gap-1.5">
                            <Img
                              src={Images.img_image_194}
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
                                    src={Images.img_image_205}
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
                                  src={Images.img_chat_circle_dots}
                                  alt="image"
                                  className="h-[24px] w-[24px] opacity-0.78"
                                />
                                <Img
                                  src={Images.img_thumbs_up_1}
                                  alt="thumbsupone_one"
                                  className="h-[24px] w-[24px] opacity-0.78"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
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
                            src={Images.img_image_196}
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
                          href="#"
                          className="flex justify-center items-center w-[280px] h-[39px] px-[35px] py-3 border-gray-600_07 border border-solid bg-white-A700_01 text-shadow-ts rounded-[19px]"
                        >
                          <Text size="2xl" as="p" className="!text-gray-500_02">
                            View All
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
