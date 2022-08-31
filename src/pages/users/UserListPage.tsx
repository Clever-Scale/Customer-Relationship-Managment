import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiUser, BiEdit } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import useAllUser, { AllUser } from "@apis/userDb/useAllUser";
import useDeleteUser from "@apis/userDb/useDelete";
import { toast } from "react-toastify";

function UserListPage() {
  const navigate = useNavigate();
  const { data: allUsers, error } = useAllUser();
  const [rows, setRows] = React.useState<AllUser>();

  const handleDelete = async (id: number) => {
    const deleteUser = useDeleteUser;
    toast.loading("Deleteing....");
    const res = await deleteUser(id);
    toast.dismiss();
    navigate("/users");
  };

  React.useEffect(() => {
    if (allUsers) {
      setRows(allUsers);
    }
  }, [allUsers]);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 border-l-8 border-blue-500 px-2">
          {/* {JSON.stringify(rows)} */}
          <BiUser className="text-xl" />
          <h1 className="text-lg font-semibold">User List</h1>
        </div>
      </div>
      <div className="bg-white p-4 rounded w-full">
        <table className="w-full">
          <thead className=" border-t-2 border-b-2 border-slate-400">
            <tr>
              <th className="text-start py-2 px-2">Id</th>
              <th className="text-start py-2 px-2">Name</th>
              <th className="text-start py-2 px-2">Email</th>
              <th className="text-start py-2 px-2">Phone</th>
              <th className="text-start py-2 px-2">Address</th>
              <th className="text-end py-2 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows?.data.data.map((row, index) => {
              return (
                <>
                  <tr className="py-1 border-b border-slate-200 hover:bg-slate-100 cursor-pointer">
                    <td className="py-3 px-2">{index + 1}</td>
                    <td className="py-3 px-2">{row.name}</td>
                    <td className="py-3 px-2">{row.email}</td>
                    <td className="py-3 px-2">
                      <div className="flex justify-start items-center gap-2">
                        <FaPhoneSquareAlt className="text-xl" />
                        <p>{row.phone_no}</p>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <p>{row.address}</p>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex justify-end  gap-2">
                        <Link
                          to={`edit-user/${row.id}`}
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

export default UserListPage;
