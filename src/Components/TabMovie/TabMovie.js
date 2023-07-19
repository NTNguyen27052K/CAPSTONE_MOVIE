import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { cinemaServ } from "../../Services/CinemaServices";
import TabMovieItem from "./TabMovieItem";

const TabMovie = () => {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    cinemaServ
      .getAllHeThongRap()
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderItemTab = () => {
    return heThongRap.map((item, index) => {
      return {
        label: <img src={item.logo} className="w-10 h-10" alt="" />,
        key: index,
        children: <TabMovieItem maHeThongRap={item.maHeThongRap} />,
      };
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Tabs tabPosition={"left"} items={renderItemTab()} />
    </div>
  );
};

export default TabMovie;