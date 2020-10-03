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
import { Text, Icon, ListItem } from "react-native-elements";
import * as Animatable from "react-native-animatable";

import { useRecoilState } from "recoil";
import { userApiState, tagApiState } from "../../../atom/index";
import API, { } from '../../../api';

var { width, height, scale } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const [user, setUser] = useRecoilState(userApiState);
  const api = new API();
  // const oData = user;
  const rData = user.tag_history;

  return (
    <SafeAreaView style={styles.container}>
      <Text h3 style={{ padding: 12 }}>
        ホーム
      </Text>
      <FlatList
        data={rData}
        renderItem={({ item }) => (
          <Animatable.View
            key={item}
            animation="bounceIn"
            style={{
              width: width,
              height: height / 16,
              paddingTop: 4,
              paddingLeft: 12,
              marginBottom: 0.8,
              backgroundColor: "#00A400",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            <Text
              h4
              style={{ color: "#EEE" }}
              onPress={() => navigation.navigate("Select")}
            >
              {item}
            </Text>
          </Animatable.View>
        )}
        keyExtractor={(item) => item}
      ></FlatList>
      <View style={styles.addIcon}>
        <Icon
          type="font-awesome"
          name="plus-circle"
          color="#00FF00"
          style={{ opacity: 0.5 }}
          size={70}
          onPress={() => Alert.alert("すんません！未装です！")}
        />
      </View>
    </SafeAreaView>
  );
}

// スタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDFFB6",
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
  addIcon: {
    margin: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
