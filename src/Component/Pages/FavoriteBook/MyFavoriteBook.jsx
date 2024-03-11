import { Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import useBook from "../../hooks/useBook";
import SkeletonLoader from "../../UIComponent/SkeletonLoader";
import PartialBookDetails from "../../UIComponent/PartialBookDetails";
export default function BookList() {
  const {
    isBookFetched,
    allBookData,
    favoriteBook: favoriteBooksArray,
  } = useBook();
  const booksData = useMemo(() => {
    console.log(allBookData);
    return allBookData.filter(({ id }) => favoriteBooksArray.includes(id));
  }, [allBookData, favoriteBooksArray]);

  return (
    <div>
      {isBookFetched ? (
        <React.Fragment>
          {booksData?.length ? (
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12, xl: 12 }}
            >
              {booksData?.map((item, i) => (
                <Grid item xs={1} sm={4} md={4} xl={3} key={item.id}>
                  <PartialBookDetails item={item} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="h4">No Book added</Typography>
          )}
        </React.Fragment>
      ) : (
        <>
          <SkeletonLoader />
        </>
      )}
    </div>
  );
}
