import { Movie } from "../schemas/movie.schema";

export const getMovies = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/ce1a1fff487f49568afb30cab7a30f57/movies"
  );
  const result = await response.json();
  return result;
};

export const createMovie = async (movie: Omit<Movie, "_id">) => {
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
  return data;
};

export const deleteMovie = async (id: string) => {
  const response = await fetch(
    `https://crudcrud.com/api/ce1a1fff487f49568afb30cab7a30f57/movies/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  return data;
};
