import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HelloWorld } from "../components/HelloWorld";
import PlanetList from "../components/PlanetList";
import PeopleList from "../components/PeopleList";
import CreateMoviesForm from "../views/CreateMoviesForm";

const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Planets">
      <Stack.Screen name="Home" component={HelloWorld} />
      <Stack.Screen name="Planets" component={PlanetList} />
      <Stack.Screen name="People" component={PeopleList} />
      <Stack.Screen name="CreateMoviesForm" component={CreateMoviesForm} />
    </Stack.Navigator>
  );
};

export default StackRouter;
