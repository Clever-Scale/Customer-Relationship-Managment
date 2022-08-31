import useCreateDepartment from "@apis/departmentDb/useCreateDepartment";
import React, { useRef } from "react";
import { BiBuilding, BiUser } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function CreateDepartmentPage() {
  const navigate = useNavigate();
  const departmentCreate = useCreateDepartment;
  const departmentRef = useRef<HTMLInputElement>(null);
  const handleCreate = async () => {
    const name = departmentRef.current?.value;

    if (name) {
      const res = await departmentCreate({ name });
      if (res.status === "success") {
        navigate("/departments");
      }
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
          <BiBuilding className="text-xl" />
          <h1 className="text-lg font-semibold">Create Department</h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="bg-white p-4 rounded shadow-md">
              <label>Department Name:</label>
              <input
                type="text"
                className="w-full border border-slate-500 rounded py-2 px-1"
                placeholder="Enter Department Name..."
                ref={departmentRef}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-700 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateDepartmentPage;
