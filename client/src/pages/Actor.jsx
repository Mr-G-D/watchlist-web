import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { useLocation } from "react-router-dom";
import { fetchData } from "../main/api";
import Poster from "../components/Poster";
import { TypeConext } from "../App";

const Actor = () => {
  const { type } = useContext(TypeConext);
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);
  const { state } = useLocation();
  const id = state.id;
  useEffect(() => {
    const fetchActor = async () => {
      const res = await fetchData(`person/${id}`);
      if (res.status === 200) {
        setActor(res.data);
      } else {
        console.log("error");
      }
    };
    const fetchMovies = async () => {
      const res = await fetchData(
        type === "movies"
          ? `person/${id}/movie_credits`
          : `person/${id}/tv_credits`,
      );
      if (res.status === 200) {
        setMovies(res.data.cast.sort((a, b) => b.popularity - a.popularity));
      } else {
        console.log("error");
      }
    };
    fetchActor();
    fetchMovies();
  }, [id, type]);
  return (
    <section>
      <Banner
        poster={actor.profile_path}
        title={actor.name}
        bio={actor.known_for_department}
        genres={null}
        description={actor.biography?.slice(0, 800)}
        date={actor.birthday}
      />

      <div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 overflow-auto"
          style={{
            textAlignLast: "center",
          }}
        >
          {movies?.map((ele) => (
            <div key={ele.id}>
              <Poster data={ele} type={1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actor;
