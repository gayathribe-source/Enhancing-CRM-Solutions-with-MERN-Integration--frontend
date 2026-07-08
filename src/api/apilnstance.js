import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-integration-backend-rfws.onrender.com",
  withCredentials: true
});

export default api;