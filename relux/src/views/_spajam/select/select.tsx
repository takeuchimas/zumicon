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
import API from "../../../api";
import { useRecoilState } from "recoil";
import { userApiState, tagApiState } from "../../../atom/index";

var { width, height, scale } = Dimensions.get("window");

export default function Select({ navigation }: any) {
  const [tag, setTag] = useRecoilState(tagApiState);
  const api = new API();

  useEffect(() => {
    (async () => {
      const tagData = await api.getTagData("たき火");
      setTag(tagData);
    })();
  }, []);

  const source = { uri: "https://placeimg.com/140/140/any" };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h4 style={{ marginLeft: 12 }}>
          あなたの好みを選択してください。
        </Text>
        <Text h4 style={{ marginLeft: 12 }}>
          [{tag.tag_name}]
        </Text>
        <View style={{ flexDirection: "row" }}>
          {tag.small_tag.map((tag, index) => {
            if (tag.tag_info.images_url) {
              return (
                <TouchableOpacity
                  key={index}
                  style={{ marginLeft: 12 }}
                  onPress={() => navigation.navigate("Chat")}
                >
                  <Image
                    style={styles.stretch}
                    source={{ uri: String(tag.tag_info.images_url) }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80BD9E",
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    width: (width - 30) / 3,
    height: 100,
    resizeMode: "stretch",
  },
});
