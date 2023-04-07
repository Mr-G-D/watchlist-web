import { Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { fetchData } from "../main/api";
import Poster from "./Poster";
import axios from "axios";
import { TypeConext } from "../App";

export const Filter = ({ setFilter, data }) => {
  const [movieData, setMovieData] = useState([]);
  const [temp, setTemp] = useState([]);
  const { Search } = Input;
  const { type } = useContext(TypeConext);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchData(data);
      if (res.status === 200) {
        setMovieData(res.data.results);
        setTemp(res.data.results);
      } else {
        console.log("No Data");
      }
    };
    fetch();
  }, [data]);

  const onSearch = async (value) => {
    console.log(value);
    try {
      const res = await axios.get(
        type === "show"
          ? `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${value}`
          : `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${value}`,
      );
      if (res.status === 200) {
        const tempData = await res.data.results.sort(
          (a, b) => b.popularity - a.popularity,
        );
        setMovieData(tempData);
        setTemp(tempData);
        // console.log(tempData);
      } else {
        console.log(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    const temp = movieData?.filter((ele) =>
      ele?.title?.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setTemp(temp);
  };

  return (
    <div className="font-sans">
      <div className="mx-8 my-2 flex flex-row justify-between align-middle">
        <div className="flex w-[80%] items-center">
          <Search
            placeholder="Search"
            onSearch={onSearch}
            onChange={handleSearch}
            style={{ width: "70%", padding: 25, height: "auto" }}
          />

          <div>
            <TfiClose
              className="cursor-pointer"
              size={20}
              onClick={() => setFilter(false)}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="font-medium">John Doe</p>
          <img
            src="https://i.pravatar.cc/500"
            className="w-12 m-2 rounded-full"
            alt="logo"
          />
        </div>
      </div>
      <div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 overflow-auto"
          style={{
            textAlignLast: "center",
            maxHeight: "86vh",
          }}
        >
          {temp?.map((ele) => (
            <div key={ele.id}>
              <Poster data={ele} type={1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
