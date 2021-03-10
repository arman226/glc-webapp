import axios from "axios";

const REQUEST_TIMEOUT_SECONDS = 30;

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: REQUEST_TIMEOUT_SECONDS * 1000,
});

export default apiRequest;
