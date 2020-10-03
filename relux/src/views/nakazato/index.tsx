import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Icon, Input, Button } from "react-native-elements";

export default function Nakazato({ navigation }: any) {
  let source = require("../../statics/images/sample_header.jpg");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={source} style={styles.image}>
        <Button
          type="outline"
          title="SubPage1"
          titleStyle={styles.button_tytle}
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("SubPage1")}
        />
        <Button
          type="outline"
          title="SubPage2"
          titleStyle={styles.button_tytle}
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("SubPage2")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "gray",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button_tytle: {
    color: "#FFF5EE",
  },
  button_container: {
    margin: 12,
  },
  button: {
    width: 200,
    padding: 12,
    borderColor: "#FFF5EE",
  },
});
