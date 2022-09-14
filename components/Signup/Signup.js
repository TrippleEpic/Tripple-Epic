import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../context/UserContext";

const Signup = () => {
  const { user, signup } = useAuth();
  const router = useRouter();
  console.log(user);
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
  });

  const goToHome = () => {
    router.replace("/");
  };

  if (user) {
    router.replace("/");
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    await signup(data.email, data.password);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center h-full">
      <div className="relative h-[30%] sm:basis-1/2 p-2 sm:p-8 bg-[#7581BB] w-screen sm:h-screen">
        <div className="flex flex-col justify-center ">
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
              className="text-white text-xl font-medium hover:cursor-pointer"
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
          <span className="text-[32px] sm:text-[90px] text-center mt-2 sm:mt-8 font-medium text-white">
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
      <div className="h-[70%] sm:basis-1/2  relative bg-[#141a3a] w-screen sm:h-screen flex flex-col items-center sm:p-8">
        <div className="flex flex-col items-start w-full p-10">
          <div className="mt-2 sm:mt-24">
            <span className="text-white font-normal text-[30px] sm:text-[40px]">
              Signup to Tripple Epic
            </span>
          </div>

          <span className="text-2xl mt-8 sm:mt-20 font-normal text-white">
            Phone Number
          </span>
          <input
            name="phoneNumber"
            onChange={handleChange}
            className="rounded-lg text-white h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="number"
          />
          <span className="text-2xl mt-4 font-normal text-white">Username</span>
          <input
            name="username"
            onChange={handleChange}
            className="rounded-lg h-10 text-white bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="text"
          />

          <span className="text-2xl mt-4 font-normal text-white">Email</span>
          <input
            name="email"
            onChange={handleChange}
            className="rounded-lg h-10 text-white bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="text"
          />

          <span className="text-2xl mt-4 font-normal text-white">Password</span>
          <input
            name="password"
            onChange={handleChange}
            className="rounded-lg h-10 text-white bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="text"
          />

          <span className="text-end w-full hover:cursor-pointer text-sm text-[#4e536c]">
            Forgot Password?
          </span>

          <div className="mt-10 w-full text-center">
            <button
              onClick={handleSignup}
              className="bg-[#7581BB] w-64 rounded-lg text-black p-2 text-base "
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
