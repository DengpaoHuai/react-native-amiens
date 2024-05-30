4;
import {
  ActivityIndicator,
  Button,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovies } from "../services/movies.service";
import { Movie } from "../schemas/movie.schema";
import useMovies from "../stores/useMovies";

const MovieList = () => {
  const navigation = useNavigation();
  const { movies } = useMovies();

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Button
        title="Go to Create Movie"
        onPress={() => navigation.navigate("CreateMoviesForm")}
      ></Button>
      <Text>nombre : {movies?.length}</Text>
      {movies?.map((movie) => {
        return (
          <View>
            <Text>{movie.title}</Text>
            <Text>{movie.description}</Text>
            <Text>{movie.rating}</Text>
            <Button title="delete" onPress={() => {}}></Button>
            <Button
              title="voir"
              onPress={() => {
                navigation.navigate("CreateMoviesForm", { movie });
              }}
            ></Button>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MovieList;
