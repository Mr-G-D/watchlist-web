import { Button } from "antd";
import React, { useContext } from "react";
import Categories from "./Categories";
import { SearchOutlined } from "@ant-design/icons";
import { TypeConext } from "../App";

const Main = ({ setFilter, handleData }) => {
  const { type } = useContext(TypeConext);
  return (
    <div className="font-sans overflow-scroll h-screen">
      <div className="mx-8 my-2 flex flex-row justify-between align-middle items-center">
        <Button
          onClick={() => setFilter(true)}
          type="primary"
          icon={<SearchOutlined />}
        >
          Search
        </Button>

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
        <Categories
          handleData={handleData}
          name={type === "show" ? "Airing Today" : "Now Playing"}
          url={type === "show" ? "/tv/airing_today" : "/movie/now_playing"}
          id={1}
          type={1}
        />
        <Categories
          handleData={handleData}
          name="Popular"
          url={type === "show" ? "/tv/popular" : "/movie/popular"}
          id={2}
          type={1}
        />
        <Categories
          handleData={handleData}
          name="Top Rated"
          url={type === "show" ? "/tv/top_rated" : "/movie/top_rated"}
          id={3}
          type={1}
        />
      </div>
    </div>
  );
};

export default Main;
