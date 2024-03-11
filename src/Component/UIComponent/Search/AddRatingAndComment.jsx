import { Box, Button, FormLabel, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import useBook from "../../hooks/useBook";

export default function AddRatingAndComment({
  item,
  ratingValue,
  userComments,
}) {
  const { handleUserRating, handleUserComments } = useBook();
  const [text, setText] = useState("");
  const handleSubmitComment = () => {
    handleUserComments(item?.id, text);
  };
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
      <Box textAlign={"center"} width={"80%"} margin={"auto"} marginTop={2}>
        <TextField
          placeholder="Add comment"
          fullWidth
          disabled={userComments}
          value={userComments || text}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      {userComments ? (
        ""
      ) : (
        <Box textAlign={"center"} width={"80%"} margin={"auto"} marginTop={2}>
          <Button variant="contained" onClick={handleSubmitComment}>
            Submit Comment
          </Button>
        </Box>
      )}
    </Box>
  );
}
