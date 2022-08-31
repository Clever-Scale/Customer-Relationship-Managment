import useSWR from "swr";
import fetcher from "@apis/fetcher";

export interface Datum {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Link {
  url: string;
  label: string;
  active: boolean;
}

export interface Data {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

export interface AllDepartment {
  status: string;
  data: Data;
  message: string;
}

const useAllDepartment = () => {
  const url = import.meta.env.VITE_API_URL;
  const res = useSWR<AllDepartment>([`${url}departments`], fetcher);
  return res;
};

export default useAllDepartment;
