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
  const sampleData = [
    "#aa",
    "#bb",
    "#cc",
    "#dd",
    "#ee",
    "#bbf",
    "#bbaf",
    "#bbb",
    "#bbga",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text h3 style={{ padding: 12 }}>
        Home
      </Text>
      <FlatList
        data={sampleData}
        renderItem={({ item }) => (
          <Animatable.View
            key={item}
            animation="bounceIn"
            style={{
              width: width,
              height: height / 16,
              paddingTop: 4,
              paddingLeft: 12,
              backgroundColor: "#80BD90",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            <Text h4 onPress={() => navigation.navigate("Select")}>
              {item}
            </Text>
          </Animatable.View>
        )}
        keyExtractor={(item) => item}
      ></FlatList>
    </SafeAreaView>
  );
}

// スタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80BD9E",
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
