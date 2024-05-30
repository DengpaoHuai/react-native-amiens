import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useImagePicker from "../hooks/useImagePicker";
export default function CameraViewScreen() {
  const { openDialog, selectPicture } = useImagePicker();
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      <Button
        title="prendre photo"
        onPress={() => {
          openDialog(
            (result) => {
              console.log(result.uri);
              setImage(result.uri);
            },
            { allowsEditing: true }
          );
        }}
      ></Button>
      <ImageBackground
        style={styles.camera}
        source={{ uri: image }}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
