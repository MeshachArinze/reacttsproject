import  { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=true`;

type props = {
    show: boolean,
    msg: string
}

type data = {
    Poster: string;
    Date: string;
    Plot: string;
    Year: string;
    Title: string
}

const useFetch = (urlParams: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<props>({ show: false, msg: "" });
  
  const [data, setData] = useState<data>({Poster: "", Date: "", Plot: "", Year: "", Title: ""});
  const fetchMovies = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  return { isLoading, error, data };
};

export default useFetch;
