import axios from "axios";
import { Movie, typeSelectedMovie } from "~/interfaces/types";



export const fetchMovies = async (searchQuery: string): Promise<Movie[]> => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=c380bfba&s=${searchQuery}`
    );
    return response.data.Search || [];
  };

export const getMovie = async (selectedID: string): Promise<typeSelectedMovie> => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=c380bfba&i=${selectedID}`
  );
  return response.data;
}


