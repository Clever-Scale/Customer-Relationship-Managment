import useEditUser from "@apis/auth/userEdit";
import { AllUser } from "@apis/userDb/useAllUser";
import React, { useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditUserPage() {
  const navigate = useNavigate();
  let location = useLocation();
  const data = location.state as AllUser["data"]["data"][0];
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState(data);

  const handleEdit = async () => {
    const editUser = useEditUser;
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const phone_no = phoneRef.current?.value;
    const address = addressRef.current?.value;

    toast.loading("Log in....");
    if (email && password && name && phone_no && address) {
      const res = await editUser(data.id, {
        name,
        email,
        password,
        phone_no,
        address,
      });
      toast.dismiss();
      navigate("/users");
    }
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center gap-2">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-800 px-4 py-2 rounded-full text-white hover:bg-slate-900 flex items-center justify-center"
          >
            <IoMdArrowRoundBack />
            <span>Back</span>
          </button>
        </div>
        <div className="flex items-center gap-2 border-l-8 border-blue-500 px-2">
          <BiUser className="text-xl" />
          <h1 className="text-lg font-semibold">Edit User</h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="bg-white p-4 rounded shadow-md">
              <label>FullName:</label>
              <input
                type="text"
                className="w-full border border-slate-500 rounded py-2 px-1"
                placeholder="Enter FullName..."
                value={user.name}
                onChange={(e) =>
                  setUser((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  })
                }
                ref={nameRef}
              />
            </div>
          </div>
          <div>
            <div className="bg-white p-4 rounded shadow-md">
              <label>Email:</label>
              <input
                type="text"
                className="w-full border border-slate-500 rounded py-2 px-1"
                placeholder="Enter Email..."
                value={user.email}
                onChange={(e) =>
                  setUser((prev) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  })
                }
                ref={emailRef}
              />
            </div>
          </div>
          <div>
            <div className="bg-white p-4 rounded shadow-md">
              <label>Phone No:</label>
              <input
                type="text"
                className="w-full border border-slate-500 rounded py-2 px-1"
                placeholder="Enter Phone..."
                value={user.phone_no}
                onChange={(e) =>
                  setUser((prev) => {
                    return {
                      ...prev,
                      phone_no: e.target.value,
                    };
                  })
                }
                ref={phoneRef}
              />
            </div>
          </div>
          <div>
            <div className="bg-white p-4 rounded shadow-md">
              <label>Address:</label>
              <input
                type="text"
                className="w-full border border-slate-500 rounded py-2 px-1"
                placeholder="Enter Address..."
                value={user.address}
                onChange={(e) =>
                  setUser((prev) => {
                    return {
                      ...prev,
                      address: e.target.value,
                    };
                  })
                }
                ref={addressRef}
              />
            </div>
          </div>
          <div>
            <div className="bg-white p-4 rounded shadow-md">
              <label>Password:</label>
              <input
                type="password"
                className="w-full border border-slate-500 rounded py-2 px-1"
                placeholder="Enter password..."
                ref={passwordRef}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-700 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditUserPage;
