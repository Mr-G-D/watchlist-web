import React, { useContext } from "react";
import Categories from "./Categories";
import { TypeConext } from "../App";
import Navbar from "./Navbar";

const Main = ({ handleData }) => {
  const { type } = useContext(TypeConext);
  return (
    <div className="font-sans overflow-scroll h-screen">
      <Navbar />
      <div>
        <Categories
          handleData={handleData}
          name={type === "tv" ? "Airing Today" : "Now Playing"}
          url={type === "tv" ? "/tv/airing_today" : "/movie/now_playing"}
          id={1}
          type={1}
        />
        <Categories
          handleData={handleData}
          name="Popular"
          url={type === "tv" ? "/tv/popular" : "/movie/popular"}
          id={2}
          type={1}
        />
        <Categories
          handleData={handleData}
          name="Top Rated"
          url={type === "tv" ? "/tv/top_rated" : "/movie/top_rated"}
          id={3}
          type={1}
        />
      </div>
    </div>
  );
};

export default Main;
