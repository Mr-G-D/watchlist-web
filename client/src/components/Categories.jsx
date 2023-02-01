import React from "react";
import Poster from "./Poster";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Categories = (props) => {
  const slideLeft = (id) => {
    let slider = document.getElementById(`slider${id}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = (id) => {
    let slider = document.getElementById(`slider${id}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <section className="">
      <h2 className="mx-8 mt-2 mb-0 font-bold">Genres</h2>
      <div className="ml-3 relative flex items-center">
        <MdChevronLeft
          onClick={() => slideLeft(props.id)}
          className="rounded-full bg-white hover:opacity-100 p-3 absolute opacity-70 cursor-pointer left-0 mx-4"
          style={{
            zIndex: 9,
          }}
        />
        <div
          id={"slider" + props.id}
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </div>
        <MdChevronRight
          onClick={() => slideRight(props.id)}
          className="rounded-full bg-white hover:opacity-100 p-3 absolute opacity-70 cursor-pointer right-0 mx-4"
          style={{
            zIndex: 9,
          }}
        />
      </div>
    </section>
  );
};

export default Categories;
