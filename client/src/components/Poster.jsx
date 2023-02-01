import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const Poster = () => {
  return (
    <div className="w-[180px] inline-block my-5 mx-5">
      <Card
        className=""
        hoverable
        style={{ width: "100%" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default Poster;
