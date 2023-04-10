import React, { useContext } from "react";
import { TypeConext } from "../App";

const Sidebar = ({ genre }) => {
  const { type, setType } = useContext(TypeConext);
  return (
    <div className="my-6 mx-8 font-sans">
      <div className="">
        <h1 className="uppercase font-thin">
          <span className="font-semibold">The</span>Watchlist
        </h1>
      </div>
      <div className="mt-12">
        {/* <h2 className="font-bold mb-5">Genres</h2> */}
        <div className="mt-4 overflow-auto">
          <p
            onClick={() => {
              setType("movie");
            }}
            className={` text-lg cursor-pointer ${
              type === "tv" ? "font-medium" : "font-bold"
            }`}
          >
            Movies
          </p>
          <p
            onClick={() => {
              setType("tv");
            }}
            className={` text-lg cursor-pointer ${
              type === "tv" ? "font-bold" : "font-medium"
            }`}
          >
            Tv Show
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-bold mb-5">Genres</h2>
        <div className="mt-4 overflow-scroll max-h-[39rem]">
          {genre?.map((ele) => (
            <p key={ele.id} className="font-medium text-lg">
              {ele.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
