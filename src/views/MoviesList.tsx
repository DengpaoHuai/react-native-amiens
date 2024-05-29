import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { MovieContext } from "../contexts/MovieContextProvider";
import { useNavigation } from "@react-navigation/native";

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Go to Create Movie"
        onPress={() => navigation.navigate("CreateMoviesForm")}
      ></Button>
      <Text>nombre : {movies.length}</Text>
      {movies.map((movie) => {
        return (
          <View>
            <Text>{movie.title}</Text>
            <Text>{movie.description}</Text>
            <Text>{movie.rating}</Text>
            <Button title="delete" onPress={() => {}}></Button>
          </View>
        );
      })}
    </View>
  );
};

export default MovieList;
