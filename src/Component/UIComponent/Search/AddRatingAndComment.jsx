import { Box, FormLabel, Rating } from "@mui/material";
import React from "react";
import useBook from "../../hooks/useBook";

export default function AddRatingAndComment({ item, ratingValue }) {
  const { handleUserRating } = useBook();

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ textAlign: "center" }}>
        <Rating
          value={ratingValue}
          disabled={ratingValue}
          onChange={(event, newValue) => {
            handleUserRating(item?.id, newValue);
          }}
        />
      </Box>
    </Box>
  );
}
