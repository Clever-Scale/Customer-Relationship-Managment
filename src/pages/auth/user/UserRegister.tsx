import useRegister from "@apis/auth/userRegister";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserRegister() {
  const register = useRegister;
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const phone_no = phoneRef.current?.value;
    const address = addressRef.current?.value;

    if (email && password && name && phone_no && address) {
      console.log(email && password && name && phone_no && address);

      const res = await register({ name, email, password, phone_no, address });
      if (res.status === "success") {
        navigate("/user-login");
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
                  name="name"
                  className="w-full border border-blue-400 rounded p-2 "
                  ref={nameRef}
                  required
                />
                <label className="text-sm md:text-base font-semibold">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full border border-blue-400 rounded p-2 "
                  ref={emailRef}
                  required
                />
                <label className="text-sm md:text-base font-semibold">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full border border-blue-400 rounded p-2"
                  ref={passwordRef}
                  required
                />
                <label className="text-sm md:text-base font-semibold">
                  Phone:
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border border-blue-400 rounded p-2 "
                  ref={phoneRef}
                  required
                />
                <label className="text-sm md:text-base font-semibold">
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full border border-blue-400 rounded p-2 "
                  ref={addressRef}
                  required
                />
                <div className="pt-4">
                  <button
                    className="w-full bg-blue-500 text-white py-2 px-10 rounded"
                    onClick={handleRegister}
                  >
                    Login
                  </button>
                  <div className="flex justify-end items-center">
                    <p>
                      Already account?{" "}
                      <Link
                        to={"/user-login"}
                        className=" text-blue-500 hover:underline"
                      >
                        Register
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
