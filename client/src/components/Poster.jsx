import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const Poster = ({ data }) => {
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
      date.slice(0, 4) +
      " " +
      monthNames[parseInt(date.slice(5, 7)) - 1] +
      " " +
      date.slice(8, 10)
    );
  }
  return (
    <div className="w-[180px] inline-block my-5 mx-5">
      <Card
        className=""
        hoverable
        cover={
          <img
            alt="example"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
          />
        }
      >
        <Meta title={data.title} description={formatDate(data.release_date)} />
      </Card>
    </div>
  );
};

export default Poster;
