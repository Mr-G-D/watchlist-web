import React, { useState } from "react";
import Categories from "../components/Categories";
import Comments from "../components/Comments";
import Providers from "../components/Providers";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "../main/api";
import Banner from "../components/Banner";

const Single = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetchData(`/movie/${id}`);
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.log("Error");
      }
    };
    fetchMovie();
  }, [id]);
  return (
    <section>
      <Banner
        banner={data.backdrop_path}
        poster={data.poster_path}
        title={data.title}
        genres={data.genres}
        bio={data.taline}
        description={data.overview}
        date={data.release_date}
      />

      <div className="">
        <div className="flex">
          <div className="w-3/4">
            <Categories name="Cast" url={`/movie/${id}/credits`} type={2} />
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
