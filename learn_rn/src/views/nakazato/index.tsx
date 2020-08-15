import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet } from "react-native";
import { Icon, Input } from "react-native-elements";

export default function Nakazato() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.component}>
        <Text>Nakazato</Text>
      </View>
      <View style={styles.component}>
        <Icon type="font-awesome" name="home"></Icon>
        <Icon type="font-awesome" name="user"></Icon>
      </View>
      <View style={styles.component}>
        <Input style={styles.input_test} placeholder="test"></Input>
      </View>
      <View style={styles.component}>
        <Image
          style={styles.image}
          source={require("../../statics/images/sample_reactnative.png")}
        ></Image>
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
  component: {
    borderTopWidth: 2,
    borderTopColor: "gray",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: "20%",
    width: "100%",
  },
  input_test: {
    width: 500,
    height: 100,
    borderWidth: 3,
    borderColor: "gray",
  },
  image: {
    width: 100,
    height: 100,
  },
});
