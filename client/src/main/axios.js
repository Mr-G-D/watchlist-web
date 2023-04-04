import axios from "axios";

export const axiosGet = async (url) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${url}?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    console.log(res.data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
