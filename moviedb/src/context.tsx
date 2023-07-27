/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import  React, { useState, useContext, createContext } from "react";
// make sure to use https
import useFetch from "./useFetch";

interface movie {
    poster: string,
    date: string,
    plot: string,
    title: string,
    year: string
}

type prop = {
    show: boolean;
    msg: string
}

type props = {
  isLoading: boolean | "true" | "false";
  error: prop;
  movies: movie[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=true`;
const AppContext = createContext<props>({isLoading: false, error: {
    show: false,
    msg: ""
}, movies: [{
    poster: "",
    date: "",
    plot: "",
    title: "",
    year: ""
}], query: "", setQuery: ""});

// interface CurrentUser  {
//     isLoading: boolean,
//     error: object,
//     movies: Array<object>,
//     query: string
// }


const AppProvider = ({ children }: any) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  if (!query) {
    throw new Error(
        "userr not found"
    )
  }

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
