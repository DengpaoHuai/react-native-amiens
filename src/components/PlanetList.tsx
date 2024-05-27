import { Fragment, useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

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
  useEffect(() => {
    fetch("https://swapi.dev/api/planets?page=1")
      .then((response) => response.json())
      .then((result: PlanetResponse) => setPlanets(result.results));
  }, []);

  /* return (
    <FlatList
      data={planets}
      renderItem={({ item: planet }) => {
        return (
          <View>
            <Text>Name : {planet.name}</Text>
          </View>
        );
      }}
    />
  );*/

  const next = () => {};

  const previous = (url: string) => {};

  return (
    <>
      {planets.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <Text>Name : {planet.name}</Text>
          </Fragment>
        );
      })}
      <Button title="previous" onPress={() => previous("url")}></Button>
      <Button title="next" onPress={next}></Button>
    </>
  );
};

export default PlanetList;
