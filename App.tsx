import { StyleSheet } from "react-native";
import StackRouter from "./src/router/StackRouter";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StackRouter></StackRouter>
        </NavigationContainer>
      </Provider>
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
