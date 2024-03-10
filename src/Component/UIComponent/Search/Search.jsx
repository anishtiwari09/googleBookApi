import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import TitleSearch from "./TitleSearch";
import SearchContext from "../../../context/SearchContext";
import GenereSearch from "./GenereSearch";
import useBook from "../../hooks/useBook";

export default function Search() {
  const [titleSearch, setTitleSearch] = useState("");
  const [genreSearch, setGenreSearch] = useState("");
  const { handleApplyFilter } = useBook();
  return (
    <Stack direction={"row"} gap={2} m={2} justifyContent={"center"}>
      <SearchContext.Provider
        value={{
          titleSearch,
          setTitleSearch,
          genreSearch,
          setGenreSearch,
        }}
      >
        <TitleSearch />
        <GenereSearch />
        <Button
          variant="contained"
          onClick={() => handleApplyFilter(titleSearch, genreSearch)}
        >
          Search
        </Button>
      </SearchContext.Provider>
    </Stack>
  );
}
