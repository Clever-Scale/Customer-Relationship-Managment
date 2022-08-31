export interface Datum {
  id: number;
  name: string;
  email: string;
  phone_no: string;
  address: string;
  created_at: Date;
  updated_at: Date;
}

export interface EditUserResponse {
  status: string;
  message: string;
}

export interface EditUserInput {
  name: string;
  email: string;
  phone_no: string;
  address: string;
  password: string;
}

const useEditUser = async (id: number, data: EditUserInput) => {
  const url = import.meta.env.VITE_API_URL;
  // console.log(data);

  const res = (await fetch(`${url}update-user/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json())) as EditUserResponse;
  // console.log(res);
  return res;
};

export default useEditUser;
