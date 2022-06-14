import api from "../../api";

export async function usePost(url, data) {
  return await api.post(url, data);
}
