4;
import { ActivityIndicator, Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovies } from "../services/movies.service";
import { Movie } from "../schemas/movie.schema";

const MovieList = () => {
  const navigation = useNavigation();
  const {
    data: movies,
    isLoading,
    refetch,
  } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(
        `https://crudcrud.com/api/967411f421674bb9992e24288b08b24e/movies/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      return data;
    },
    onSuccess: ({ _id: id }) => {
      //queryClient.invalidateQueries("movies");
      queryClient.setQueryData("movies", (oldMovies: Movie[] | undefined) => {
        return oldMovies?.filter((movie) => movie._id !== id);
      });
    },
  });

  return (
    <View>
      <Button
        title="Go to Create Movie"
        onPress={() => navigation.navigate("CreateMoviesForm")}
      ></Button>
      <Text>nombre : {movies?.length}</Text>
      {isLoading && <ActivityIndicator />}
      {movies?.map((movie) => {
        return (
          <View>
            <Text>{movie.title}</Text>
            <Text>{movie.description}</Text>
            <Text>{movie.rating}</Text>
            <Button
              title="delete"
              onPress={() => {
                deleteMutation.mutate(movie._id);
              }}
            ></Button>
            <Button
              title="voir"
              onPress={() => {
                navigation.navigate("CreateMoviesForm", { movie });
              }}
            ></Button>
          </View>
        );
      })}
    </View>
  );
};

export default MovieList;
