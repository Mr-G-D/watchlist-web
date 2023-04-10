import React, { createContext, useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { fetchData } from "../main/api";

export const FilterProvider = createContext();

const Home = () => {
  const [url, setUrl] = useState("/trending/all/day");
  const [filter, setFilter] = useState(false);
  const [genres, setGenres] = useState([]);

  const filterData = {
    filter,
    setFilter,
  };

  const handleData = (movieUrl) => {
    setUrl(movieUrl);
    setFilter(true);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchData("genre/movie/list");
      if (res.status === 200) {
        setGenres(res.data.genres);
      } else {
        console.log("No Data");
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-row h-full max-w-full">
      <div
        className="basis-1/5 border-slate-200 bg-white z-10 hidden xl:block xl:static "
        style={{
          borderRightStyle: "solid",
          borderRightWidth: "2px",
        }}
      >
        <Sidebar genre={genres} />
      </div>
      <div className="w-full xl:w-[80%] xl:basis-4/5">
        <FilterProvider.Provider value={filterData}>
          {filter ? <Filter data={url} /> : <Main handleData={handleData} />}
        </FilterProvider.Provider>
      </div>
    </div>
  );
};

export default Home;
