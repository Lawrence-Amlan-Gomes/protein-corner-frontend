"use client";
import colors from "@/app/utils/colors";
import Link from "next/link";
import { useEffect, useState } from "react";
import EachField from "./EachField";
// import { getAllUsers2, registerUser } from "@/app/actions";
import { useCart } from "@/app/hooks/useCart";

const RegistrationForm = () => {
  const { theme } = useCart();
  const [name, setName] = useState("");
  const [noError, setNoError] = useState(false);
  const [nameError, setNameError] = useState({
    iserror: false,
    error: "Name is required",
  });
  const [firstTimeEmailCheck, setFirstTimeEmailCheck] = useState(true);
  const [email, setEmail] = useState("");
  const [allEmails, setAllEmails] = useState([]);
  const [emailError, setEmailError] = useState({
    iserror: true,
    error: "Email is required",
  });
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({
    iserror: true,
    error: "Your password must be at least 8 characters",
  });

  useEffect(() => {
    if (name == "") {
      setNameError({ ...nameError, iserror: true });
    } else {
      setNameError({ ...nameError, iserror: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    // const setAllEmailsInArray = async () => {
    //   const Emails = [];
    //   const users = await getAllUsers2({ email: email });
    //   for (const user of users) {
    //     Emails.push(user.email);
    //   }
    //   setAllEmails(Emails);
    // };
    // setAllEmailsInArray();
    if (email == "") {
      setEmailError({ iserror: true, error: "Email is required" });
    } else if (email.slice(-10) != "@gmail.com") {
      setEmailError({
        iserror: true,
        error: "Use @gmail.com as your email format",
      });
    } else if (allEmails.includes(email)) {
      setEmailError({
        iserror: true,
        error: "This email is already taken",
      });
    } else {
      setEmailError({ ...emailError, iserror: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  if (firstTimeEmailCheck) {
    setTimeout(() => {
      if (allEmails.includes(email)) {
        setEmailError({
          iserror: true,
          error: "This email is already taken",
        });
      } else {
        setEmailError({ ...emailError, iserror: true });
      }
      setFirstTimeEmailCheck(false);
    }, 3000);
  }

  useEffect(() => {
    if (password.length < 8) {
      setPasswordError({
        iserror: true,
        error: "Your password must be at least 8 characters",
      });
    } else {
      setPasswordError({ ...passwordError, iserror: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  useEffect(() => {
    if (nameError.iserror == false && emailError.iserror == false) {
      if (passwordError.iserror == false) {
        setNoError(true);
      } else {
        setNoError(false);
      }
    } else {
      setNoError(false);
    }
  }, [emailError.iserror, nameError.iserror, passwordError.iserror]);

  const submitForm = async () => {
    // if (noError) {
    //   const sureSubmit = confirm("Are you sure to Register?");
    //   if (sureSubmit) {
    //     await registerUser({
    //       name: name,
    //       email: email,
    //       password: password,
    //       phone: "Phone",
    //       photo: "",
    //       bio: "Bio",
    //     });
    //   }
    // }
  };

  return (
    <div
      className={`h-full w-full flex justify-center items-center overflow-y-auto ${colors.bgBody}`}
    >
      <div
        className={`lg:p-10 p-5 rounded-lg lg:w-[400px] md:w-[300px] sm:w-[270px] w-[250px] text-center shadow-lg
        bg-[#eeeeee] border-[1px] border-[#dddddd] text-[#0a0a0a]`}
      >
        <div className="lg:text-[30px] sm:text-[20px] text-[18px] font-bold lg:mb-10 mb-5">
          Registration
        </div>
        {/* Trick the browser with this fake email and password field */}
        <div className="opacity-0">
          <EachField
            label="fake"
            type="email"
            name="email"
            isReal={false}
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
            iserror={emailError.iserror}
            error={emailError.error}
          />
          <EachField
            label="fake"
            type="password"
            name="password"
            isReal={false}
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
            iserror={passwordError.iserror}
            error={passwordError.error}
          />
        </div>
        <EachField
          label="Name"
          type="name"
          name="name"
          isReal={true}
          placeholder="Enter your name"
          value={name}
          setValue={setName}
          iserror={nameError.iserror}
          error={nameError.error}
        />
        <EachField
          label="Email"
          type="email"
          name="email"
          isReal={true}
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          iserror={emailError.iserror}
          error={emailError.error}
        />
        <EachField
          label="Password"
          type="password"
          name="password"
          isReal={true}
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
          iserror={passwordError.iserror}
          error={passwordError.error}
        />
        <button
          onClick={submitForm}
          className={`lg:text-[18px] md:text-[15px] text-[12px] cursor-pointer rounded-full lg:mt-10 py-2 px-6 shadow-md ${
            noError
              ? "bg-green-800 hover:bg-green-700 text-white"
              : " bg-[#bababa] text-[#747474]"
          }`}
        >
          Register
        </button>
        <p className="lg:mt-10 mt-5 lg:text-[18px] md:text-[15px] text-[12px]">
          Already Have An Account?{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
