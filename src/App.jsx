import { useEffect, useMemo, useState } from "react";
import BookContext from "./context/BookContext";
import AllPageRoute from "./Routers/AllPageRoute";
import { bookList } from "./api";
const removeDuplicacy = (data) => {
  data.sort();
  let finalData = [];
  finalData.push(data[0]);
  for (let i = 1; i < data.length; i++) {
    let previous = data[i - 1];
    let current = data[i];
    if (previous !== current) finalData.push(current);
  }
  return finalData;
};
function App() {
  const [booksData, setBooksData] = useState([]);
  const [isBookFetched, setIsBookFetched] = useState(false);
  const [filteredBookData, setFilteredBookData] = useState([]);
  const [booksComments, setBooksComments] = useState([]);
  const [booksRating, setBooksRating] = useState([]);
  const allGenreData = useMemo(() => {
    let genreData = [];
    booksData.forEach(({ volumeInfo: { categories } }) => {
      categories = categories || [];
      genreData = [...genreData, ...categories];
    });
    if (genreData.length) genreData = removeDuplicacy(genreData);
    return genreData;
  }, [booksData]);
  const fetchData = async () => {
    try {
      let data = await bookList();
      data = await data.json();
      setBooksData(data?.items || []);
      setFilteredBookData(data?.items || []);
      setIsBookFetched(true);
    } catch (e) {}
  };
  const handleApplyFilter = (title, genre) => {
    let filteredBook = booksData;
    if (genre?.trim()) {
      filteredBook = filteredBook.filter(({ volumeInfo: { categories } }) => {
        categories = categories || [];
        return categories.includes(genre);
      });
    }
    if (title?.trim()) {
      filteredBook = filteredBook.filter(
        ({ volumeInfo: { title: itemTitle } }) => {
          itemTitle = itemTitle || "";
          itemTitle = itemTitle.toLowerCase();
          title = title.trim().toLowerCase();
          return itemTitle.includes(title);
        }
      );
    }
    setFilteredBookData(filteredBook);
  };
  const handleUserComments = (bookId, comments) => {
    booksComments.push({
      bookId,
      comments,
    });
    setBooksComments([...booksComments]);
  };
  const handleUserRating = (bookId, rating) => {
    booksRating.push({ bookId, rating });
    setBooksRating([...booksRating]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <BookContext.Provider
      value={{
        booksData: filteredBookData,
        isBookFetched,
        allGenreData,
        handleApplyFilter,
        handleUserComments,
        handleUserRating,
        booksRating,
        booksComments,
      }}
    >
      <AllPageRoute />
    </BookContext.Provider>
  );
}

export default App;
