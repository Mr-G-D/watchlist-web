import { axiosGet } from "./axios";

// const API = axios.create({ baseURL: process.env.REACT_APP_URL });

export const fetchData = async (url) => {
  const res = await axiosGet(url);
  return {
    status: res.status,
    data: res.data,
  };
};
