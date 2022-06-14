import axios from "axios";

const api = axios.create({
  baseURL: "https://7ed7-91-192-182-24.eu.ngrok.io/",
  timeout: 3000,
});
export default {
  async get(url) {
    try {
      const response = await api.get(url);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async post(url, data) {
    try {
      const response = await api.post(url, data);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  },
};
