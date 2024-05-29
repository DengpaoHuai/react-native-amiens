import { Movie } from "../../schemas/movie.schema";

export const SET_ALL_MOVIES = "SET_ALL_MOVIES";

export const setAllMovies = (movies: Movie[]) => {
  return {
    type: SET_ALL_MOVIES,
    payload: movies,
  };
};
