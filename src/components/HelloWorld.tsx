import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const HelloWorld = () => {
  const [count, setCounter] = useState(0);
  const [count1, setCounter1] = useState(0);
  const [count2, setCounter2] = useState(0);

  console.log("render");

  return (
    <View style={styles.container}>
      <Text style={styles.compteur}>{count}</Text>
      <Button
        title="cliquer"
        onPress={() => {
          setCounter(count + 1);
          setCounter1(count1 + 1);
          setTimeout(() => {
            setCounter2(count2 + 1);
          }, 500);
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  compteur: {
    fontSize: 50,
  },
});
