import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Header1, Button, Input } from "../../../components/utils";
import * as Images from "../../../assets/images";

// import ActivatedriverAccountConnectWalletPage from "../DriverConnectWallet";
import DriverVehicleInformation from "../DriverVehicleInformation";
import { createDriver } from "../../../utils/driver";

export default function ActivateDriverAccount({ fetchDriver }) {
  // use states for all fields in the form
  const [fullName, setFullName] = useState("");
  // contactInfo
  const [contactInfo, setContactInfo] = useState("");
  // experience
  const [experience, setExperience] = useState("");
  // company
  const [company, setCompany] = useState("");
  // licenseNo
  const [licenseNo, setLicenseNo] = useState("");
  // licenseExpiry
  const [licenseExpiry, setLicenseExpiry] = useState("");

  let timerInSeconds = 0;

  const addVehicleInfo = async (data) => {
    try {
      const driverInfo = {
        fullName,
        contactInfo,
        experience,
        company,
        licenseNo,
        licenseExpiry,
        ...data,
      };

      console.log(driverInfo, "driverInfo");

      createDriver(driverInfo).then((res) => {
        fetchDriver();
        console.log(res, "response");
      });

      setInterval(() => {
        timerInSeconds += 1;

        if (timerInSeconds >= 2) {
          window.location.reload();
        }
      }, 1000);

      // window.location.reload();
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
      <div className="flex flex-col items-center justify-center w-full pb-[188px] gap-[31px] bg-white-A700_01 shadow-sm">
        <Header1 className="flex flex-row justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1083px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text size="12xl" as="p" className="ml-6">
              Activate your driver account
            </Text>
            <div className="flex flex-row justify-start items-start w-full mt-6 gap-[21px]">
              <div className="flex flex-col items-center justify-center w-[30%] pl-[17px] py-[17px] bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-start justify-start w-[98%] gap-px">
                  <div className="flex flex-row justify-start items-start gap-4">
                    <Text
                      size="3xl"
                      as="p"
                      className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                    >
                      1
                    </Text>
                    <Text size="4xl" as="p" className="mt-0.5">
                      Driver Information
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-3">
                    <div className="flex flex-col items-start justify-start w-[87%]">
                      <Button
                        color="lime_50"
                        size="8xl"
                        leftIcon={
                          <Img
                            src={Images.img_circle_09_lime_900}
                            alt="Circle 09"
                          />
                        }
                        className="w-full gap-2 !rounded-[12px]"
                      >
                        Personal Information
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
                    Personal Information
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Driver name
                    </Text>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
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
                        name="contactInfo"
                        placeholder="+25471234567"
                        className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                        onChange={(e) => setContactInfo(e.target.value)}
                      />

                      <Img
                        src={Images.img_lock}
                        alt="lock_one"
                        className="h-[16px] w-[16px] ml-[34px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Experience
                    </Text>
                    <input
                      type="text"
                      name="experience"
                      placeholder="Experience"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Company
                    </Text>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      License Number
                    </Text>
                    <input
                      type="text"
                      name="licenseNo"
                      placeholder="License No"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setLicenseNo(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      License Expiry
                    </Text>
                    <input
                      type="date"
                      name="licenseExpiry"
                      placeholder="mm/dd/yyyy"
                      className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                      onChange={(e) => setLicenseExpiry(e.target.value)}
                    />
                  </div>
                </div>
                {/* 
                <Text size="3xl" as="p" className="mt-5 ml-[3px]">
                  Driver trainings
                </Text>
                <div className="flex flex-row justify-start items-center mt-[11px]">
                  {trainings.map((training, index) => (
                    <Button
                      color="lime_500"
                      size="md"
                      className="gap-1 min-w-[173px] !rounded-[12px]"
                    >
                      {training}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                  <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                    Company
                  </Text>
                  <input
                    type="text"
                    name="training"
                    placeholder="Enter Training"
                    className="w-full bg-green-50 p-2 rounded-md border border-gray-500 text-black"
                    onchange={(e) => {
                      setTrainings([...trainings, e.target.value]);
                      setTraining(e.target.value);
                     }}
                  />
                  <Img
                    src={Images.img_library_add_1}
                    alt="libraryaddone"
                    className="h-[24px] w-[24px] ml-[21px]"
                    onClick={() => {
                      setTraining("")

                     }}
                  />
                </div> */}
              </div>
            </div>
            <DriverVehicleInformation save={addVehicleInfo} />
            {/* <ActivatedriverAccountConnectWalletPage login={login} /> */}
            <div className="h-px w-[93%] mt-[30px] ml-6 bg-gray-100" />
          </div>
        </div>
      </div>
    </>
  );
}
