import React from "react";
import { LoginForm } from "../Components/index";

const Login = () => {
  return (
    <div className="flex h-screen ">
      <div className="min-w-3xl">
        <img src="/left.png" alt="left" className="object-fill w-full h-full" />
      </div>
   
        <LoginForm className="w-screen justify-around" />
     
    </div>
  );
};

export default Login;
