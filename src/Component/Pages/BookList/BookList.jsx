import { Grid } from "@mui/material";
import React from "react";
import useBook from "../../hooks/useBook";
import SkeletonLoader from "../../UIComponent/SkeletonLoader";
import PartialBookDetails from "../../UIComponent/PartialBookDetails";
import Search from "../../UIComponent/Search/Search";
export default function BookList() {
  const { isBookFetched, booksData } = useBook();

  return (
    <div>
      {isBookFetched ? (
        <React.Fragment>
          <Search />
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
        </React.Fragment>
      ) : (
        <>
          <SkeletonLoader />
        </>
      )}
    </div>
  );
}
