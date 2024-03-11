import React, { useState } from "react";
import { Img, Text, Button, Input, SelectBox } from "../../../components/utils";

import * as Images from "../../../assets/images";

export default function DriverVehicleInformation({ save }) {
  // usestate for form inputs
  const [vehicleMake, setVehicleMake] = React.useState("");
  const [vehicleModel, setVehicleModel] = React.useState("");
  const [vehicleType, setVehicleType] = React.useState("");
  const [vehicleRegNo, setVehicleRegNo] = React.useState("");

  return (
    <>
      <div className="flex flex-row justify-start items-start mt-6 w-full gap-[21px]">
        <div className="flex flex-col items-center justify-center w-[30%] mr-[17px]  bg-white-A700_01 rounded-[12px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row justify-start items-center w-full p-2 rounded-md text-black mt-[-1px] gap-3">
              <div className="h-[338px] w-[11%] relative">
                <div className="h-[322px] w-px top-[1%] right-0 left-0 m-auto bg-gray-400_02 absolute" />
                <div className="flex flex-col items-end justify-center w-full  p-2 rounded-md text-black h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-col items-center justify-start w-full  p-2 rounded-md text-black gap-[83px]">
                    <Text
                      size="3xl"
                      as="p"
                      className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                    >
                      2
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-[90px]">
                <Text size="5xl" as="p">
                  Vehicle Infomation
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[69%]">
          <Button
            color="gray_100_02"
            size="17xl"
            leftIcon={<Img src={Images.img_alarm_2} alt="Alarm 2" />}
            className="w-full bg-green-50 p-2 border border-gray-500 text-black gap-4 rounded-[24px]"
          >
            Collecting this information to ensure the security and verify your
            identity
          </Button>
          <div className="flex flex-row justify-start items-start mt-[19px] ml-[3px] gap-3">
            <Img
              src={Images.img_container_583}
              alt="container583"
              className="h-[36px] w-[36px] rounded-[12px]"
            />
            <Text size="6xl" as="p" className="mt-1">
              Vehicle Information
            </Text>
          </div>
          <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
            <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
              <Text size="3xl" as="p" className="!text-gray-800">
                vehicle Make
              </Text>
              <input
                type="text"
                name="textfield"
                placeholder="vehicleMake"
                className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                onChange={(e) => setVehicleMake(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
              <Text size="3xl" as="p" className="!text-gray-800">
                vehicle Model
              </Text>
              <input
                type="text"
                name="textfield"
                placeholder="vehicleModel"
                className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                onChange={(e) => setVehicleModel(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start w-[92%] mt-[7px] ml-[3px] gap-6">
            <div className="flex flex-col items-start justify-center w-[49%] gap-px">
              <Text size="3xl" as="p" className="!text-gray-800">
                vehicleType
              </Text>
              <input
                type="text"
                name="textfield"
                placeholder="vehicleType"
                className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                onChange={(e) => setVehicleType(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start justify-center w-[49%] gap-px">
              <Text size="3xl" as="p" className="!text-gray-800">
                Registration No
              </Text>
              <input
                type="text"
                name="textfield"
                placeholder="vehicleRegNo"
                className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                onChange={(e) => setVehicleRegNo(e.target.value)}
              />
            </div>
          </div>
          <div className="h-px w-[60%] mt-[30px] ml-6 bg-gray-100" />
          <Button
            color="lime_700"
            size="9xl"
            rightIcon={<Img src={Images.img_arrow_right} alt="Arrow right" />}
            className="mt-8 ml-[540px] gap-1.5 min-w-[170px] !rounded-[12px]"
            onClick={() =>
              save({ vehicleMake, vehicleModel, vehicleType, vehicleRegNo })
            }
          >
            Save Details
          </Button>
        </div>
      </div>
    </>
  );
}
