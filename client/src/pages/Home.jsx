import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row m-5">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5">Main Page</div>
    </div>
  );
};

export default Home;
