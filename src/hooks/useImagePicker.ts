import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

const useImagePicker = () => {
  const openDialog = async (callback = (result) => {}, options = {}) => {
    Alert.alert(
      "Photo",
      "Souhaitez-vous prendre une photo ou ouvrir la galerie",
      [
        {
          text: "Prendre une photo",
          onPress: () => takePicture(callback, options),
        },
        {
          text: "Ouvrir la galerie",
          onPress: () => selectPicture(callback, options),
        },
        {
          text: "Annuler",
          style: "cancel",
        },
      ]
    );
  };

  const selectPicture = async (callback = (result) => {}, options = {}) => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    const result1 = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(result1);
    if (permission.granted == false) {
      alert(
        "Nous avons besoin de votre permission pour utiliser la bibliothèque photo"
      );
      return null;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      ...options,
    });
    if (result.canceled == true) {
      return null;
    }
    const manipResult = await manipulateAsync(
      result.assets[0].uri,
      [{ resize: { height: 1000 } }],
      {
        compress: 0.5,
        format: SaveFormat.JPEG,
        ...options,
      }
    );
    callback(manipResult);
  };

  const takePicture = async (callback = (result) => {}, options = {}) => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted == false) {
      alert("Nous avons besoin de votre permission pour utiliser la camera");
      return null;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      ...options,
    });
    if (result.canceled == true) {
      return null;
    }
    const manipResult = await manipulateAsync(
      result.assets[0].uri,
      [{ resize: { height: 1000 } }],
      {
        compress: 0.5,
        format: SaveFormat.JPEG,

        ...options,
      }
    );
    callback(manipResult);
  };

  return { openDialog, takePicture, selectPicture };
};

export default useImagePicker;
