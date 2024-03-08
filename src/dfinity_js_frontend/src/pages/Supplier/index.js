import React, { useEffect, useState, useCallback } from "react";
import { login } from "../../utils/auth";
import { Notification } from "../../components/utils/Notifications";
import Login from "./Login";
import { getSupplyCompanyByOwner } from "../../utils/supplyCompany";
import { Loader } from "../../components/utils";
import ActivateSupplierAccount from "./ActivateSupplierAccount";
import CompanyOverviewPage from "./CompanyOverview";

const Supplier = () => {
  const [supplier, setSupplier] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

  const fetchSupplier = useCallback(async () => {
    try {
      setLoading(true);
      setSupplier(
        await getSupplyCompanyByOwner().then(async (res) => {
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

  console.log("supplier", supplier);

  useEffect(() => {
    fetchSupplier();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          supplier?.name ? (
            <main>
              <CompanyOverviewPage supplier={supplier} />
            </main>
          ) : (
            <ActivateSupplierAccount fetchSupplier={fetchSupplier} />
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

export default Supplier;
