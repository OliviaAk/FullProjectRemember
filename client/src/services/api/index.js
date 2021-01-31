import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

const setHeaders = (headers = {}) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.authorization = `Bearer ${token}`;
  return {
    ...headers,
    authorization: token ? `Bearer ${token}` : "",
  };
};

const get = (url, headers) => {
  return axios.get(`${url}`, setHeaders(headers));
};

const post = (url, data, headers) => {
  return axios.post(`${url}`, data, setHeaders(headers));
};

const patch = (url, data, headers) => {
  return axios.patch(`${url}`, data, setHeaders(headers));
};

export const apiServer = { get, patch, post };
