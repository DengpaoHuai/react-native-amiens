type DemoObject = {
  name: string;
  age: number;
  address: {
    city: string;
    state: string;
  };
};

let demoObject: DemoObject = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};

demoObject.name = 25;
