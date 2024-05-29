import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../schemas/movie.schema";
import { setAllMovies } from "../asyncActions/movies.thunk";

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
  },
});

export default movieSlice.reducer;
