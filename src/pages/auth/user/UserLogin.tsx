import useLogin from "@apis/auth/userLogin";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserLogin() {
  const login = useLogin;
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    setIsLoading(true);

    toast.loading("Log in....");

    if (email && password) {
      const res = await login({ email, password });
      if (res.token) {
        toast.dismiss();

        localStorage.setItem("token", res.token);
        navigate("/");
      }
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-10 rounded">
          <div className="flex justify-center">
            <img src="/auth.gif" className="w-100 md:w-[500px]" alt="" />
          </div>
          <div>
            <div className="flex justify-center items-center flex-col gap-14">
              <div>
                <p className="text-base md:text-4xl font-semibold text-blue-500">
                  Login
                </p>
              </div>
              <div className="flex w-full flex-col gap-2">
                {/* <form action=""> */}
                <label className="text-sm md:text-base font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  className="w-full border border-blue-400 rounded p-2"
                  name="email"
                  ref={emailRef}
                  required
                />
                <label className="text-sm md:text-base font-semibold">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full border border-blue-400 rounded p-2"
                  name="password"
                  ref={passwordRef}
                  required
                />
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-10 rounded"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <Link
                    to={"/user-register"}
                    className="flex justify-end text-blue-500 hover:underline"
                  >
                    Create account?
                  </Link>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
