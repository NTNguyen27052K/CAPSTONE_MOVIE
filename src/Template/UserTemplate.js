import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../Pages/Loading/Loading";

const UserTemplate = () => {
  const { isLoading } = useSelector((state) => state.loading);
  return (
    <Fragment>
      {isLoading ? <Loading /> : <Fragment></Fragment>}
      <Header />
      <div className="flex flex-col min-h-screen justify-between">
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default UserTemplate;
