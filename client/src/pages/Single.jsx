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
      let res;
      if (type === "movies") {
        res = await fetchData(`movie/${id}`);
      } else {
        res = await fetchData(`tv/${id}`);
      }

      if (res.status === 200) {
        setData(res.data);
      } else {
        console.clear();
        await navigate("/");
        alert("Data Not Available");
      }
    };
    fetchMovie();
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
              url={type === "show" ? `tv/${id}/credits` : `movie/${id}/credits`}
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
