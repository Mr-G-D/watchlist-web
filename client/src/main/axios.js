import axios from "axios";

export const axiosGet = async (url) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${url}?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const backendPost = async (url, data) => {
  try {
    const res = await axios.post(`http://127.0.0.1:8000/${url}`, {
      ...data,
    });
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    return error;
  }
};
