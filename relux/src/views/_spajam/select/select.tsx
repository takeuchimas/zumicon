import React, { useState, useEffect } from "react";
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
import { userApiState, tagApiState, tagState, chatState } from "../../../atom/index";
import API from "../../../api";

var { width, height, scale } = Dimensions.get("window");

export default function Select({ navigation }: any) {
  const [tag, setTag] = useRecoilState(tagApiState);
  const [tagLocal, setTagLocal] = useRecoilState(tagState);
  const [chat, setChat] = useRecoilState(chatState);
  const api = new API();

  useEffect(() => {
    (async () => {
      const tagData = await api.getTagData(tagLocal);
      setTag(tagData);
    })();
  }, [tag]);

  const source = { uri: "https://placeimg.com/140/140/any" };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h4 style={{ marginLeft: 8 }}>
          あなたの好みを選択してください。
        </Text>
        <Text h4 style={{ marginLeft: 8 }}>
          [{tag.tag_name}]
        </Text>
        <View style={{ flexDirection: "column" }}>
          {tag.small_tag ? tag.small_tag.map((tag, index) => {
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
                    setChat(await api.chatGet(tag.tag_info.chat_key));
                    navigation.navigate("Chat");
                  }}
                >
                  <Image
                    style={styles.stretch}
                    source={{ uri: String(tag.tag_info.images_url) }}
                  />
                  <Text style={{ marginTop: 70, marginLeft: 12 }}>
                    {tag.tag_name}
                  </Text>
                </TouchableOpacity>
              );
            }
          }) : <></>}
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
    resizeMode: "stretch",
  },
});
