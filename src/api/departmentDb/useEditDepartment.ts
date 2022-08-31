export interface EditDepartmentResponse {
  status: string;
  message: string;
}

export interface EditDepartmentInput {
  name: string;
}

const useEditdepartment = async (id: number, data: EditDepartmentInput) => {
  const url = import.meta.env.VITE_API_URL;
  // console.log(data);

  const res = (await fetch(`${url}update-department/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json())) as EditDepartmentResponse;
  // console.log(res);
  return res;
};

export default useEditdepartment;
