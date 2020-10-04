import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image
} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useRecoilState } from "recoil";
import { userApiState, tagApiState } from "../atom/index";
import API from "../api";

var { width, height, scale } = Dimensions.get("window");

export default function Top({ navigation }: any) {
  const [userName, setUserName] = useState("ズミミン");
  const [user, setUser] = useRecoilState(userApiState);
  const api = new API();
  const _handleTextChange = (text: string) => {
    if (text) {
      setUserName(text);
    } else {
      setUserName("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image
            style={{
              flex: 1,
              width: 100,
              height: 100,
            }}
            source={require('../../assets/icon4.png')}
          />
          <Text style={{ position: 'absolute', fontSize: 20 }}>リラシェア</Text>
        </View>
        {/* <ImageBackground source={require('../../assets/icon4.png')} style={{ width: 100, height: 100 }}>
          <Text h1 style={{ marginBottom: 50, color: "gray" }}>
            リラシェア
          </Text>
        </ImageBackground> */}
        <Input
          label="ユーザー名"
          labelStyle={{ color: "gray" }}
          containerStyle={{ width: width - 100 }}
          placeholder="入力してください。"
          value={userName}
          onChangeText={_handleTextChange}
        ></Input>
        <Button
          type="outline"
          title={"スタート"}
          titleStyle={{ color: "#EEE" }}
          buttonStyle={{ backgroundColor: "#00A400" }}
          onPress={async () => {
            const userData = await api.getUserData(userName);
            setUser(userData);
            navigation.navigate("Home");
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDFFB6",
  },
});
