import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookDetails from "./BookDetails";
import { Box } from "@mui/material";
export default function PartialBookDetails({ item }) {
  const [showBook, setShowBook] = useState(false);
  return (
    <React.Fragment>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <React.Fragment>
            {" "}
            <Typography variant="h5" component="div" textAlign={"center"}>
              {item?.volumeInfo?.title}
            </Typography>
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

                whiteSpace: "nowrap",
              }}
            >
              {item?.volumeInfo?.description}
            </Typography>
            <CardActions>
              <Box sx={{ textAlign: "center", margin: "auto" }}>
                <Button
                  size="small"
                  onClick={() => setShowBook(true)}
                  sx={{ textAlign: "center" }}
                >
                  View Details
                </Button>
              </Box>
            </CardActions>
          </React.Fragment>
        </CardContent>
        {showBook && (
          <BookDetails handleClose={() => setShowBook(false)} item={item} />
        )}
      </Card>
    </React.Fragment>
  );
}
