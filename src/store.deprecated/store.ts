import { combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movies.reducer";

const store = createStore(
  combineReducers({
    movies: movieReducer,
  })
);

export type StoreState = ReturnType<typeof store.getState>;

export default store;
