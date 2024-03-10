import React, { useContext } from "react";
import BookContext from "../../context/BookContext";

export default function useBook() {
  const context = useContext(BookContext);
  return context;
}
