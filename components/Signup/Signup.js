import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Backdrop, CircularProgress } from "@mui/material";

const Signup = () => {
  const { user, signup } = useAuth();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      formErrors.constructor === Object &&
      isSubmit
    ) {
      handleLogin();
    } else {
      setLoading(false);
    }
  }, [formErrors]);

  const goToHome = () => {
    router.replace("/");
  };

  if (user) {
    router.replace("/");
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const newUser = await signup(data.email, data.password);
    console.log(newUser?.user);
    if (newUser) {
      setDoc(doc(db, "USERS", newUser?.user.uid), {
        email: data.email,
        userid: newUser.user.uid,
        phoneNumber: data.phoneNumber,
        username: data.username,
        status: "online",
      })
        .then((doc) => {
          console.log("Success");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    console.log(data);
    setFormErrors((errors) => validateForm());
    setLoading(true);
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

    if (data.username.length <= 0) {
      error.usernameError = "Username cannot be empty";
    }

    if (data.phoneNumber.length <= 0) {
      error.phoneNumberError = "Phone number cannot be empty";
    } else if (data.phoneNumber.length < 10) {
      error.phoneNumberError = "Phone number is not valid";
    }

    return error;
  };

  const validateEmail = () => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center h-screen bg-[#141a3a] overflow-scroll">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      )}
      <div className="relative h-[35%] sm:basis-1/2 p-2 sm:p-8 bg-[#7581BB] w-screen sm:h-screen">
        <div className="flex flex-col justify-center h-full">
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
          <span className="text-[24px] sm:text-[30px] md:text-[45px] lg:text-[70px] text-center mt-2 sm:mt-8 font-medium text-white">
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
      <div className="h-[65%] sm:basis-1/2  relative bg-[#141a3a] w-screen sm:h-screen flex flex-col items-center">
        <div className="flex flex-col items-start w-full h-full p-20 sm:p-10">
          <div className="mt-2 sm:mt-16">
            <span className="text-white font-normal whitespace-nowrap text-[18px] sm:text-[24px] md:text-[38px]">
              Signup to Tripple Epic
            </span>
          </div>

          <span className="text-base sm:text-lg md:text-2xl mt-8 sm:mt-20 font-normal text-white">
            Phone Number
          </span>
          <input
            name="phoneNumber"
            onChange={handleChange}
            autoComplete="off"
            className="rounded-md text-sm sm:text-base md:text-lg text-white p-2 sm:h-8 h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
          />
          <span className="text-xs text-red-700 font-sans">
            {formErrors.phoneNumberError}
          </span>
          <span className="text-base sm:text-lg md:text-2xl mt-4 font-normal text-white">
            Username
          </span>
          <input
            name="username"
            onChange={handleChange}
            autoComplete="off"
            className="rounded-md text-sm sm:text-base md:text-lg p-2 sm:h-8 h-10 text-white bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="text"
          />
          <span className="text-xs text-red-700 font-sans">
            {formErrors.usernameError}
          </span>
          <span className="text-base sm:text-lg md:text-2xl mt-4 font-normal text-white">
            Email
          </span>
          <input
            name="email"
            onChange={handleChange}
            autoComplete="off"
            className="rounded-md p-2 text-sm sm:text-base md:text-lg sm:h-8 h-10 text-white bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="email"
          />
          <span className="text-xs text-red-700 font-sans">
            {formErrors.emailError}
          </span>
          <span className="text-base sm:text-lg md:text-2xl mt-4 font-normal text-white">
            Password
          </span>
          <input
            name="password"
            onChange={handleChange}
            autoComplete="off"
            className="rounded-md text-white text-sm sm:text-base md:text-lg p-2 sm:h-8 h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="password"
          />
          <span className="text-xs text-red-700 font-sans">
            {formErrors.passwordError}
          </span>
          <span className="text-end w-full hover:cursor-pointer text-sm text-[#4e536c]">
            Forgot Password?
          </span>

          <div className="mt-10 w-full text-center">
            <button
              onClick={handleSignup}
              className="bg-[#7581BB] w-44 sm:w-56 md:w-64 rounded-lg text-black p-2 text-base mb-10"
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
