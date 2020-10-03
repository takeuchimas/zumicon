import React, { useState, useEffect } from "react";
import {
  Alert,
  Dimensions,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import * as Animatable from "react-native-animatable";

var { width, height, scale } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const sampleData = ["#aa", "#bb"];

  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Home</Text>
      <FlatList
        data={sampleData}
        renderItem={({ item }) => (
          <Animatable.View
            animation="fadeIn"
            style={{
              width: width,
              height: height / 24,
              backgroundColor: "gray",
            }}
          >
            <Text h4 onPress={() => navigation.navigate("Select")}>
              {item}
            </Text>
          </Animatable.View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

// スタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  text_template: {
    marginTop: 12,
    paddingLeft: 20,
  },
  // 画面タイトル
  title: {
    fontSize: 40,
    alignSelf: "center",
  },
  // 項目のタイトル
  item_box: {
    fontSize: 25,
  },
  // 項目
  item: {
    fontSize: 15,
  },
});
