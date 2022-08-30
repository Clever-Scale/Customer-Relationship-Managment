import React from "react";
import { BiUser } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function CreateUserPage() {
  const navigate = useNavigate();
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
          <h1 className="text-lg font-semibold">Create User</h1>
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
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default CreateUserPage;
