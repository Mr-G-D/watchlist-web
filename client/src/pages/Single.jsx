import React, { useContext, useState } from "react";
import Categories from "../components/Categories";
import Comments from "../components/Comments";
import Providers from "../components/Providers";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "../main/api";
import Banner from "../components/Banner";
import { TypeConext } from "../App";

const Single = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const { type } = useContext(TypeConext);

  useEffect(() => {
    const fetchMovie = async () => {
      let res;
      if (type === "show") {
        res = await fetchData(`/tv/${id}`);
      } else {
        res = await fetchData(`/movie/${id}`);
      }

      if (res.status === 200) {
        console.log(res.data);
        setData(res.data);
      } else {
        console.log("Error");
      }
    };
    fetchMovie();
  }, [id, type]);
  return (
    <section>
      <Banner
        banner={data.backdrop_path}
        poster={data.poster_path}
        title={data.title ? data.title : data.name}
        genres={data.genres}
        bio={data.tagline}
        description={data.overview}
        date={data.release_date ? data.release_date : data.first_air_date}
      />

      <div className="">
        <div className="flex">
          <div className="w-3/4">
            <Categories
              name="Cast"
              url={
                type === "show" ? `/tv/${id}/credits` : `/movie/${id}/credits`
              }
              type={2}
            />
          </div>
          <div className="w-1/4">
            <Providers id={id} />
          </div>
        </div>
        <div className="">
          <Comments id={id} />
        </div>
      </div>
    </section>
  );
};

export default Single;
