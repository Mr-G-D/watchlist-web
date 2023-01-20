import React from "react";
import { Input } from "antd";

const { Search } = Input;

const Main = () => {
  return (
    <div className="m-8 font-sans">
      <div className="flex flex-row justify-between align-middle">
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
    </div>
  );
};

export default Main;
