import React, { createContext, useEffect, useRef, useState } from "react";
import { Filter } from "../components/Filter";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { fetchData } from "../main/api";

export const FilterProvider = createContext();

const Home = () => {
  const [url, setUrl] = useState("/trending/all/day");
  const [filter, setFilter] = useState(false);
  const [genres, setGenres] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef();

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

  useEffect(() => {
    const handle = (e) => {
      if (!sidebarRef.current?.contains(e.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("mousedown", handle);
  });

  const filterData = {
    filter,
    setFilter,
    sidebar,
    setSidebar,
  };

  const handleData = (movieUrl) => {
    setUrl(movieUrl);
    setFilter(true);
  };

  return (
    <div className="flex flex-row h-screen max-w-full">
      <div
        ref={sidebarRef}
        className={`basis-1/5 border-slate-200 bg-white z-10 fixed translate-x-0 ease-in-out duration-300 ${
          sidebar ? "absolute" : "hidden"
        } xl:block xl:static `}
        style={{
          borderRightStyle: "solid",
          borderRightWidth: "2px",
          transition: "1s",
        }}
      >
        <Sidebar genre={genres} setSidebar={setSidebar} />
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
