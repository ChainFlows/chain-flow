import React, { useCallback, useEffect, useState } from "react";
import { Dropdown, Stack } from "react-bootstrap";
import { img_image_189 } from "../assets/images";
import { logout as destroy } from "../utils/auth";
import { balance as principalBalance } from "../utils/ledger";
import { Img } from "./utils";

const Wallet = () => {
  const isAuthenticated = window.auth.isAuthenticated;

  const principal = window.auth.principalText;

  const symbol = "ICP";

  const [balance, setBalance] = useState("0");

  const getBalance = useCallback(async () => {
    if (isAuthenticated) {
      setBalance(await principalBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  if (isAuthenticated) {
    return (
      <>
        <div className="flex gap-2 items-center w-24">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              align="end"
              id="dropdown-basic"
              className="flex items-center border rounded-pill py-1"
            >
              {balance} <span className="ms-1"> {symbol}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow-lg border-0">
              <Dropdown.Item>
                <Stack direction="horizontal" gap={2}>
                  <i className="bi bi-person-circle fs-4" />
                  <span className="font-monospace">{principal}</span>
                </Stack>
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item
                as="button"
                className="flex items-center"
                onClick={() => {
                  destroy();
                }}
              >
                <i className="bi bi-box-arrow-right me-2 fs-4" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Img
            src={img_image_189}
            alt="image409_one"
            className="h-[52px] w-[52px] rounded-[50%]"
          />
        </div>
      </>
    );
  }

  return null;
};

export default Wallet;
