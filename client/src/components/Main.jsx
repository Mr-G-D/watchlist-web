import { Button } from "antd";
import React from "react";
import Categories from "./Categories";
import { SearchOutlined } from "@ant-design/icons";
import { fetchGenres } from "../main/api";

const Main = ({ setFilter }) => {
  fetchGenres();
  return (
    <div className="font-sans">
      <div className="m-8 flex flex-row justify-between align-middle">
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
        <Categories id={1} />
        <Categories id={2} />
      </div>
    </div>
  );
};

export default Main;
