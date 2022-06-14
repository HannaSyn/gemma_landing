import api from "../../api";

export function useGet(url) {
  return api.get(url);
}
