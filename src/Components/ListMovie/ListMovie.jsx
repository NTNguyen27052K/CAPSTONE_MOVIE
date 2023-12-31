import React, { useEffect, useState } from "react";
import { movieServ } from "../../Services/movieServices";
import "./listMovie.scss";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  set_loading_ended,
  set_loading_started,
} from "../../Redux/slices/loadingSlice";

const ListMovie = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(set_loading_started());
    movieServ
      .getAllMovie()
      .then((result) => {
        console.log(result);
        setMovies(result.data.content);
        dispatch(set_loading_ended());
      })
      .catch((err) => {
        console.log(err);
        dispatch(set_loading_ended());
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold">Danh sách phim</h2>
      <div className="grid grid-cols-4 gap-5">
        {/* // movie_item  */}
        {movies.map((item, index) => {
          return (
            <div className="movie_item" key={index}>
              <img
                src={item.hinhAnh}
                alt=""
                className="h-60 w-full object-cover"
              />
              <div className="text my-3">
                <h3 className="font-bold text-xl">
                  <span className="text-white py-1 px-2 bg-orange-500 rounded-md mr-3">
                    C18
                  </span>{" "}
                  {item.tenPhim}
                </h3>
                <p className="line-clamp-2 mt-2">{item.moTa}</p>
                <NavLink
                  className="w-full inline-block"
                  to={`/detail/${item.maPhim}`}
                >
                  <Button className="w-full text-lg h-10" type="primary" danger>
                    Xem ngay
                  </Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
