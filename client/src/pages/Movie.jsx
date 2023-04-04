import React from "react";
import Categories from "../components/Categories";
import { AiOutlineStar } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import Comments from "../components/Comments";
import Providers from "../components/Providers";

const Movie = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/wxgD3fB5lQ2sGJLog0rvXW049Pf.jpg")`,
          height: "50vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "'Source Sans Pro', Arial, sans-serif",
        }}
      >
        <div
          style={{
            height: "50vh",
            backgroundImage:
              "linear-gradient(to right, rgba(220.5, 220.5, 220.5, 1) calc((50vw - 170px) - 340px), rgba(220.5, 220.5, 220.5, 0.84) 30%, rgba(220.5, 220.5, 220.5, 0.84) 100%)",
          }}
        >
          <div className="flex">
            <div
              style={{
                height: "90%",
              }}
              className=" p-5 flex items-center"
            >
              <div className="w-60 p-5">
                <img
                  className="w-full"
                  src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2YMnBRh8F6fDGCCEIPk9Hb0cEyB.jpg"
                  alt="poster"
                />
              </div>

              <div
                style={{
                  width: "70%",
                }}
              >
                <h2
                  className="w-full m-0 p-0"
                  style={{
                    fontSize: "2.2rem",
                  }}
                >
                  Title
                </h2>
                <div className="flex">
                  <span className="pl-0 relative top-0 left-0">04/01/2022</span>
                  <span className="pl-5 relative top-0 left-0">Comedy</span>
                </div>
                <h3
                  className="mb-0"
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "400",
                    fontStyle: "italic",
                    opacity: 0.7,
                  }}
                >
                  lorem
                </h3>
                <h3
                  className="mt-3 w-full"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.3em",
                  }}
                >
                  Description
                </h3>
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    unicodeBidi: "isolate",
                  }}
                >
                  <p
                    className="m-0 p-0"
                    style={{
                      fontSize: "1em",
                      boxSizing: "border-box",
                    }}
                  >
                    On New Year's Eve 1999, three friends, who are attempting to
                    break into the music scene through pirate radio, drive
                    through London in a desperate search for tickets for the
                    best millennium party ever.
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    padding: 0,
                    display: "flex",
                    position: "relative",
                    top: 0,
                    left: 0,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "transparent",
                      height: "auto",
                      marginBottom: 0,
                      width: "33%",
                      flexBasis: "33%",
                      textAlign: "left",
                      marginRight: 0,
                      boxSizing: "border-box",
                      paddingRight: "20px",
                    }}
                  >
                    <p
                      className="p-0 m-0 overflow-hidden"
                      style={{
                        textOverflow: "ellipsis",
                        fontWeight: "bold",
                        color: "#000",
                      }}
                    >
                      Reggie Yates
                    </p>
                    <p
                      className="p-0 m-0 overflow-hidden"
                      style={{
                        textOverflow: "ellipsis",
                        fontSize: "0.9em",
                      }}
                    >
                      Director, Writer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-10">
              <AiOutlineStar className="cursor-pointer" size={25} />
            </div>
            <div className="m-10 ">
              <TfiClose className="cursor-pointer" size={25} />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex">
          <div className="w-3/4">
            <Categories name="Cast" url={`/movie/${238}/credits`} type={2} />
          </div>
          <div className="w-1/4">
            <Providers id={238} />
          </div>
        </div>
        <div
          className="
        "
        >
          <Comments id={238} />
        </div>
      </div>
    </section>
  );
};

export default Movie;
