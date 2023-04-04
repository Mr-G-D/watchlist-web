import React, { useEffect, useState } from "react";
import Poster from "./Poster";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { fetchData } from "../main/api";

const Categories = (props) => {
  const [movie, setMovie] = useState([]);

  const slideLeft = (id) => {
    let slider = document.getElementById(`slider${id}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = (id) => {
    let slider = document.getElementById(`slider${id}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetchData(props.url);
      if (res.status === 200) {
        let temp = res.data.results;
        if (temp.length > 10) {
          temp = temp?.slice(0, 10);
          setMovie(temp.reverse());
        } else {
          temp.reverse();
          setMovie(temp);
        }
      } else {
        console.log("No Data");
      }
    };
    const fetchCast = async () => {
      const res = await fetchData(props.url);
      if (res.status === 200) {
        const data = res.data.cast;
        setMovie(data);
      } else {
        console.log("No Data");
      }
    };
    if (props.type === 1) {
      fetchMovies();
    } else if (props.type === 2) {
      fetchCast();
    }
  }, [props.url, props.type]);

  return (
    <section className="mt-5 font-sans">
      <h2
        onClick={() => {
          props.handleData(props.url);
        }}
        className="mx-8 mt-5 mb-0 font-bold cursor-pointer hover:text-blue-900 inline"
      >
        {props.name}
      </h2>
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
          {movie?.map((ele) => (
            <Poster key={ele.id} data={ele} type={props.type} />
          ))}
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
