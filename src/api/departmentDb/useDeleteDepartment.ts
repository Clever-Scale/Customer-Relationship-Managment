export interface DeleteDepartmentResponse {
  status: string;
  message: string;
}

const useDeleteDepartment = async (id: number) => {
  const url = import.meta.env.VITE_API_URL;
  // console.log(data);

  const res = (await fetch(`${url}delete-department/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json())) as DeleteDepartmentResponse;
  // console.log(res);
  return res;
};

export default useDeleteDepartment;
