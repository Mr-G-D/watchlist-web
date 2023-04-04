import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const Poster = ({ data, type }) => {
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
      date?.slice(0, 4) +
      " " +
      monthNames[parseInt(date?.slice(5, 7)) - 1] +
      " " +
      date?.slice(8, 10)
    );
  }
  return (
    <div className="w-[180px] inline-block my-5 mx-5">
      <Card
        onClick={() => {
          if (type === 1) {
            window.location.href = `/movie/${data.id}`;
          }
        }}
        className=""
        hoverable
        cover={
          <img
            height="270"
            width="50"
            alt="example"
            src={
              data.poster_path
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`
                : data.profile_path
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.profile_path}`
                : `https://i.pravatar.cc/300?u=${data.name}`
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
