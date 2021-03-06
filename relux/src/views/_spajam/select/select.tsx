import React, { useState, useEffect, Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-elements";

import { useRecoilState } from "recoil";
import {
  userApiState,
  tagApiState,
  tagState,
  chatState,
  timeState
} from "../../../atom/index";
import API from "../../../api";

var { width, height, scale } = Dimensions.get("window");

export default function Select({ navigation }: any) {
  const [tag, setTag] = useRecoilState(tagApiState);
  const [tagLocal, setTagLocal] = useRecoilState(tagState);
  const [chat, setChat] = useRecoilState(chatState);
  const [user, setUser] = useRecoilState(userApiState);
  const [time, setTime] = useRecoilState(timeState);
  const api = new API();

  useEffect(() => {
    (async () => {
      const tagData = await api.getTagData(tagLocal);
      setTag(tagData);
    })();
  }, [tag]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h4 style={{ marginLeft: 8, color: "gray" }}>
          {tag.tag_name}
        </Text>
        <Text h4 style={{ marginLeft: 8, color: "gray" }}>
          あなたの好みを選択してください。
        </Text>
        <View style={{ flexDirection: "column" }}>
          {tag.small_tag ? (
            tag.small_tag.map((tag, index) => {
              if (tag.tag_info.images_url) {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      marginLeft: 8,
                      marginBottom: 4,
                      flexDirection: "row",
                    }}
                    onPress={async () => {
                      // チャットデータ取得処理
                      await api.addHistoryData(user.user, tag.tag_name);
                      setChat(await api.chatGet(tag.tag_info.chat_key));
                      navigation.navigate("Chat");
                    }}
                  >
                    <Image
                      style={styles.stretch}
                      source={{ uri: String(tag.tag_info.images_url) }}
                    />
                    <Text style={{ marginTop: 70, marginLeft: 12, color: "gray" }}>
                      {tag.tag_name}
                    </Text>
                  </TouchableOpacity>
                );
              }
            })
          ) : (
              <></>
            )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDFFB6",
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    // width: (width - 40) / 3,
    // height: 120,
    width: 160,
    height: 160,
    borderRadius: 80,
    resizeMode: "stretch",
  },
});
