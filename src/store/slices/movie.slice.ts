import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../schemas/movie.schema";
import {
  createMovie,
  deleteMovie,
  setAllMovies,
} from "../asyncActions/movies.thunk";

type InitialState = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setAllMovies.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(setAllMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(setAllMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = "Une erreur";
    });
    builder.addCase(createMovie.rejected, (state, action) => {
      state.error = "Une erreur";
    });
    builder.addCase(createMovie.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = [...state.movies, action.payload];
    });
    builder.addCase(deleteMovie.rejected, (state, action) => {
      state.error = "Une erreur";
    });
    builder.addCase(deleteMovie.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = state.movies.filter(
        (movie) => movie._id !== action.payload
      );
    });
  },
});

export default movieSlice.reducer;
