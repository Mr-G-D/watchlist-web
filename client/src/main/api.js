import { axiosGet } from "./axios";

// const API = axios.create({ baseURL: process.env.REACT_APP_URL });

export const fetchGenres = async () => {
  const res = await axiosGet("genre/movie/list");
  return {
    status: res.status,
    data: res.data,
  };
};
