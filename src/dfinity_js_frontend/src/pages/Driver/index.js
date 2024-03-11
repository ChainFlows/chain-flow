import React, { useEffect, useState, useCallback } from "react";
import { login } from "../../utils/auth";
import { Notification } from "../../components/utils/Notifications";
import Login from "./Login";
import DriverDashboard from "./DriverDashboard";

import { getDriverByOwner } from "../../utils/driver";
import { Loader } from "../../components/utils";
import ActivateDriverAccount from "./ActivateDriverAccount";

const Driver = () => {
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

  const fetchDriver = useCallback(async () => {
    try {
      setLoading(true);
      setDriver(
        await getDriverByOwner().then(async (res) => {
          console.log(res);
          return res.Ok;
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  console.log("driver", driver);

  useEffect(() => {
    fetchDriver();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          driver?.fullName ? (
            <main>
              <DriverDashboard fetchDriver={fetchDriver} driver={driver} />
            </main>
          ) : (
            <ActivateDriverAccount fetchDriver={fetchDriver} />
          )
        ) : (
          <Loader />
        )
      ) : (
        <Login login={login} />
      )}
    </>
  );
};

export default Driver;
