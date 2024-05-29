import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../schemas/movie.schema";

export const setAllMovies = createAsyncThunk("get/all/movies", async () => {
  const response = await fetch(
    "https://crudcrud.com/api/0bfdbdc2b50c465fa1f0f9c6a5aad777/movies"
  );
  const result = await response.json();
  return result;
});

export const createMovie = createAsyncThunk(
  "create/movie",
  async (data: Omit<Movie, "_id">) => {
    const response = await fetch(
      "https://crudcrud.com/api/0bfdbdc2b50c465fa1f0f9c6a5aad777/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
);

export const deleteMovie = createAsyncThunk(
  "delete/movie",
  async (id: string) => {
    await fetch(
      `https://crudcrud.com/api/0bfdbdc2b50c465fa1f0f9c6a5aad777/movies/${id}`,
      {
        method: "DELETE",
      }
    );
    return id;
  }
);
