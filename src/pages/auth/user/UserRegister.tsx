import React from "react";
import { Link } from "react-router-dom";

function UserRegister() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-10 rounded">
          <div className="flex justify-center">
            <img src="/auth.gif" className="w-100 md:w-[500px]" alt="" />
          </div>
          <div>
            <div className="flex justify-center items-center flex-col gap-8 md:gap-14">
              <div>
                <p className="text-base md:text-4xl  font-semibold text-blue-500">
                  Register
                </p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm md:text-base font-semibold">
                  Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-blue-400 rounded p-2 "
                />
                <label className="text-sm md:text-base font-semibold">
                  Email:
                </label>
                <input
                  type="text"
                  className="w-full border border-blue-400 rounded p-2 "
                />
                <label className="text-sm md:text-base font-semibold">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full border border-blue-400 rounded p-2"
                />
                <label className="text-sm md:text-base font-semibold">
                  Phone:
                </label>
                <input
                  type="text"
                  className="w-full border border-blue-400 rounded p-2 "
                />
                <label className="text-sm md:text-base font-semibold">
                  Address:
                </label>
                <input
                  type="text"
                  className="w-full border border-blue-400 rounded p-2 "
                />
                <div className="pt-4">
                  <button className="w-full bg-blue-500 text-white py-2 px-10 rounded">
                    Login
                  </button>
                  <div className="flex justify-end items-center">
                    <p>
                      Already account?{" "}
                      <Link
                        to={"/user-login"}
                        className=" text-blue-500 hover:underline"
                      >
                        login
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
