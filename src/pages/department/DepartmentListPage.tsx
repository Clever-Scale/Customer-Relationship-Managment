import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiBuilding, BiEdit } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import useAllDepartment, {
  AllDepartment,
} from "@apis/departmentDb/useAllDepartment";
import useDeleteDepartment from "@apis/departmentDb/useDeleteDepartment";
import { toast } from "react-toastify";
function DepartmentListPage() {
  const navigate = useNavigate();
  const { data: allDepartments, error } = useAllDepartment();
  const [rows, setRows] = React.useState<AllDepartment>();

  const handleDelete = async (id: number) => {
    const deleteUser = useDeleteDepartment;
    toast.loading("Deleteing....");
    const res = await deleteUser(id);
    toast.dismiss();
    navigate("/departments");
  };

  React.useEffect(() => {
    if (allDepartments) {
      setRows(allDepartments);
    }
  }, [allDepartments]);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 border-l-8 border-blue-500 px-2">
          <BiBuilding className="text-xl" />
          <h1 className="text-lg font-semibold">Department List</h1>
        </div>
        <div>
          <Link
            to={"create-department"}
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 flex items-center justify-center shadow-md"
          >
            <AiOutlinePlus />
            <span>Create Department</span>
          </Link>
        </div>
      </div>
      <div className="bg-white p-4 rounded w-full">
        <table className="w-full">
          <thead className=" border-t-2 border-b-2 border-slate-400">
            <tr>
              <th className="text-start py-2 px-2">Id</th>
              <th className="text-start py-2 px-2">Name</th>
              <th className="text-end py-2 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows?.data.data.map((row) => {
              return (
                <>
                  <tr className="py-1 border-b border-slate-200 hover:bg-slate-100 cursor-pointer">
                    <td className="py-3 px-2">{row.id}</td>
                    <td className="py-3 px-2">{row.name}</td>
                    <td className="py-3 px-2">
                      <div className="flex justify-end  gap-2">
                        <Link
                          to={`edit-department/${row.id}`}
                          state={row}
                          className="bg-green-500 px-2 py-1 rounded text-white hover:bg-green-600 flex items-center justify-center gap-2 shadow-md"
                        >
                          <BiEdit />
                          <span>Edit</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600 flex items-center justify-center gap-2 shadow-md"
                        >
                          <RiDeleteBinLine />
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentListPage;
