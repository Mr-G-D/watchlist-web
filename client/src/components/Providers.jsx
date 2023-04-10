import React, { useContext, useEffect, useState } from "react";
import { fetchData } from "../main/api";
import { TypeConext } from "../App";

const Providers = ({ id }) => {
  const [buy, setBuy] = useState([]);
  const [rent, setRent] = useState([]);
  const [stream, setStream] = useState([]);
  const { type } = useContext(TypeConext);
  useEffect(() => {
    const fetchProviders = async () => {
      let res;
      if (type === "tv") {
        res = await fetchData(`tv/${id}/watch/providers`);
      } else {
        res = await fetchData(`movie/${id}/watch/providers`);
      }

      if (res.status === 200) {
        setBuy(
          res.data.results.IN?.buy
            ? res.data.results.IN?.buy
            : res.data.results.US?.buy,
        );
        setRent(
          res.data.results.IN?.rent
            ? res.data.results.IN?.rent
            : res.data.results.US?.rent,
        );
        setStream(
          res.data.results.IN?.flatrate
            ? res.data.results.IN?.flatrate
            : res.data.results.US?.flatrate,
        );
      }
    };
    if (type) {
      fetchProviders();
    }
  });
  return (
    <section className="font-sans mt-5">
      <h2 className="mx-8 mt-5 mb-0 font-bold   inline">Watch Now</h2>
      <div className="flex flex-col items-start justify-evenly text-center mx-16">
        {buy ? (
          <div className="w-full">
            <h3 className="font-medium mt-3">Buy</h3>
            {Service(buy?.slice(0, 4))}
          </div>
        ) : (
          <h3 className="font-medium mt-3 ">No Purchase Options</h3>
        )}

        {rent ? (
          <div className="w-full">
            <h3 className="font-medium mt-3">Rent</h3>
            {Service(rent?.slice(0, 4))}
          </div>
        ) : (
          <h3 className="font-medium mt-3 ">No Renting Options</h3>
        )}

        {stream ? (
          <div className="w-full">
            <h3 className="font-medium mt-3">Stream</h3>
            {Service(stream?.slice(0, 4))}
          </div>
        ) : (
          <h3 className="font-medium mt-3 ">No Streaming Options</h3>
        )}
      </div>
    </section>
  );
};

export default Providers;

const Service = (data) => (
  <div key={data.id} className="flex justify-center xl:justify-start w-full">
    {data?.map((ele, index) => (
      <div className="mx-4" key={index}>
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
