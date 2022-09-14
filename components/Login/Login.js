import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../context/UserContext";

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  if (user) {
    router.replace("/");
  }

  const goToHome = () => {
    router.replace("/");
  };

  const goToSignup = () => {
    router.push("/signup");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    await login(data.email, data.password);
  };
  return (
    <div className="flex flex-col sm:flex-row items-center h-screen w-screen">
      <div className="relative h-[30%] sm:basis-1/2 p-2 sm:p-8 bg-[#7581BB] w-screen sm:h-full sm:w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="absolute w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] top-[-16px] right-14">
            <Image
              src="/images/dots.png"
              alt="dots.png"
              height="100%"
              width="100%"
              objectFit="contain"
            />
          </div>
          <div className="hidden sm:flex items-start ml-10">
            <span
              onClick={goToHome}
              className="text-[#141A3A] text-xl font-medium hover:cursor-pointer"
            >
              Home
            </span>
          </div>
          <div className="hidden sm:inline-block sm:text-center sm:mt-10">
            <Image
              src="/images/login.png"
              alt="login.png"
              width="400px"
              height="400px"
              objectFit="cover"
            />
          </div>
          <div className="sm:hidden inline-block text-center mt-3">
            <Image
              src="/images/login.png"
              alt="login.png"
              width="150px"
              height="150px"
              objectFit="cover"
            />
          </div>
          <span className="text-[32px] sm:text-[90px] text-center sm:mt-8 font-medium text-white">
            WELCOME
          </span>
        </div>
        <div className="absolute w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bottom-[-16px] left-14">
          <Image
            src="/images/dots.png"
            alt="dots.png"
            height="100%"
            width="100%"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="h-[70%] sm:basis-1/2 relative bg-[#141a3a] w-screen sm:h-screen flex flex-col items-center p-2 sm:p-8">
        <div className="flex flex-col items-start w-full p-10">
          <div className="mt-8 sm:mt-24">
            <span className="text-white font-normal text-[24px] sm:text-[40px]">
              Login to Tripple Epic
            </span>
          </div>
          <span className="text-lg sm:text-2xl mt-8 sm:mt-20 font-normal text-white">
            Email
          </span>
          <input
            name="email"
            onChange={handleChange}
            className="rounded-lg text-white h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="text"
          />
          <span className="text-lg sm:text-2xl mt-14 font-normal text-white">
            Password
          </span>
          <input
            name="password"
            onChange={handleChange}
            className="rounded-lg h-10 text-white bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="text"
          />

          <span className="text-end w-full hover:cursor-pointer text-xs sm:text-sm text-[#4e536c]">
            Forgot Password?
          </span>

          <div className="mt-4 sm:mt-10 w-full text-center">
            <button
              onClick={handleLogin}
              className="bg-[#7581BB] w-44 sm:w-64 rounded-lg text-black p-2 text-base "
            >
              Login
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 flex items-center">
          <span className="text-white text-base font-normal">
            {"You don't have an account?"}
          </span>
          <span
            onClick={goToSignup}
            className="ml-2 hover:cursor-pointer text-[#7581BB] text-base font-normal"
          >
            Sign up now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
