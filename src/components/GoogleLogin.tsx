import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import googleLogo from "/images/google.png";
const GoogleLoginButton: React.FC = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log("Login Success:", tokenResponse),
    onError: () => console.log("Login Failed"),
  });

  return (
    <button
      onClick={() => login()}
    
      className="border py-[10px] px-[60px] rounded-[10px]"
    >
      <img src={googleLogo} alt="Google Login" width="25" height="25" />
    </button>
  );
};

export default GoogleLoginButton;
