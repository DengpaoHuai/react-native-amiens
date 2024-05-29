import { createAsyncThunk } from "@reduxjs/toolkit";

export const setAllMovies = createAsyncThunk("get/all/movies", async () => {
  const response = await fetch(
    "https://crudcrud.com/api/45603a75f563475b9cb76fc631f7aacb/movies"
  );
  const result = await response.json();
  return result;
});
