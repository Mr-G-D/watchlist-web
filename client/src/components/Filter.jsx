import { Input } from "antd";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import Poster from "./Poster";

export const Filter = ({ setFilter }) => {
  console.log(process.env.REACT_APP_API_KEY);
  const { Search } = Input;
  return (
    <div className="font-sans">
      <div className="m-8 flex flex-row justify-between align-middle">
        <div className="flex w-[80%] items-center">
          <Search
            placeholder="Search"
            // onSearch={onSearch}
            style={{ width: "70%", padding: 25, height: "auto" }}
          />

          <div>
            <TfiClose
              className="cursor-pointer"
              size={20}
              onClick={() => setFilter(false)}
            />
          </div>
        </div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 overflow-auto"
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
