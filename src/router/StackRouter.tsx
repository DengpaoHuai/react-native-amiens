import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HelloWorld } from "../components/HelloWorld";
import PlanetList from "../components/PlanetList";
import PeopleList from "../components/PeopleList";
import CreateMoviesForm from "../views/CreateMoviesForm";
import MoviesList from "../views/MoviesList";
import StarshipsList from "../views/StarshipsList";
const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator initialRouteName="MoviesList">
      <Stack.Screen name="Home" component={HelloWorld} />
      <Stack.Screen name="Planets" component={PlanetList} />
      <Stack.Screen name="People" component={PeopleList} />
      <Stack.Screen name="CreateMoviesForm" component={CreateMoviesForm} />
      <Stack.Screen name="MoviesList" component={MoviesList} />
      <Stack.Screen name="StarshipsList" component={StarshipsList} />
    </Stack.Navigator>
  );
};

export default StackRouter;
