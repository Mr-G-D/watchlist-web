import React, { useEffect, useState } from "react";
import { fetchData } from "../main/api";

const Providers = ({ id }) => {
  const [buy, setBuy] = useState([]);
  const [rent, setRent] = useState([]);
  const [stream, setStream] = useState([]);
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await fetchData(`/movie/${id}/watch/providers`);
      if (res.status === 200) {
        setBuy(res.data.results.IN.buy);
        setRent(res.data.results.IN.rent);
        setStream(res.data.results.IN.flatrate);
      }
    };
    fetchProviders();
  });
  return (
    <section className="font-sans mt-5">
      {" "}
      <h2 className="mx-8 mt-5 mb-0 font-bold   inline">Watch Now</h2>
      <div className="flex flex-col items-start justify-evenly text-start mx-16">
        <div className="w-full">
          <h3 className="font-medium mt-3 mx-5">Buy</h3>
          {Service(buy)}
        </div>
        <div className="w-full">
          <h3 className="font-medium mt-3 mx-5">Rent</h3>
          {Service(rent)}
        </div>
        <div className="w-full">
          <h3 className="font-medium mt-3 mx-5">Stream</h3>
          {Service(stream)}
        </div>
      </div>
    </section>
  );
};

export default Providers;

const Service = (data) => (
  <div className="flex justify-start w-full">
    {data.map((ele) => (
      <div className="mx-5">
        <img
          className="w-8 h-auto"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${ele.logo_path}`}
          alt="logo"
        />
        {/* <h4 className="font-normal my-1 text-sm">{ele.provider_name}</h4> */}
      </div>
    ))}
  </div>
);