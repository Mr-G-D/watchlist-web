import React from "react";
import { Input } from "antd";
import Categories from "./Categories";

const { Search } = Input;

const Main = () => {
  return (
    <div className="font-sans">
      <div className="m-8 flex flex-row justify-between align-middle">
        <Search
          placeholder="Search"
          // onSearch={onSearch}
          style={{ width: 200 }}
        />

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
