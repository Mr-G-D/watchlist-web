import React from "react";

const Sidebar = ({ genre }) => {
  return (
    <div className="my-6 mx-8 font-sans">
      <div className="">
        <h1 className="uppercase font-thin">
          <span className="font-semibold">The</span>Watchlist
        </h1>
      </div>
      <div className="mt-12">
        <h2 className="font-bold mb-5">Genres</h2>
        <div
          className="mt-4 overflow-auto"
          style={{
            maxHeight: "44rem",
          }}
        >
          {genre?.map((ele) => (
            <p key={ele.id} className="font-medium text-lg">
              {ele.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
