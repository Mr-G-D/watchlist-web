import React, { useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { fetchData } from "../main/api";

const Home = () => {
  const [filter, setFilter] = useState(false);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchData("genre/movie/list");
      if (res.status === 200) {
        setGenre(res.data.genres);
      } else {
        console.log("No Data");
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-row h-full">
      <div
        className="basis-1/5  border-slate-200"
        style={{
          borderRightStyle: "solid",
          borderRightWidth: "2px",
        }}
      >
        <Sidebar genre={genre} />
      </div>
      <div className="basis-4/5 w-[80%]">
        {filter ? (
          <Filter setFilter={setFilter} />
        ) : (
          <Main setFilter={setFilter} />
        )}
      </div>
    </div>
  );
};

export default Home;
