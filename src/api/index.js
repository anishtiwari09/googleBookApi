import { GOOGLE_BASE_URL } from "./Config";

export const bookList = () => {
  return fetch(`${GOOGLE_BASE_URL}volumes?q=+intitle:""&maxResults=40`);
};
