import { Box, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import useBook from "../../hooks/useBook";
import SearchContext from "../../../context/SearchContext";

export default function GenereSearch() {
  const { allGenreData } = useBook();
  const { genreSearch, setGenreSearch, setTitleSearch } =
    useContext(SearchContext);
  const handleGenreSearch = (e) => {
    setGenreSearch(e.target.value);
    setTitleSearch("");
  };
  return (
    <Box>
      {allGenreData?.length ? (
        <Select value={genreSearch || " "} onChange={handleGenreSearch}>
          <MenuItem value=" ">Select Genre</MenuItem>
          {allGenreData.map((genre, i) => (
            <MenuItem key={i} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      ) : (
        ""
      )}
    </Box>
  );
}
