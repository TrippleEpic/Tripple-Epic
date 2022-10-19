import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  if (user) {
    router.replace("/");
  }

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      formErrors.constructor === Object &&
      isSubmit
    ) {
      signin();
    } else {
      setLoading(false);
    }
  }, [formErrors]);

  const goToHome = () => {
    router.replace("/");
  };

  const goToSignup = () => {
    router.push("/signup");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signin = async () => {
    await login(data.email, data.password);
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    setFormErrors((errors) => validateForm());
    setIsSubmit(true);
  };

  const validateForm = () => {
    const error = {};
    if (data.email.length === 0) {
      error.emailError = "Email Field cannot be empty";
    } else if (!validateEmail()) {
      error.emailError = "Please enter a valid email";
    }

    if (data.password.length <= 0) {
      error.passwordError = "Password Field cannot be empty";
    } else if (data.password.length < 8) {
      error.passwordError = "Please enter a valid password";
    }
    return error;
  };

  const validateEmail = () => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email);
  };
  return (
    <div className="flex flex-col sm:flex-row overflow-hidden items-center h-screen w-screen">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      )}
      <div className="relative h-[35%] sm:w-[50%] p-2 sm:p-8 bg-[#7581BB] w-screen sm:h-full">
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
              width="300px"
              height="300px"
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
          <span className="text-[24px] sm:text-[40px] md:text-[60px] lg:text-[90px] text-center sm:mt-8 font-medium text-white">
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
      <div className="h-[65%] sm:w-[50%] relative bg-[#141a3a] w-screen sm:h-screen flex flex-col items-center p-2 sm:p-8">
        <div className="flex flex-col items-start w-full p-6">
          <div className="mt-8 sm:mt-24">
            <span className="text-white font-normal whitespace-nowrap text-[18px] sm:text-[24px] md:text-[34px]">
              Login to Tripple Epic
            </span>
          </div>
          <span className="text-sm sm:text-base md:text-lg mt-8 sm:mt-20 font-normal text-white">
            Email
          </span>
          <input
            name="email"
            onChange={handleChange}
            className="rounded-lg p-2 text-sm sm:text-base lg:text-lg text-white h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="email"
            autoComplete="off"
          />
          <span className="text-red-700 text-xs font-sans">
            {formErrors.emailError}
          </span>
          <span className="text-sm sm:text-base md:text-lg mt-6 font-normal text-white">
            Password
          </span>
          <input
            name="password"
            onChange={handleChange}
            className="rounded-lg p-2 h-10 text-sm sm:text-base lg:text-lg text-white bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="password"
            autoComplete="off"
          />
          <span className="text-red-700 text-xs font-sans">
            {formErrors.passwordError}
          </span>

          <span className="text-end w-full hover:cursor-pointer text-xs sm:text-sm text-[#4e536c]">
            Forgot Password?
          </span>

          <div className="mt-4 sm:mt-10 w-full text-center">
            <button
              onClick={handleLogin}
              className="bg-[#7581BB] w-44 sm:w-56 md:w-64 rounded-lg text-black p-2 text-base mb-10"
            >
              Login
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 flex items-center">
          <span className="text-white text-xs md:text-base font-normal">
            {"You don't have an account?"}
          </span>
          <span
            onClick={goToSignup}
            className="ml-2 hover:cursor-pointer text-[#7581BB] text-xs md:text-base font-normal"
          >
            Sign up now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
