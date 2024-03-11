import { Button } from "../../components/utils";
import React from "react";

const Login = ({ login }) => {
  return (
    <div
      className="d-flex justify-content-center flex-column text-center "
      style={{ background: "#000", minHeight: "100vh" }}
    >
      <div className="mt-auto flex flex-col justify-center text-light mb-5">
        <div
          className=" ratio ratio-1x1 mx-auto mb-2"
          style={{ maxWidth: "320px" }}
        ></div>
        <h1>Driver Login</h1>
        <p>Please connect your wallet to continue.</p>
        <Button
          onClick={login}
          variant="outline"
          className="rounded-pill btn btn-outline-success mx-auto px-3 mt-3"
        >
          Connect Wallet
        </Button>
      </div>
      <p className="mt-auto text-secondary">Powered by Internet Computer</p>
    </div>
  );
};

export default Login;
