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
