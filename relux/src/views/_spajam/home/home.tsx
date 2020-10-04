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
import { Text, Icon, ListItem, SearchBar } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useRecoilState } from "recoil";
import { userApiState, tagApiState, tagState } from "../../../atom/index";
import API from "../../../api";

var { width, height, scale } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const [user, setUser] = useRecoilState(userApiState);
  const [tag, setTag] = useRecoilState(tagState);
  const [canSearch, setCanSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [oData, setOData] = useState([]);

  const api = new API();
  useEffect(() => {
    (async () => {
      let tmpData = await api.getTagSp();
      setOData(tmpData);
    })();
  }, []);
  const rData = user.tag_history;

  const handleSearch = (input: string) => {
    setInputSearch(input);
    let newArr = oData;
    newArr = newArr.filter((tag) => tag.includes(input));
    console.log(newArr);
    setOData(newArr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        h3
        style={{ padding: 8, color: "gray", display: "none" }}
        h3Style={{ textDecorationLine: "underline" }}
      >
        ホーム
      </Text>
      {canSearch ? (
        <SearchBar
          round
          placeholder="検索キーワード..."
          containerStyle={{ width: "100%" }}
          inputContainerStyle={{ width: "100%" }}
          rightIconContainerStyle={{}}
          lightTheme={true}
          value={inputSearch}
          onChangeText={(input) => handleSearch(input)}
          onClear={() => setCanSearch(!canSearch)}
          onCancel={() => setCanSearch(!canSearch)}
        />
      ) : (
        <View />
      )}
      <Text h4 style={{ padding: 12, color: "gray", marginTop: 12 }}>
        おすすめ
      </Text>
      <FlatList
        data={oData}
        renderItem={({ item }) => (
          <Animatable.View
            key={item}
            animation="bounceIn"
            style={{
              width: width - 8,
              height: height / 16,
              paddingTop: 4,
              paddingLeft: 12,
              marginBottom: 2,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "#00A400",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              borderRadius: 16,
            }}
          >
            <Text
              h4
              style={{ color: "#EEE" }}
              onPress={() => {
                setTag(item);
                navigation.navigate("Select");
              }}
            >
              {"#" + item}
            </Text>
          </Animatable.View>
        )}
        keyExtractor={(item) => item}
      ></FlatList>
      <Text h4 style={{ padding: 12, color: "gray" }}>
        履歴
      </Text>
      <FlatList
        data={rData}
        renderItem={({ item }) => (
          <Animatable.View
            key={item}
            animation="bounceIn"
            style={{
              width: width - 8,
              height: height / 16,
              paddingTop: 4,
              paddingLeft: 12,
              marginBottom: 2,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "#00A400",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              borderRadius: 16,
            }}
          >
            <Text
              h4
              style={{ color: "#EEE" }}
              onPress={() => {
                // 小の分
                navigation.navigate("Select");
              }}
            >
              {"#" + item}
            </Text>
          </Animatable.View>
        )}
        keyExtractor={(item) => item}
      ></FlatList>
      <View style={styles.searchIcon}>
        <Icon
          type="font-awesome"
          name="search"
          color="#00FF00"
          style={{ opacity: 0.5 }}
          size={70}
          onPress={() => setCanSearch(!canSearch)}
        />
      </View>
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
  searchIcon: {
    margin: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
