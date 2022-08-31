import useSWR from "swr";
import fetcher from "@apis/fetcher";

export interface AllWebInfo {
  status: string;
  user_count: number;
  employee_count: number;
  department_count: number;
}

const useAllWebInfo = () => {
  const url = import.meta.env.VITE_API_URL;
  const res = useSWR<AllWebInfo>([`${url}webinfo`], fetcher);
  return res;
};

export default useAllWebInfo;
