import { create } from "zustand";
import { Movie } from "../schemas/movie.schema";
import { getMovies } from "../services/movies.service";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

type MoviesStoreType = {
  movies: Movie[];
  movie: Movie;
  setAllMovies: (movies: Movie[]) => void;
  createMovie: (movie: Omit<Movie, "_id">) => Promise<void>;
  updateMovie: (movie: Movie) => Promise<void>;
};

export const useMoviesStore = create<MoviesStoreType>((set) => ({
  movies: [],
  movie: {
    _id: "",
    title: "",
    description: "",
    rating: "0",
  },
  setAllMovies: (movies: Movie[]) => {
    set({ movies });
  },
  createMovie: async (movie: Omit<Movie, "_id">) => {
    const response = await fetch(
      "https://crudcrud.com/api/ce1a1fff487f49568afb30cab7a30f57/movies",
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
  updateMovie: async (movie: Movie) => {
    const response = await fetch(
      `https://crudcrud.com/api/ce1a1fff487f49568afb30cab7a30f57/movies/${movie._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );
    set((state) => ({
      movies: state.movies.map((m) => (m._id === movie._id ? movie : m)),
    }));
  },
}));

const useMovies = () => {
  const { setAllMovies, ...rest } = useMoviesStore((state) => state);
  /*const { data: movies, isLoading } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: getMovies,
  });*/

  useEffect(() => {
    getMovies().then((data) => {
      setAllMovies(data);
    });
  }, []);

  return {
    ...rest,
  };
};

export default useMovies;
