import { createContext, useEffect, useState } from "react";
import { Movie } from "../schemas/movie.schema";

type MovieContextType = {
  movies: Movie[];
  createMovie: (movie: Omit<Movie, "_id">) => void;
};

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
);

const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/0bfdbdc2b50c465fa1f0f9c6a5aad777/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const createMovie = (movie: Omit<Movie, "_id">) => {
    fetch("https://crudcrud.com/api/0bfdbdc2b50c465fa1f0f9c6a5aad777/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => setMovies([...movies, data]));
  };

  return (
    <MovieContext.Provider value={{ movies, createMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
