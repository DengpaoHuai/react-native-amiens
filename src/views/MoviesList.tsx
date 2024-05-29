import { useEffect, useState } from "react";
import { Movie } from "../schemas/movie.schema";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StoreState, useAppDispatch } from "../store/store";
import { setAllMovies } from "../store/asyncActions/movies.thunk";

const MovieList = () => {
  const dispatch = useAppDispatch();
  const { movies, loading } = useSelector((state: StoreState) => state.movies);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(setAllMovies());
  }, []);

  return (
    <View>
      <Button
        title="Go to Create Movie"
        onPress={() => navigation.navigate("CreateMoviesForm")}
      ></Button>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        movies.map((movie) => {
          return (
            <View>
              <Text>{movie.title}</Text>
              <Text>{movie.description}</Text>
              <Text>{movie.rating}</Text>
            </View>
          );
        })
      )}
    </View>
  );
};

export default MovieList;
