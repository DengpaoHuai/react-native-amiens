import { StyleSheet } from "react-native";
import StackRouter from "./src/router/StackRouter";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import MovieContextProvider from "./src/contexts/MovieContextProvider";

export default function App() {
  return (
    <>
      <MovieContextProvider>
        <Provider store={store}>
          <NavigationContainer>
            <StackRouter></StackRouter>
          </NavigationContainer>
        </Provider>
      </MovieContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
