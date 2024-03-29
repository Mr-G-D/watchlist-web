import React, { useContext, useEffect, useState } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { backendGet, backendPost } from "../main/axios";
import { TypeConext } from "../App";
import { Button } from "antd";
import { signInWithGoogle } from "../config/firebase";

const Banner = ({
  banner,
  poster,
  title,
  bio,
  genres,
  description,
  date,
  id,
  type,
}) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const { user, setUser } = useContext(TypeConext);

  useEffect(() => {
    checkLike();
    // eslint-disable-next-line
  }, []);

  const checkLike = async () => {
    const list = secureLocalStorage.getItem("list");
    const result = await list?.find((ele) => {
      // eslint-disable-next-line
      return ele.movie_id == id && ele.movie == movie;
    });
    if (result) {
      setLiked(true);
    }
  };

  const movie_id = id;
  const movie = type === "movie" ? 1 : 0;

  const like = async () => {
    setLiked(true);
    const user_id = await secureLocalStorage.getItem("user_id");
    let list = await secureLocalStorage.getItem("list");
    list.push({
      movie_id: parseInt(id),
      movie: movie ? true : false,
    });
    secureLocalStorage.setItem("list", list);
    await backendPost("watchlist/add", {
      user_id,
      movie_id,
      movie,
      title,
      image: poster,
      release_date: date,
    });
  };

  const dislike = async () => {
    setLiked(false);
    const user_id = await secureLocalStorage.getItem("user_id");
    const list = secureLocalStorage.getItem("list");
    const newList = list.filter((ele) => {
      // eslint-disable-next-line
      if (ele.movie_id == id) {
        // eslint-disable-next-line
        return !ele.movie == movie;
      }
      return true;
    });
    secureLocalStorage.setItem("list", newList);
    await backendGet("watchlist/delete", {
      user_id,
      movie_id,
      movie,
    });
  };
  const handleSignIn = async () => {
    const { user } = await signInWithGoogle();
    setUser({
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
    });
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${banner}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Source Sans Pro', Arial, sans-serif",
      }}
    >
      <div
        className="lg:h-[50vh]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(220.5, 220.5, 220.5, 1) calc((50vw - 170px) - 340px), rgba(220.5, 220.5, 220.5, 0.84) 30%, rgba(220.5, 220.5, 220.5, 0.84) 100%)",
        }}
      >
        <div>
          <div
            style={{
              height: "90%",
            }}
            className="p-5 flex items-center flex-col md:flex-row"
          >
            <div className="w-60 p-5">
              <img
                className="w-full"
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster}`}
                alt="poster"
              />
            </div>

            <div
              className="text-center md:text-start"
              style={{
                width: "70%",
              }}
            >
              <h2
                className="w-full m-0 p-0 font-sans"
                style={{
                  fontSize: "2.2rem",
                }}
              >
                {title}
              </h2>
              <div className={genres ? "flex flex-col md:flex-row" : ""}>
                <span className="pl-0 relative top-0 left-0 font-sans">
                  {date}
                </span>
                {genres ? (
                  <span className="pl-5 relative top-0 left-0 font-sans font-medium">
                    {genres?.map(
                      (ele, index) =>
                        ele.name + (index === genres.length - 1 ? "" : ", "),
                    )}
                  </span>
                ) : (
                  ""
                )}
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
                {bio}
              </h3>
              <h3
                className="mt-3 w-full font-sans"
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
                  className="m-0 p-0 font-sans text-justify"
                  style={{
                    fontSize: "1em",
                    boxSizing: "border-box",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="m-5 sm:m-10 absolute top-0  md:right-20 ">
            {user ? (
              liked ? (
                <AiTwotoneStar
                  onClick={dislike}
                  className="cursor-pointer text-yellow-400 border-black"
                  size={25}
                />
              ) : (
                <AiOutlineStar
                  onClick={like}
                  className="cursor-pointer"
                  size={25}
                />
              )
            ) : (
              <Button type="primary" onClick={handleSignIn}>
                Sign In
              </Button>
            )}
          </div>
          <div className="m-5 sm:m-10 absolute top-1.5 right-0">
            <TfiClose
              className="cursor-pointer"
              size={15}
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
