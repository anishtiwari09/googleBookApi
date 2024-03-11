import React, { useState } from "react";
import UserRecomendationContext from "../../../context/UserRecomondationContext";

export default function UserRecomedationContextProvider({ children }) {
  const [userRecommendedBook, setUserRecommendedBook] = useState([]);
  const handleAddRecommendedBook = ({ title, shortDescription, author }) => {
    userRecommendedBook.push({
      title,
      shortDescription,
      author,
    });
    setUserRecommendedBook([...userRecommendedBook]);
  };
  return (
    <UserRecomendationContext.Provider
      value={{
        handleAddRecommendedBook,
        userRecommendedBook,
      }}
    >
      {children}
    </UserRecomendationContext.Provider>
  );
}
