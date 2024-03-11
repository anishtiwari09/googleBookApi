import { useContext } from "react";
import UserRecomendationContext from "../../context/UserRecomondationContext";

export default function useUserRecommended() {
  const context = useContext(UserRecomendationContext);

  return context;
}
