"use client";
import colors from "@/app/utils/colors";
import Link from "next/link";
import { useEffect, useState } from "react";
import EachField from "./EachField";
// import { performLogin } from "@/app/actions";
// import { useAuth } from "@/app/hooks/useAuth";
import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { theme } = useCart();
  //   const { setAuth } = useAuth();
  const router = useRouter();
  const [isTyping, setIsTyping] = useState(true);
  const [email, setEmail] = useState("");
  const [mainError, setMainError] = useState({
    isError: false,
    error: "Email or password is incorrect",
  });
  const [emailError, setEmailError] = useState({
    iserror: false,
    error: "",
  });
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({
    iserror: false,
    error: "",
  });

  useEffect(() => {
    setEmailError({
      iserror: false,
      error: "",
    });
    setPasswordError({
      iserror: false,
      error: "",
    });
    setMainError({
      isError: false,
      error: "Email or password is incorrect",
    });
    setIsTyping(true);
  }, [email, password]);

  const submitForm = async () => {
    // try {
    //   const found = await performLogin({
    //     email: email,
    //     password: password,
    //   });
    //   if (found) {
    //     setAuth(found);
    //     router.push("/");
    //   } else {
    //     setEmailError({
    //       iserror: true,
    //       error: "",
    //     });
    //     setPasswordError({
    //       iserror: true,
    //       error: "",
    //     });
    //     setMainError({
    //       isError: true,
    //       error: "Email or password is incorrect",
    //     });
    //     setIsTyping(false);
    //   }
    // } catch (error) {
    //   console.log("Something went wrong");
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
          Login
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
        {mainError.isError ? (
          <div className="mt-3 text-red-600">{mainError.error}</div>
        ) : (
          <></>
        )}
        <button
          onClick={submitForm}
          className={`lg:text-[18px] md:text-[15px] text-[12px] text-white cursor-pointer rounded-full lg:mt-10 mt-5 py-2 px-6  ${"bg-green-800 hover:bg-green-700"}`}
        >
          Login
        </button>
        <p className="lg:mt-10 mt-5 lg:text-[18px] md:text-[15px] text-[12px]">
          No Account?{" "}
          <Link href="/register" className="text-blue-600 hover:text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
