import {
  Box,
  Card,
  CardContent,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import useBook from "../hooks/useBook";
import AddRatingAndComment from "./Search/AddRatingAndComment";

export default function BookDetails({ item, handleClose }) {
  const { booksRating, booksComments } = useBook();
  const bookRatedByUser = useMemo(() => {
    console.log(booksRating);
    let findRating = booksRating.filter((book) => book.bookId === item?.id);
    let averageRating = item?.volumeInfo?.averageRating || 0;
    let ratingsCount = item?.volumeInfo?.ratingCount || 0;
    let newRating = findRating[0]?.rating;
    if (newRating) {
      console.log(newRating);

      averageRating *= ratingsCount;
      ratingsCount += 1;
      averageRating += newRating;
      averageRating /= ratingsCount;
    }
    return { newRating: newRating || 0, averageRating };
  }, [booksRating]);
  let findCommentsByUser = useMemo(() => {
    return (
      booksComments.filter((book) => book?.bookId === item?.id)[0]?.comments ||
      ""
    );
  }, [booksComments]);

  return (
    <>
      <Modal onClose={handleClose} open={true}>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            height: "calc(100% - 50px)",
          }}
        >
          <Paper
            sx={{
              minHeight: 100,
              margin: "10px auto",
              padding: "20px",
              maxHeight: "calc(100% - 20px)",
              overflow: "auto",
            }}
          >
            <Stack direction={"column"}>
              <React.Fragment>
                {" "}
                <Typography variant="h5" component="div" textAlign={"center"}>
                  {item?.volumeInfo?.title}
                </Typography>
                {item?.volumeInfo?.imageLinks?.thumbnail ||
                item?.volumeInfo?.imageLinks?.smallThumbnail ? (
                  <img
                    src={
                      item?.volumeInfo?.imageLinks?.thumbnail ||
                      item?.volumeInfo?.imageLinks?.smallThumbnail
                    }
                    style={{
                      margin: "auto",
                      display: "block",
                      marginTop: "1rem",
                    }}
                    alt="No image"
                  />
                ) : (
                  ""
                )}
                {item?.volumeInfo?.authors?.length ? (
                  <Typography
                    sx={{ mt: 1.5 }}
                    textAlign={"center"}
                    color="text.secondary"
                  >
                    <strong>Authors: </strong>
                    {item?.volumeInfo?.authors?.join(",")}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography
                  sx={{ mt: 1.5 }}
                  textAlign={"center"}
                  color="text.secondary"
                >
                  <strong>Genere: </strong>
                  {item?.volumeInfo?.categories?.join(", ")}
                </Typography>
                <Typography
                  sx={{ mt: 1.5 }}
                  textAlign={"center"}
                  color="text.secondary"
                >
                  <strong>Published Date: </strong>
                  {item?.volumeInfo?.publishedDate}
                </Typography>
                <Typography
                  component={"h5"}
                  variant="h5"
                  sx={{ textAlign: "center", fontSize: 16, mt: 2 }}
                >
                  {" "}
                  Description
                </Typography>
                <Typography
                  sx={{ mt: 1.5, mb: 1.5 }}
                  textAlign={"center"}
                  color="text.secondary"
                  component={"p"}
                  variant="p"
                  style={{
                    textOverflow: "ellipsis",
                  }}
                >
                  {item?.volumeInfo?.description}
                </Typography>
                {bookRatedByUser?.averageRating ? (
                  <Typography
                    sx={{ mt: 1.5 }}
                    textAlign={"center"}
                    color="text.secondary"
                  >
                    <strong>Rating: </strong>
                    {bookRatedByUser?.averageRating}
                  </Typography>
                ) : (
                  ""
                )}
                <AddRatingAndComment
                  item={item}
                  ratingValue={bookRatedByUser?.newRating}
                />
              </React.Fragment>
            </Stack>
          </Paper>
        </Box>
      </Modal>
    </>
  );
}
