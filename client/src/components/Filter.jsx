import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { fetchData } from "../main/api";
import Poster from "./Poster";

export const Filter = ({ setFilter, data }) => {
  const [movieData, setMovieData] = useState([]);
  const { Search } = Input;

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchData(data);
      if (res.status === 200) {
        setMovieData(res.data.results);
      } else {
        console.log("No Data");
      }
    };
    fetch();
  }, [data]);

  return (
    <div className="font-sans">
      <div className="mx-8 my-2 flex flex-row justify-between align-middle">
        <div className="flex w-[80%] items-center">
          <Search
            placeholder="Search"
            // onSearch={onSearch}
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
          {movieData?.map((ele) => (
            <div>
              <Poster key={ele.id} data={ele} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
