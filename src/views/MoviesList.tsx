import { useEffect, useState } from "react";
import { Movie } from "../schemas/movie.schema";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setAllMovies } from "../store/actions/movies.actions";
import { useNavigation } from "@react-navigation/native";
import { StoreState } from "../store/store";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: StoreState) => state.movies.movies);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://crudcrud.com/api/45603a75f563475b9cb76fc631f7aacb/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setAllMovies(data));
      });
  }, []);

  return (
    <View>
      <Button
        title="Go to Create Movie"
        onPress={() => navigation.navigate("CreateMoviesForm")}
      ></Button>
      {movies.map((movie) => {
        return (
          <View>
            <Text>{movie.title}</Text>
            <Text>{movie.description}</Text>
            <Text>{movie.rating}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MovieList;
