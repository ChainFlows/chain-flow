import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import Header from "../../../components/Header";

export default function ActivateAccountSuccessfullyTwoPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // If countdown is 0, redirect to the homepage
    if (countdown === 0) {
      navigate("/");
    }

    // Set up an interval to decrease the countdown every second
    const interval = setInterval(() => {
      setCountdown((currentCountdown) => currentCountdown - 1);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [countdown, navigate]);
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pb-[92px] gap-[126px] bg-white-A700_01 shadow-sm">
        <Header className="flex justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1020px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[232px] w-[40%] relative">
              <Img
                src="images/img_image_498.svg"
                alt="image498_one"
                className="h-[195px] bottom-0 right-[14%] m-auto absolute"
              />
              <div className="flex flex-col items-center justify-center h-[79px] w-[79px] right-[4%] top-0 p-[11px] m-auto bg-white-A700_01 absolute rounded-[39px]">
                <Img
                  src="images/img_c_check_3.svg"
                  alt="ccheckthree_one"
                  className="h-[56px] w-[56px]"
                />
              </div>
              <Img
                src="images/img_avatar_13.svg"
                alt="avatarthirteen"
                className="h-[43px] w-[43px] left-[12%] top-[18%] m-auto rounded-[50%] absolute"
              />
              <Input
                color="white_A700_01"
                size="3xl"
                name="container603"
                placeholder="Secure authentication"
                prefix={
                  <Img src="images/img_a_security_1.svg" alt="A security 1" />
                }
                className="w-[69%] gap-3 bottom-[21%] left-0 m-auto !text-gray-900_01 !shadow-lg absolute rounded-[27px]"
              />
              <Img
                src="images/img_receipt_list_43.svg"
                alt="receiptlistfort"
                className="h-[29px] w-[29px] bottom-[29%] right-0 m-auto absolute"
              />
            </div>
            <div className="h-[4px] w-[39%] mt-[-2px] z-[1] bg-gray-500_02 rounded-[50%]" />
            <Text size="12xl" as="p" className="mt-[35px] text-center">
              Activated account
            </Text>
            <Text
              size="4xl"
              as="p"
              className="w-[49%] mt-[17px] text-center !leading-[26px]"
            >
              Your account has been successfully activated.
              <br />
              Get ready to explore and enjoy our services.
            </Text>
            <Link to="/">
              <Button
                color="blue_gray_900_02"
                size="9xl"
                className="mt-[29px] !shadow-md min-w-[370px] !rounded-[12px]"
              >
                <div className="countdown">Go to dashboard in {countdown}s</div>
              </Button>
            </Link>
            <div className="flex flex-row justify-center items-center w-full mt-[52px] gap-4 p-[22px] bg-gray-100_01 rounded-[24px]">
              <Img
                src="images/img_alarm_4.svg"
                alt="alarmfour_one"
                className="h-[20px] w-[20px]"
              />
              <Text
                size="3xl"
                as="p"
                className="w-[96%] mt-1.5 mb-[5px] !leading-[22px]"
              >
                We promise to prioritize the privacy and security of your
                personal information. We implement industry-standard security
                measures to protect your data from unauthorized access, loss, or
                misuse.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
