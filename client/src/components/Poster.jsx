import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Poster = ({ data, type }) => {
  const navigate = useNavigate();
  function formatDate(date) {
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      (date ? date.slice(0, 4) : "") +
      " " +
      (date ? monthNames[parseInt(date?.slice(5, 7)) - 1] : "") +
      " " +
      (date ? date?.slice(8, 10) : "--")
    );
  }
  return (
    <div key={data.id} className="w-[180px] inline-block my-5 mx-5">
      <Card
        onClick={() => {
          if (type === 1) {
            navigate(`/movie/${data.id}`);
          }
          if (type === 2) {
            navigate(`/actor/${data.name}`, {
              state: {
                id: data.id,
              },
            });
          }
        }}
        className=""
        hoverable
        cover={
          <img
            height="270"
            width="50"
            alt="example"
            className="object-cover"
            src={
              type === 1
                ? data.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`
                  : "https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"
                : data.profile_path
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.profile_path}`
                : `https://www.crossmanworkerscomp.com/wp-content/uploads/2015/06/person-placeholder.jpg`
            }
          />
        }
      >
        <Meta
          title={data.title ? data.title : data.name}
          description={
            data.character
              ? data.character
              : formatDate(
                  data.release_date ? data.release_date : data.first_air_date,
                )
          }
        />
      </Card>
    </div>
  );
};

export default Poster;
