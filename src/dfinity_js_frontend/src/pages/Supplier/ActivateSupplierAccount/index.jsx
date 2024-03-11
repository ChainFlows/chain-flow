import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Img, Text, Button, Header } from "../../../components/utils";
import * as Images from "../../../assets/images";
import { createSupplyCompany } from "../../../utils/supplyCompany";

export default function ActivateSupplierAccount({ fetchSupplier }) {
  // usestate for name, bussinessType; supplyChainype; address; email; phone; website; ownerName; regNo; logo;

  const [name, setName] = useState("");
  const [bussinessType, setBussinessType] = useState("");
  const [supplyChainype, setSupplyChainype] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [logo, setLogo] = useState("");

  let timerInSeconds = 0;

  const addSupplierInfo = async () => {
    try {
      const supplier = {
        name,
        bussinessType,
        supplyChainype,
        address,
        email,
        phone,
        website,
        ownerName,
        regNo,
        logo,
      };
      await createSupplyCompany(supplier).then((res) => {
        fetchSupplier();
      });

      // setInterval(() => {
      //   timerInSeconds += 1;

      //   if (timerInSeconds >= 2) {
      //     window.location.reload();
      //   }
      // }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[124px] gap-[31px] bg-white-A700_01 shadow-sm">
        <Header className="flex justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1083px]">
          <div className="flex flex-col items-end justify-start w-full">
            <Text size="12xl" as="p" className="mr-[473px]">
              Activate your supplier account
            </Text>
            <div className="flex flex-row justify-start items-start w-full mt-6 gap-[21px]">
              <div className="flex flex-col items-center justify-center w-[30%] pl-3.5 py-3.5 bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-start justify-start w-full mt-[3px] gap-px">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Text
                      size="3xl"
                      as="p"
                      className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                    >
                      1
                    </Text>
                    <Text size="4xl" as="p">
                      Verify your business
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <div className="flex flex-col items-start justify-start w-[87%]">
                      <Button
                        color="lime_100"
                        leftIcon={
                          <Img src={Images.img_apartment} alt="Apartment" />
                        }
                        className="gap-2 min-w-[254px] !rounded-[12px]"
                      >
                        Business Information
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[69%]">
                <Button
                  color="gray_100_02"
                  size="17xl"
                  leftIcon={<Img src={Images.img_alarm_2} alt="Alarm 2" />}
                  className="w-full gap-4 rounded-[24px]"
                >
                  Collecting this information to ensure the security and verify
                  your identity
                </Button>
                <div className="flex flex-row justify-start items-start mt-[19px] ml-[3px] gap-3">
                  <Img
                    src={Images.img_container_583}
                    alt="container583"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p" className="mt-1">
                    Business Information
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Company name
                    </Text>
                    <input
                      type="text"
                      name="name"
                      placeholder="Company name"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Owner Name
                    </Text>
                    <input
                      type="text"
                      name="bussinessType"
                      placeholder="Business type"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setOwnerName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[92%] mt-4 ml-[3px] gap-[25px]">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Phone number
                    </Text>
                    <div className="flex flex-row justify-center items-center w-full p-1.5 rounded-[12px]">
                      <div className="flex flex-row justify-start items-center w-[14%] gap-[7px]">
                        <Img
                          src={Images.img_image_492}
                          alt="image492_one"
                          className="h-[15px]"
                        />
                        <Img
                          src={Images.img_arrow_down_gray_800_01}
                          alt="arrowdown_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <div className="h-[22px] w-px ml-[15px] bg-gray-400_02" />
                      <input
                        type="number"
                        name="phone"
                        placeholder="+25471234567"
                        className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <Img
                        src={Images.img_lock}
                        alt="lock_one"
                        className="h-[16px] w-[16px] ml-[34px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Email
                    </Text>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-4 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Address
                    </Text>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-0.5">
                    <Text size="3xl" as="p" className="mt-px !text-gray-800">
                      SupplyChainype
                    </Text>
                    <input
                      type="text"
                      name="supplyChainype"
                      placeholder="SupplyChainype"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setSupplyChainype(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-4 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Website
                    </Text>
                    <input
                      type="text"
                      name="website"
                      placeholder="Website"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Registration Number
                    </Text>
                    <input
                      type="number"
                      name="regNo"
                      placeholder="Registration Number"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setRegNo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-4 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Business type
                    </Text>
                    <input
                      type="text"
                      name="bussinessType"
                      placeholder="Business type"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setBussinessType(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Logo Url
                    </Text>
                    <input
                      type="text"
                      name="logoUrl"
                      placeholder="https://example.com/logo.png"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setLogo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px w-[93%] mt-[50px] mr-[60px] bg-gray-100" />
            <Button
              color="lime_700"
              size="9xl"
              rightIcon={<Img src={Images.img_arrow_right} alt="Arrow right" />}
              className="mt-8 mr-[33px] gap-1.5 min-w-[153px] !rounded-[12px]"
              onClick={addSupplierInfo}
            >
              Save Details
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
