"use client";
import colors from "@/app/utils/colors";
import Link from "next/link";
import { useEffect, useState } from "react";
import EachField from "./EachField";
// import { performLogin } from "@/app/actions";
// import { useAuth } from "@/app/hooks/useAuth";
import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation";

const Contact = () => {
  const { theme } = useCart();
  //   const { setAuth } = useAuth();
  const router = useRouter();
  const [isTyping, setIsTyping] = useState(true);
  const [email, setEmail] = useState("");
  const [mainError, setMainError] = useState({
    isError: false,
    error: "Email or text is incorrect",
  });
  const [emailError, setEmailError] = useState({
    iserror: false,
    error: "",
  });
  const [text, setText] = useState("");
  const [textError, setTextError] = useState({
    iserror: false,
    error: "",
  });

  useEffect(() => {
    setEmailError({
      iserror: false,
      error: "",
    });
    setTextError({
      iserror: false,
      error: "",
    });
    setMainError({
      isError: false,
      error: "Email or text is incorrect",
    });
    setIsTyping(true);
  }, [email, text]);

  const submitForm = async () => {
    setEmail("");
    setText("");
    // try {
    //   const found = await performLogin({
    //     email: email,
    //     text: text,
    //   });
    //   if (found) {
    //     setAuth(found);
    //     router.push("/");
    //   } else {
    //     setEmailError({
    //       iserror: true,
    //       error: "",
    //     });
    //     setTextError({
    //       iserror: true,
    //       error: "",
    //     });
    //     setMainError({
    //       isError: true,
    //       error: "Email or text is incorrect",
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
          Contact Us
        </div>
        {/* Trick the browser with this fake email and text field */}
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
            type="text"
            name="text"
            isReal={false}
            placeholder="Enter your text"
            value={text}
            setValue={setText}
            iserror={textError.iserror}
            error={textError.error}
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
        <div>
          <div className="lg:text-[18px] md:text-[15px] text-[12px] font-bold tracking-wider mb-1 text-start lg:mt-5 sm:mt-3 mt-1">
            {text != "" ? "Comment" : ""}
          </div>
          <textarea
            className={`scrollbar-none lg:p-3 sm:p-2 p-1 border-[2px] lg:text-[18px] md:text-[15px] text-[12px] box-border w-full rounded-md focus:outline-none focus:outline-[1px] focus:shadow-none bg-transparent placeholder:text-zinc-400 ${
              !textError.iserror
                ? "border-green-700 text-green-600 focus:outline-green-600"
                : "border-red-600 text-red-600 focus:outline-red-600"
            }`}
            type={text}
            value={text}
            name={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write Your Thoughts"
            autoComplete="off"
          />
          {textError.iserror ? (
            <div className="text-red-600 mt-1 text-start lg:text-[14px] text-[11px] w-full">
              {textError.error}
            </div>
          ) : (
            <></>
          )}
        </div>
        {mainError.isError ? (
          <div className="mt-3 text-red-600">{mainError.error}</div>
        ) : (
          <></>
        )}
        <button
          onClick={submitForm}
          className={`lg:text-[18px] md:text-[15px] text-[12px] text-white cursor-pointer rounded-full lg:mt-10 mt-5 py-2 px-6  ${"bg-green-800 hover:bg-green-700"}`}
        >
          Send
        </button>
        <p className="lg:mt-10 mt-5 lg:text-[18px] md:text-[15px] text-[12px]">
          <Link
            legacyBehavior
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftLmbMDDfmnMzMrFdjCZjvzPgpPhCSkXwkJSljNbNGzttgqJKwpZQqHGFrWBqzlXxjTNV"
            passHref
          >
            <a
              className="text-purple-600 hover:underline hover:text-purple-500"
              target="_blank"
            >
              utes.net@gmail.com
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
