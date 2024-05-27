import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HelloWorld as Toto } from "./src/components/HelloWorld";
import CustomCard from "./src/components/CustomCard";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <CustomCard title="titre" footer="footer">
          <Text>DEEEEMOOOOO</Text>
        </CustomCard>
        <StatusBar style="auto" />
      </View>
      <Text>demo</Text>
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
