import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import API, { } from '../../../api';

export default function CreateSelect_settings() {
  const [image, setImage] = useState(null);


  ///////////////////
  const api = new API();
  ///////////////////

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result.cancelled === false) {
      setImage(result.uri);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
        <Button title="アップロード" onPress={async () => {
          const res = await api.postImage(image, Platform.OS);
          console.log('アップロードに成功しました', res);
        }} />
      </View>
    </SafeAreaView>
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
