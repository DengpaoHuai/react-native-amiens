import { Fragment, useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";

type Planet = {
  name: string;
  population: string;
  climate: string;
  terrain: string;
  gravity: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  surface_water: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PlanetResponse = {
  count: number;
  previous: string | null;
  next: string | null;
  results: Planet[];
};

const PlanetList = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://swapi.dev/api/planets?page=" + page)
      .then((response) => response.json())
      .then((result: PlanetResponse) => {
        setPlanets(result.results);
        setTotal(result.count);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      {loading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        planets.map((planet) => {
          return (
            <Fragment key={planet.url}>
              <Text>Name : {planet.name}</Text>
            </Fragment>
          );
        })
      )}
      <Button
        title="previous"
        disabled={page === 1}
        onPress={() => {
          setPage(page - 1);
        }}
      ></Button>
      <Button
        title="next"
        disabled={page * 10 >= total}
        onPress={() => {
          setPage(page + 1);
        }}
      ></Button>
    </>
  );
};

export default PlanetList;
