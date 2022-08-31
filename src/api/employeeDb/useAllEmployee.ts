import useSWR from "swr";
import fetcher from "@apis/fetcher";

export interface Datum {
  id: number;
  name: string;
  email: string;
  phone_no: string;
  department: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

export interface Links {
  count: number;
  current_page: number;
  total: number;
  first: number;
  prev?: any;
  next?: any;
}

export interface Data {
  data: Datum[];
  links: Links;
}

export interface AllEmployee {
  status: string;
  data: Data;
  message: string;
}

const useAllEmployee = () => {
  const url = import.meta.env.VITE_API_URL;
  const res = useSWR<AllEmployee>([`${url}employees`], fetcher);
  return res;
};

export default useAllEmployee;
