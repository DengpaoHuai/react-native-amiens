import { StyleSheet } from "react-native";
import StackRouter from "./src/router/StackRouter";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackRouter></StackRouter>
      </NavigationContainer>
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
