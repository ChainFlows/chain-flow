import React from "react";
import { Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  return (
    <Sidebar {...props} width="114px !important">
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
          },
        }}
        className="flex flex-col items-center justify-start w-full mt-[182px] mb-[515px] px-[23px]"
      >
        <div className="flex flex-row justify-center items-start h-[67px] w-[67px] pb-[18px]">
          <Img
            src="images/img_image_303.png"
            alt="image303_one"
            className="w-[47%] mb-[21px] object-cover rounded-[12px]"
          />
        </div>
        <div className="flex flex-row justify-center items-start h-[67px] w-[67px] pb-[19px]">
          <Img
            src="images/img_image_300.png"
            alt="image300_one"
            className="w-[29px] mb-5 object-cover rounded-[12px]"
          />
        </div>
        <div className="flex flex-row justify-center items-start h-[67px] w-[67px]">
          <Img
            src="images/img_image_305.png"
            alt="image305_one"
            className="w-[39%] mb-[37px] object-cover rounded-[12px]"
          />
        </div>
      </Menu>
    </Sidebar>
  );
}
