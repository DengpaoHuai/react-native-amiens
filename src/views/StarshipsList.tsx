import { ActivityIndicator, Button, Text } from "react-native";
import useFetch from "../hooks/useFetch";
import { Fragment, useState } from "react";
import { useQuery } from "@tanstack/react-query";

type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type StarshipsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
};

const StarshipsList = () => {
  const [page, setPage] = useState(1);
  const { data: starships, isLoading } = useQuery<StarshipsResponse>({
    queryKey: ["starships", page],
    queryFn: async () => {
      console.log(`coucou : ${page}`);
      const response = await fetch(
        "https://swapi.dev/api/starships?page=" + page
      );
      return response.json();
    },
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
  return (
    <>
      {isLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : starships?.results?.length ? (
        starships.results.map((people) => {
          return (
            <Fragment key={people.url}>
              <Text>Name : {people.name}</Text>
            </Fragment>
          );
        })
      ) : (
        <ActivityIndicator></ActivityIndicator>
      )}
      <Button
        title="previous"
        onPress={() => {
          setPage(page - 1);
        }}
      ></Button>
      <Button
        title="next"
        onPress={() => {
          setPage(page + 1);
        }}
      ></Button>
    </>
  );
};

export default StarshipsList;
