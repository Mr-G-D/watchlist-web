import React, { useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { fetchData } from "../main/api";

const Home = () => {
  const [url, setUrl] = useState("/trending/all/day");
  const [filter, setFilter] = useState(false);
  const [genres, setGenres] = useState([]);

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
    <div className="flex flex-row h-full">
      <div
        className="basis-1/5  border-slate-200"
        style={{
          borderRightStyle: "solid",
          borderRightWidth: "2px",
        }}
      >
        <Sidebar genre={genres} />
      </div>
      <div className="basis-4/5 w-[80%]">
        {filter ? (
          <Filter setFilter={setFilter} data={url} />
        ) : (
          <Main setFilter={setFilter} handleData={handleData} />
        )}
      </div>
    </div>
  );
};

export default Home;
