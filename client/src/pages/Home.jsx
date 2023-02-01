import React from "react";
import { Filter } from "../components/Filter";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row h-full">
      <div
        className="basis-1/5  border-slate-200"
        style={{
          borderRightStyle: "solid",
          borderRightWidth: "2px",
        }}
      >
        <Sidebar />
      </div>
      <div className="basis-4/5 w-[80%]">
        {/* <Main /> */}
        <Filter />
      </div>
    </div>
  );
};

export default Home;
