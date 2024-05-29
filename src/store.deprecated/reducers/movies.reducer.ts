import { Movie } from "../../schemas/movie.schema";
import { SET_ALL_MOVIES } from "../actions/movies.actions";

type InitialState = {
  movies: Movie[];
};

const initialState: InitialState = {
  movies: [],
};

type MovieReducer = (
  state: InitialState,
  action: {
    type: string;
    payload: any;
  }
) => InitialState;

const movieReducer: MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_MOVIES:
      state.movies = action.payload;
      return state;

    default:
      return state;
  }
};

export default movieReducer;
