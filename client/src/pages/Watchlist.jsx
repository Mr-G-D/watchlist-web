import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { fetchData } from "../main/api";
import Poster from "../components/Poster";
import { backendGet } from "../main/axios";
import secureLocalStorage from "react-secure-storage";
import { TfiClose } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetchData("genre/movie/list");
      if (res.status === 200) {
        setGenres(res.data.genres);
      }
    };
    const fetchMovies = async () => {
      const user_id = secureLocalStorage.getItem("user_id");
      const res = await backendGet("watchlist/all", { user_id });
      const newArr = res.data.map(
        ({ movie_id: id, image: poster_path, ...rest }) => ({
          poster_path,
          id,
          ...rest,
        }),
      );
      setMovies(newArr);
    };
    fetchGenres();
    fetchMovies();
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (!sidebarRef.current?.contains(e.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("mousedown", handle);
  });

  return (
    <div className="flex flex-row h-screen max-w-full">
      <div className="m-5 sm:m-10 absolute top-1.5 right-0">
        <TfiClose
          className="cursor-pointer"
          size={15}
          onClick={() => navigate(-1)}
        />
      </div>
      <div
        ref={sidebarRef}
        className={`basis-1/5 border-slate-200 bg-white z-10 fixed translate-x-0 ease-in-out duration-300 ${
          sidebar ? "absolute" : "hidden"
        } xl:block xl:static `}
        style={{
          borderRightStyle: "solid",
          borderRightWidth: "2px",
          transition: "1s",
        }}
      >
        <Sidebar genre={genres} setSidebar={setSidebar} />
      </div>
      <div className="w-full xl:w-[80%] xl:basis-4/5 mt-16">
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 overflow-auto"
            style={{
              textAlignLast: "center",
            }}
          >
            {movies?.map((ele) => (
              <div key={ele.title}>
                <Poster data={ele} type={1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
