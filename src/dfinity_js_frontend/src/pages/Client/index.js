import React, { useEffect, useState, useCallback } from "react";
import { login } from "../../utils/auth";
import { Notification } from "../../components/utils/Notifications";
import Login from "./Login";
import { getClientCompanyByOwner } from "../../utils/clientCompany";
import { Loader } from "../../components/utils";
import ActivateClientAccount from "./ActivateClientAccount";
import CompanyOverviewPage from "./CompanyOverview";

const Client = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

  const fetchClient = useCallback(async () => {
    try {
      setLoading(true);
      setClient(
        await getClientCompanyByOwner().then(async (res) => {
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

  console.log("client", client);

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          client?.name ? (
            <main>
              <CompanyOverviewPage client={client} />
            </main>
          ) : (
            <ActivateClientAccount
              fetchClient={fetchClient}
            />
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

export default Client;
