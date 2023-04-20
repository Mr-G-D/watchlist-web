import axios from "axios";

const TMDB_URL = process.env.REACT_APP_TMDB_URL;
const BACKEND_URL = process.env.REACT_APP_BACKEND_API;

export const axiosGet = async (url) => {
  try {
    const res = await axios.get(
      `${TMDB_URL}/${url}?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const backendPost = async (url, data) => {
  try {
    const res = await axios.post(`${BACKEND_URL}${url}`, {
      ...data,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const backendGet = async (url, query) => {
  try {
    const res = await axios.get(`${BACKEND_URL}${url}`, {
      params: {
        ...query,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};
