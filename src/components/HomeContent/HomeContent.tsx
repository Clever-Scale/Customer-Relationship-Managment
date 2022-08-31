import React from "react";
import { FiUsers } from "react-icons/fi";
import { BiUser, BiBuilding } from "react-icons/bi";
import useAllWebInfo, { AllWebInfo } from "@apis/webInfoDb/useAllWebInfo";

function HomeContent() {
  const { data: allWebInfo, error } = useAllWebInfo();
  const [rows, setRows] = React.useState<AllWebInfo>();

  React.useEffect(() => {
    if (allWebInfo) {
      setRows(allWebInfo);
    }
  }, [allWebInfo]);
  return (
    <div className="py-10 px-40 w-full">
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg p-4 bg-white border-b-4 border-blue-500">
          <div className="flex">
            <p className="text-lg border-b-4 border-slate-500 border-dotted">
              Users
            </p>
          </div>
          <div className="flex justify-between items-center w-full py-10">
            <p className="text-4xl font-bold">{rows?.user_count}</p>
            <div className="w-16 h-16 rounded-full bg-blue-500 flex justify-center items-center">
              <BiUser className="text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-white border-b-4 border-green-500">
          <div className="flex">
            <p className="text-lg border-b-4 border-slate-500 border-dotted">
              Employees
            </p>
          </div>
          <div className="flex justify-between items-center w-full py-10">
            <p className="text-4xl font-bold">{rows?.employee_count}</p>
            <div className="w-16 h-16 rounded-full bg-green-500 flex justify-center items-center">
              <FiUsers className="text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-white border-b-4 border-slate-500">
          <div className="flex">
            <p className="text-lg border-b-4 border-slate-500 border-dotted">
              Departments
            </p>
          </div>
          <div className="flex justify-between items-center w-full py-10">
            <p className="text-4xl font-bold">{rows?.department_count}</p>
            <div className="w-16 h-16 rounded-full bg-slate-500 flex justify-center items-center">
              <BiBuilding className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
