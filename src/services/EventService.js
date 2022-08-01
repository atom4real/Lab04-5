import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3004",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEventsAir() {
    return apiClient.get("/airline");
  },
  //Added new call
  getEventsPass() {
    return apiClient.get("/passengers");
  },
};
