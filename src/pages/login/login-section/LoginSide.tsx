import React from "react";
import Logo from "/images/authentication-logo.svg";
import GoogleLoginButton from "../../../components/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./loginside.css";
import { Link } from "react-router-dom";

const LoginSide: React.FC = () => {
  return (
    <div className="w-[60%] login-side">
      <div className="image-wrapper flex justify-center items-center mb-[48px]">
        <img src={Logo} alt="logo" />
      </div>

      <div className="card shadow-custom p-[25px] border rounded-[5px] mb-[40px]">
        <h1 className="text-[24px] font-semibold mb-[6px]">Welcome</h1>
        <p className="mb-[15px] text-[#6A7287]">
          Please enter your details to sign in
        </p>
        <div className="login-options flex justify-center">
          <div className="google-login">
            <GoogleOAuthProvider clientId={"dfgdfg"}>
              <GoogleLoginButton />
            </GoogleOAuthProvider>
          </div>
        </div>
        <div className="login-or mx-auto">
          <p className="text-center my-[15px] text-[15px]">Or</p>
        </div>
        <form action="" className="login-form">
          <div className="email mb-[15px]">
            <label
              htmlFor="loginEmail"
              className="block text-[14px] font-semibold text-[#202C4B] mb-[10px]"
            >
              Email Address:
            </label>

            <input
              type="email"
              placeholder=""
              className="border p-[10px] w-full  rounded-[5px]"
              id="loginEmail"
              name="loginEmail"
            />
          </div>

          <div className="password mb-[15px]">
            <label
              htmlFor="loginPassword"
              className="block text-[14px] font-semibold text-[#202C4B] mb-[10px]"
            >
              Password:
            </label>

            <input
              type="password"
              placeholder=""
              className=" p-[10px] border w-full rounded-[5px]"
              id="loginPassword"
              name="loginPassword"
            />
          </div>
          <div className="flex justify-between items-center mb-[15px]">
            <div className="remember-me flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-[15px] w-[15px] text-[#6A7287]"
              />
              <span>Remember me</span>
            </div>
            <Link
              to="/forget-password"
              className="forget-password  text-red-500"
            >
              Forget Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-[#506EE4] text-white p-[10px] rounded-[5px] mb-[15px]"
          >
            Sign In
          </button>
          <p className="text-center">
            Don't have an account? {"  "}
            <Link to={"/register"} className="text-[#506EE4]">
              Create Account
            </Link>
          </p>
        </form>
      </div>
      <footer>
        <p className="text-[#6A7287] text-center">
          Copyright © 2024 - Preskool
        </p>
      </footer>
    </div>
  );
};

export default LoginSide;
