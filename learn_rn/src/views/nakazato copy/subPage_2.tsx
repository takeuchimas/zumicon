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

const tatami = require("../../statics/images/sample_tatami.jpg");
const karuta = require("../../statics/images/sample_karuta.png");

const outputKaruta = (num: number) => {
  for (let i = 0; i < num; i++) {
    console.log(i);
    console.log(num);
    return (
      <View>
        <Image source={karuta} style={styles.image_karuta}></Image>
      </View>
    );
  }
};

export default function SubPage2({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={tatami} style={styles.image}>
        <View style={styles.box_top}>{outputKaruta(6)}</View>
        <View style={styles.box_bottom}>{outputKaruta(6)}</View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // backgroundColor: "gray",
  },
  box_top: {
    height: "50%",
    position: "relative",
    borderColor: "gray",
    borderWidth: 2,
  },
  box_bottom: {
    height: "50%",
    position: "relative",
    left: 0,
    bottom: 0,
    borderColor: "gray",
    borderWidth: 2,
  },
  image: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  image_karuta: {
    width: 60,
    height: 120,
    margin: 8,
  },
});
