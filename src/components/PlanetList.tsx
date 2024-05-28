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
  const [planetsResponse, setPlanetsResponse] = useState<PlanetResponse>({
    count: 0,
    previous: null,
    next: null,
    results: [],
  });
  const [loading, setLoading] = useState(true);

  const getPlanets = async (url: string) => {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setPlanetsResponse(result);
    setLoading(false);
  };

  useEffect(() => {
    getPlanets("https://swapi.dev/api/planets?page=1");
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        planetsResponse.results.map((planet) => {
          return (
            <Fragment key={planet.url}>
              <Text>Name : {planet.name}</Text>
            </Fragment>
          );
        })
      )}
      <Button
        title="previous"
        disabled={!planetsResponse.previous}
        onPress={() => {
          planetsResponse.previous && getPlanets(planetsResponse.previous);
        }}
      ></Button>
      <Button
        title="next"
        disabled={!planetsResponse.next}
        onPress={() => {
          planetsResponse.next && getPlanets(planetsResponse.next);
        }}
      ></Button>
    </>
  );
};

export default PlanetList;
