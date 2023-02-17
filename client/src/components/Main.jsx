import { Button } from "antd";
import React from "react";
import Categories from "./Categories";
import { SearchOutlined } from "@ant-design/icons";

const Main = ({ setFilter }) => {
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
        <Categories name="Now Playing" url="/movie/now_playing" id={1} />
        <Categories name="Popular" id={2} url="/movie/popular" />
        <Categories name="Top Rated" id={3} url="/movie/top_rated" />
      </div>
    </div>
  );
};

export default Main;
