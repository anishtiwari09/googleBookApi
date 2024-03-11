import {
  Alert,
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useUserRecommended from "../../hooks/useUserRecommended";

export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const { handleAddRecommendedBook } = useUserRecommended();
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = () => {
    setErrorMsg("");
    setIsError(false);
    if (!title?.trim()) {
      setErrorMsg("Please Enter Book Title");
      setIsError(true);
      return;
    }
    if (!author?.trim()) {
      setErrorMsg("Please Enter Author of the books");

      setIsError(true);
      return;
    }
    handleAddRecommendedBook({ title, author, shortDescription });
    setIsSubmit(true);
  };
  const handleReset = () => {
    setAuthor("");
    setTitle("");
    setShortDescription("");
    setIsSubmit(false);
  };
  return (
    <Box>
      {isSubmit ? (
        <Alert severity="success" sx={{ width: "300px", margin: "auto" }}>
          Your Request has been successfully submitted
          <Button onClick={handleReset}>click here</Button> for another Request
        </Alert>
      ) : (
        <Stack direction={"column"} gap={2} alignItems={"center"}>
          <Typography variant="h5" width={"fit-content"} textAlign={"center"}>
            Request for Reccomended Book
          </Typography>
          {isError && (
            <Alert severity="error" sx={{ width: "300px" }}>
              {errorMsg}
            </Alert>
          )}
          <TextField
            label="Book Title"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              width: 350,
            }}
          />
          <TextField
            label="Author"
            variant="filled"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            sx={{
              width: 350,
            }}
          />
          <TextField
            label="Book Description"
            variant="filled"
            value={shortDescription}
            rows={4}
            multiline
            onChange={(e) => setShortDescription(e.target.value)}
            sx={{
              width: 350,
            }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ width: "fit-content" }}
          >
            Submit
          </Button>
        </Stack>
      )}
    </Box>
  );
}
