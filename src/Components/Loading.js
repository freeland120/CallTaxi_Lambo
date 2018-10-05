import React from "react";
import loadingLogo from "../logo/Kakao_Logo.png";

const Loading = () => {
  return (
    <div className="routeLoading">
      <img src={loadingLogo} alt="loginLogo" />
    </div>
  );
};

export default Loading;
