import { create } from "zustand";
import { Movie } from "../schemas/movie.schema";

type MoviesStoreType = {
  movies: Movie[];
  setAllMovies: () => Promise<void>;
  createMovie: (movie: Omit<Movie, "_id">) => Promise<void>;
};

export const useMoviesStore = create<MoviesStoreType>((set) => ({
  movies: [],
  setAllMovies: async () => {
    const response = await fetch(
      "https://crudcrud.com/api/967411f421674bb9992e24288b08b24e/movies"
    );
    const result = await response.json();
    set({
      movies: result,
    });
  },
  createMovie: async (movie: Omit<Movie, "_id">) => {
    const response = await fetch(
      "https://crudcrud.com/api/967411f421674bb9992e24288b08b24e/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );
    const data = await response.json();
    set((state) => ({
      movies: [...state.movies, data],
    }));
  },
}));
