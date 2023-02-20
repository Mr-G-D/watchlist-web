import { Button } from "antd";
import React from "react";
import Categories from "./Categories";
import { SearchOutlined } from "@ant-design/icons";

const Main = ({ setFilter, handleData }) => {
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
          setFilter={setFilter}
          name="Now Playing"
          url="/movie/now_playing"
          id={1}
        />
        <Categories
          handleData={handleData}
          setFilter={setFilter}
          name="Popular"
          url="/movie/popular"
          id={2}
        />
        <Categories
          handleData={handleData}
          setFilter={setFilter}
          name="Top Rated"
          url="/movie/top_rated"
          id={3}
        />
      </div>
    </div>
  );
};

export default Main;
