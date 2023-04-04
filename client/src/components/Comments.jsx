import React, { useEffect, useState } from "react";
import { fetchData } from "../main/api";

const Comments = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetchData(`movie/${id}/reviews`);
      if (res.status === 200) {
        setReviews(res.data.results);
      } else {
        console.log(res);
      }
    };
    fetchReviews();
  }, [id]);

  return reviews.length !== 0 ? (
    <section className="relative flex flex-col items-start justify-center antialiased bg-white font-sans overflow-scroll">
      <h2 className="mx-8 mt-5 mb-0 font-bold cursor-pointer hover:text-blue-900 inline">
        Reviews
      </h2>
      {reviews?.map((ele) => (
        <div className="container px-0 sm:px-5 min-w-fit" key={ele.id}>
          <div className="flex-col min-w-fit py-4  bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
            <div className="flex flex-row">
              <img
                className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                alt="Noob master's avatar"
                src={`https://ui-avatars.com/api/?name=${ele.author}&background=random`}
              />
              <div className="flex-col mt-1">
                <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                  {ele.author}
                  <span className="ml-2 text-xs font-normal text-gray-500">
                    2 weeks ago
                  </span>
                </div>
                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                  {ele.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  ) : (
    ""
  );
};

export default Comments;
