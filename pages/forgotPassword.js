import React, { useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [messageSent, setIsMessageSent] = useState(false);
  const [failure, setFailure] = useState(false);
  const [failureMessage, setFailureMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      formErrors.constructor === Object &&
      isSubmit
    ) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setIsMessageSent(true);
          setFailure(false);
          setFailureMessage("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFailure(true);
          setFailureMessage(errorMessage);
          console.log(errorCode, errorMessage);
        });
    }
  }, [formErrors]);

  const sendLink = () => {
    setIsMessageSent(false);
    setFailure(false);
    setFailureMessage("");
    setFormErrors((errors) => validateForm());
    setIsSubmit(true);
  };

  const validateForm = () => {
    const error = {};
    if (email.length === 0) {
      error.emailError = "Email Field cannot be empty";
    } else if (!validateEmail()) {
      error.emailError = "Please enter a valid email";
    }
    return error;
  };
  const validateEmail = () => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };
  return (
    <div className="bg-[#141a3a] flex flex-col justify-center h-screen w-screen p-4">
      <span className="text-sm sm:text-base md:text-lg mt-8 sm:mt-20 font-normal text-white">
        Enter your registered email
      </span>
      <input
        name="email"
        onChange={handleChange}
        className="rounded-lg p-2 mt-4 text-sm sm:text-base lg:text-lg text-white h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
        type="email"
        value={email}
        autoComplete="off"
      />
      <span className="text-red-700 text-xs font-sans">
        {formErrors.emailError}
      </span>

      <div className={messageSent ? "block text-gray-500 mt-4" : "opacity-0"}>
        Password reset link has been sent to your email id. Please reset the
        password and login.(check spam folder if have not received in inbox)
      </div>

      <div className={failure ? "block text-red-700" : "opacity-0"}>
        {failureMessage}
      </div>

      <div className="mt-6 sm:mt-10 w-full text-center">
        <button
          onClick={sendLink}
          className="bg-[#7581BB] w-[80%] rounded-lg text-black p-2 text-base mb-10"
        >
          Send Password Resent Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
