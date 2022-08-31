import useSWR from "swr";
import fetcher from "@apis/fetcher";
import axios from "axios";

export interface Data {
  id: number;
  name: string;
  email: string;
  phone_no: string;
  address: string;
  created_at: Date;
  updated_at: Date;
}

export interface LoginResponse {
  success: string;
  token?: string;
  data?: Data;
}

export interface LoginInput {
  email: string;
  password: string;
}

const useLogin = async (data: LoginInput) => {
  const url = import.meta.env.VITE_API_URL;

  const res = (await fetch(`${url}user-login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json())) as LoginResponse;

  // console.log(res);

  //   const res = await fetch(`${url}user-login`, {
  //     method: "POST",
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => res.json());
  return res;
};

export default useLogin;
