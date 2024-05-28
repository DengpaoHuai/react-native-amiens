import { ActivityIndicator, Button, Text } from "react-native";
import useFetch from "../hooks/useFetch";
import { Fragment, useState } from "react";

type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  url: string;
};

export type PeopleResponse = {
  count: number;
  previous: string | null;
  next: string | null;
  results: People[];
};

const PeopleList = () => {
  const [url, setUrl] = useState("https://swapi.dev/api/people");
  const { data, loading } = useFetch<PeopleResponse>(url);
  console.log(data);
  return (
    <>
      {loading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : data?.results?.length ? (
        data.results.map((people) => {
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
          if (data?.previous) setUrl(data.previous);
        }}
      ></Button>
      <Button
        title="next"
        onPress={() => {
          if (data?.next) setUrl(data.next);
        }}
      ></Button>
    </>
  );
};

export default PeopleList;
