export interface DeleteUserResponse {
  status: string;
  message: string;
}

const useDeleteUser = async (id: number) => {
  const url = import.meta.env.VITE_API_URL;
  // console.log(data);

  const res = (await fetch(`${url}delete-user/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json())) as DeleteUserResponse;
  // console.log(res);
  return res;
};

export default useDeleteUser;
