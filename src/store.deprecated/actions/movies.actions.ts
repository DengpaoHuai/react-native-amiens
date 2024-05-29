import { Movie } from "../../schemas/movie.schema";

export const SET_ALL_MOVIES = "SET_ALL_MOVIES";

export const setAllMovies = async (movies: Movie[]) => {
  await fetch(
    "https://crudcrud.com/api/45603a75f563475b9cb76fc631f7aacb/movies"
  );
  return {
    type: SET_ALL_MOVIES,
    payload: movies,
  };
};
