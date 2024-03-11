import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Stack direction={"row"} margin={2} gap={2} justifyContent={"center"}>
      <Link to={"/bookList"}>BookList</Link>
      <Link to={"/userRecomendation"}>User Recommendations</Link>
      <Link to={"/favouriteBook"}>Your Favorited Book</Link>
    </Stack>
  );
}
