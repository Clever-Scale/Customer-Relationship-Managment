export interface CreateDepartmentResponse {
  status: string;
  message: string;
}

export interface CreateDepartmentInput {
  name: string;
}

const useCreateDepartment = async (data: CreateDepartmentInput) => {
  const url = import.meta.env.VITE_API_URL;
  // console.log(data);

  const res = (await fetch(`${url}create-department`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json())) as CreateDepartmentResponse;
  // console.log(res);
  return res;
};

export default useCreateDepartment;
