type person<T> = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  speciality: T;
};

const maPersonne: person<{
  name: string;
  level: string;
}> = {
  name: "Moussa",
  height: "1.80",
  mass: "70",
  hair_color: "black",
  speciality: {
    name: "React",
    level: "intermediate",
  },
};

maPersonne.speciality.name;

const maPersonne2: person<string> = {
  name: "Moussa",
  height: "1.80",
  mass: "70",
  hair_color: "black",
  speciality: "React",
};
