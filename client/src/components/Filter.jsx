import { Input } from "antd";
import React from "react";
import Poster from "./Poster";

export const Filter = () => {
  const { Search } = Input;
  return (
    <div className="font-sans">
      <div className="m-8 flex flex-row justify-between align-middle">
        <Search
          placeholder="Search"
          // onSearch={onSearch}
          style={{ width: "100%", padding: 25, height: "auto" }}
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
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 overflow-auto"
          style={{
            textAlignLast: "center",
            maxHeight: "86vh",
          }}
        >
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
          <div>
            <Poster />
          </div>
        </div>
      </div>
    </div>
  );
};
