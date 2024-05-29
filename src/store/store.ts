import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movie.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export type StoreState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
