import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Img,
  Button,
  NotificationSuccess,
  NotificationError,
  Loader,
} from "../../../components/utils";
import * as Images from "../../../assets/images";
import Wallet from "../../../components/Wallet";
import MaintainanceRecord from "../../maintainanceRecords/MaintainanceRecord";
import {
  createMaintainanceRecord,
  getDriverActiveOrder,
  getDriverCompletedOrders,
} from "../../../utils/driver";
import { toast } from "react-toastify";

export default function DriverDashboard({ driver, fetchDriver }) {
  const [loading, setLoading] = useState(false);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState({});
  const [tab, setTab] = useState("completed");

  const { id, maintainanceRecords } = driver;

  const save = async (data) => {
    try {
      setLoading(true);

      createMaintainanceRecord(id, data).then((resp) => {
        fetchDriver();
        toast(<NotificationSuccess text="Maintainance added successfully." />);
      });
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a maintainance." />);
    } finally {
      setLoading(false);
    }
  };

  // function to get driver completed orders
  const fetchCompletedOrders = useCallback(async () => {
    try {
      setLoading(true);
      setCompletedOrders(await getDriverCompletedOrders(id));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  // get getDriverActiveOrder
  const fetchActiveOrder = useCallback(async () => {
    try {
      setLoading(true);
      const activeOrder = await getDriverActiveOrder(id);
      setActiveOrder(activeOrder.Ok);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchCompletedOrders();
    fetchActiveOrder();
  }, []);

  console.log("id", id);
  console.log("activeOrder", activeOrder);
  console.log("completedOrders", completedOrders);
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
          <div className="flex flex-row justify-start w-full border-rose-500 bg-gray-200 h-full shadow-sm">
            <div className="flex flex-row justify-start items-start w-full gap-7 mx-auto max-w-[85%]">
              <div className="flex flex-col items-center justify-start w-[100%] mt-[2rem]">
                <div className="h-[361px] w-full z-[1] relative">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <header className="flex flex-col items-center justify-center w-full gap-4 z-[1]">
                          <div className="flex flex-row justify-between items-center w-full">
                            <Text size="7xl" as="p">
                              Driver Overview
                            </Text>
                            <div className="flex flex-row justify-between items-center w-[64%]">
                              <MaintainanceRecord save={save} />
                              <Img
                                src={Images.img_image_399}
                                alt="image399_one"
                                className="w-[6%]  object-cover rounded-[12px]"
                              />
                              <Img
                                src={Images.img_image_386}
                                alt="image386_one"
                                className="w-[6%] object-cover rounded-[12px]"
                              />
                              <Wallet />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-row justify-between gap-4 items-center w-full">
                              <div className="flex flex-row justify-start w-[38%] p-[22px] bg-white-A700_e0 shadow-xs rounded-[19px]">
                                <div className="flex flex-col items-start justify-start w-[76%] mb-[21px] ml-[3px] gap-[7px]">
                                  <div className="flex gap-4">
                                    <Img
                                      src={Images.img_truck_1}
                                      alt="truckone_one"
                                      className="h-[32px] w-[32px}"
                                    />
                                    <Text
                                      size="3xl"
                                      as="p"
                                      className="ml-[71px] !text-green-700 opacity-0.59"
                                    >
                                      Current Job
                                    </Text>
                                  </div>
                                  <div className="flex flex-row justify-between items-center w-full">
                                    <Text size="4xl" as="p">
                                      {activeOrder?.orderName}
                                    </Text>
                                    <Text size="4xl" as="p">
                                      {activeOrder?.orderStatus}
                                    </Text>
                                  </div>
                                  <Text size="4xl" as="p">
                                    {activeOrder?.deliveryAddress}
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[68%] gap-[29px]">
                                <div className="flex flex-row justify-between w-[98%] items-center p-3 bg-white-A700_01 shadow-xs rounded-[25px]">
                                  <Button
                                    color="blue_gray_900_0c"
                                    size="6xl"
                                    className="ml-px rounded-[20px]"
                                    onClick={() => setTab("completed")}
                                  >
                                    Completed Jobs
                                  </Button>
                                  <Button
                                    color="blue_gray_900_0c"
                                    size="6xl"
                                    className="ml-px rounded-[20px]"
                                    onClick={() => setTab("maintainance")}
                                  >
                                    Maintanance records
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </header>
                        <div className="w-full flex flex-row items-center justify-between gap-4">
                          <div className="flex flex-row justify-start items-center w-[38%] mt-4  bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                            <div className="flex flex-row justify-start items-start w-[48%] p-2 mt-2.5 mb-[5px] gap-[11px]">
                              <Img
                                src={Images.img_image_417}
                                alt="image417_one"
                                className="w-[20%] mt-0.5 object-cover rounded-[12px]"
                              />
                              <div className="flex flex-col items-start justify-start w-[73%] gap-1">
                                <Text as="p" className="ml-[5px]">
                                  Expenses
                                </Text>
                                <Text size="4xl" as="p" className="text-center">
                                  $20,850
                                </Text>
                              </div>
                            </div>
                            {/* <div className="flex flex-row justify-start w-[50%] mt-[-89px] p-[17px] bg-blue_gray-900_0c shadow-xs rounded-[19px]"> */}
                            <div className="flex flex-row justify-start items-start w-[48%] p-2 mt-2.5 mb-[5px] gap-[11px]">
                              <Img
                                src={Images.img_image_407}
                                alt="image407_one"
                                className="w-[20%] mt-0.5 object-cover rounded-[12px]"
                              />
                              <div className="flex flex-col items-start justify-start w-[73%] gap-1">
                                <Text as="p" className="ml-[5px]">
                                  Balance
                                </Text>
                                <Text size="4xl" as="p" className="text-center">
                                  $20,850
                                </Text>
                              </div>
                            </div>
                            {/* </div> */}
                          </div>
                          <div className="w-[68%]">
                            <table className="table">
                              <thead className="thead-dark">
                                {tab === "completed" ? (
                                  <tr>
                                    <th scope="col">OrderName</th>
                                    <th scope="col">CompanyName</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Delivery</th>
                                    <th scope="col">OrderType</th>
                                  </tr>
                                ) : (
                                  <tr>
                                    <th scope="col">vehicleRegNo</th>
                                    <th scope="col">date</th>
                                    <th scope="col">mechanic</th>
                                    <th scope="col">mechanicPhone</th>
                                    <th scope="col">cost</th>
                                  </tr>
                                )}
                              </thead>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-full mt-[-1px] gap-4">
                  <div className="flex flex-col items-start justify-start w-[38%] mt-[29px]">
                    <div className="flex flex-row justify-between items-start w-full">
                      <Text size="4xl" as="p" className="mt-[3px]">
                        Productivity view
                      </Text>
                      <div className="flex flex-row justify-start items-center w-[30%] gap-[18px] p-[5px] border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs rounded-[14px]">
                        <Text as="p" className="ml-[7px] !text-gray-400_02">
                          6 Months
                        </Text>
                        <Img
                          src={Images.img_image_408}
                          alt="image408_one"
                          className="h-[17px] w-[18px] mr-1.5 rounded-[50%]"
                        />
                      </div>
                    </div>
                    <Img
                      src={Images.img_graph}
                      alt="graph_one"
                      className="h-[196px] mt-[35px] ml-[9px}"
                    />
                    <div className="flex flex-row justify-start items-center mt-[13px] ml-2">
                      <Text size="2xl" as="p">
                        Jul
                      </Text>
                      <Text as="p" className="ml-[42px]">
                        Aug
                      </Text>
                      <Text as="p" className="ml-[33px]">
                        Sept
                      </Text>
                      <Text as="p" className="ml-[30px]">
                        Octo
                      </Text>
                      <Text as="p" className="ml-[29px]">
                        Mercedes Nov
                      </Text>
                      <Text as="p" className="ml-[35px]">
                        Dec
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-[68%] mb-96">
                    {tab === "maintainance" &&
                      maintainanceRecords.map((maintainance, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-center w-full p-2 bg-white-A700_01 shadow-xs rounded-[12px]"
                        >
                          <div className="flex flex-row justify-start items-center w-[95%] ]">
                            <div className="flex flex-col items-star justify-star w-[84%]">
                              <div className="flex flex-row justify-between items-center">
                                <Text size="3xl" as="p" className="mb-px ">
                                  {maintainance.vehicleRegNo}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px ">
                                  {maintainance.date}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px ">
                                  {maintainance.mechanic}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px ">
                                  {maintainance.mechanicPhone}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px ">
                                  {maintainance.cost}
                                </Text>
                              </div>
                              <div className="flex justify-between">
                                <Text size="2xl" as="p" className="mt-[10px]">
                                  desc: {maintainance.description}
                                </Text>
                                <Text size="2xl" as="p" className="mt-[10px]">
                                  desc: {maintainance.mechanicAddress}
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    {tab === "completed" &&
                      completedOrders.map((order, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-center w-full p-2 bg-white-A700_01 shadow-xs rounded-[12px]"
                        >
                          <div className="flex flex-row justify-between items-center w-[95%] gap-[17px]">
                            {/* <Img
                              src={Images.img_image_389}
                              alt="image389_one"
                              className="w-[86px] object-cover rounded-[12px]"
                            /> */}
                            <div className="flex flex-col w-full">
                              <div className="flex flex-row justify-between items-center">
                                <Text as="p" size="2xl" className="mb-px">
                                  {order.orderName}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px">
                                  {order.companyName}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px">
                                  {order.category}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px">
                                  {order.weight}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px">
                                  {order.delivery}
                                </Text>
                                <Text size="2xl" as="p" className="mb-px">
                                  {order.orderType}
                                </Text>
                              </div>
                              <div className="flex justify-between">
                                <Text size="2xl" as="p" className="mt-[10px]">
                                  Address: {order.deliveryAddress}
                                </Text>
                                <Text size="2xl" as="p" className="mt-[10px]">
                                  OrderId: {order.id}
                                </Text>
                                <Text size="2xl" as="p" className="mt-[10px]">
                                  Supplier: {order.supplierId}
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    
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
