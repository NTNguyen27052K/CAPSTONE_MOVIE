import React from "react";
import * as animation_loading from "./../../Assets/animation/animation_loading.json";
import Lottie from "react-lottie";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation_loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="h-screen w-full flex items-center   fixed bg-white"
      style={{ zIndex: "9999" }}
      // redux làm thêm 1 state, overFlowY : hidden
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
