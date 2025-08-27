import React from "react";
import Notice from "./notice-section/Notice";
import "./login.css";
import LoginSide from "./login-section/LoginSide";

type Props = {};

const LoginPage:React.FC = (props: Props) => {
  return (
    <div className="main-wrapper flex flex-col md:flex-row h-screen">
      {/* Left side - Notice section (Hidden on small screens) */}
      <div className="sm:hidden md:w-1/2 xl:w-1/2 left">
        <Notice />
      </div>

      <div className="w-full md:w-1/2 xl:w-1/2 flex justify-center items-center right overflow-auto">
        <LoginSide />
      </div>
    </div>
  );
};

export default LoginPage;
