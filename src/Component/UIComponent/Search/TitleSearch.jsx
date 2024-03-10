import { Box, TextField } from "@mui/material";
import React, { useContext } from "react";
import SearchContext from "../../../context/SearchContext";

export default function TitleSearch() {
  const { titleSearch, setTitleSearch } = useContext(SearchContext);
  const handleSearch = (e) => {
    setTitleSearch(e.target.value);
  };
  return (
    <Box>
      <TextField
        placeholder="Search Book Title"
        value={titleSearch}
        onChange={handleSearch}
      />
    </Box>
  );
}
