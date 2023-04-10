import React, { useContext, useState } from "react";
import Categories from "../components/Categories";
import Comments from "../components/Comments";
import Providers from "../components/Providers";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "../main/api";
import Banner from "../components/Banner";
import { TypeConext } from "../App";

const Single = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const { type } = useContext(TypeConext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetchData(`${type}/${id}`);
      // if (type === "movie") {
      //   res = await fetchData(`movie/${id}`);
      // } else if (type === "tv") {
      //   res = await fetchData(`tv/${id}`);
      // }

      if (res.status === 200) {
        setData(res.data);
      } else {
        alert("No Data");
        navigate(-1);
      }
    };
    if (type) {
      fetchMovie();
    }
  }, [id, type, navigate]);
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
              url={type === "tv" ? `tv/${id}/credits` : `movie/${id}/credits`}
              type={2}
            />
          </div>
          <div className="w-1/4">
            <Providers id={id} />
          </div>
        </div>
        <div className="">
          <Comments
            id={id}
            url={type === "tv" ? `tv/${id}/reviews` : `movie/${id}/reviews`}
          />
        </div>
      </div>
    </section>
  );
};

export default Single;
