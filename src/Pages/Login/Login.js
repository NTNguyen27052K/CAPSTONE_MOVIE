import React from "react";
import * as animation404 from "./../../Assets/animation/animation_login.json";
import Lottie from "react-lottie";
import FormLogin from "../../Components/FormLogin/FormLogin";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex my-36 mx-28">
      {/* // animation  */}
      <div className="w-1/2">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="w-1/2 ">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
