import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Error404 from "../Component/Pages/Error404";
import BookList from "../Component/Pages/BookList/BookList";
import UserRecomendation from "../Component/Pages/UserRecomendation/UserRecomendation";
import MyFavoriteBook from "../Component/Pages/FavoriteBook/MyFavoriteBook";

export default function AllPageRoute() {
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      {pathname === "/" && <Navigate to={"/bookList"} />}
      <Routes>
        <Route path="/bookList" Component={BookList}></Route>
        <Route path="/userRecomendation" Component={UserRecomendation}></Route>
        <Route path="/favouriteBook" Component={MyFavoriteBook}></Route>
        <Route path={"*"} Component={Error404}></Route>
      </Routes>
    </React.Fragment>
  );
}
