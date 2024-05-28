import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PlanetList from "./src/components/PlanetList";
import PeopleList from "./src/components/PeopleList";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <PeopleList></PeopleList>
        <StatusBar style="auto" />
      </View>
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
