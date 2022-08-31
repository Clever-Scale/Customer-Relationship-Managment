import useSWR from "swr";
import fetcher from "@apis/fetcher";
import axios from "axios";

export interface Datum {
  id: number;
  name: string;
  email: string;
  phone_no: string;
  address: string;
  created_at: Date;
  updated_at: Date;
}

export interface RegisterResponse {
  status: string;
  message: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  phone_no: string;
  address: string;
  password: string;
}

const useRegister = async (data: RegisterInput) => {
  const url = import.meta.env.VITE_API_URL;
  // console.log(data);

  const res = (await fetch(`${url}create-user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json())) as RegisterResponse;
  // console.log(res);
  return res;
};

export default useRegister;
