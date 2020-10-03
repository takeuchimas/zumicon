import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Text, Input, Button } from "react-native-elements";

var { width, height, scale } = Dimensions.get("window");

export default function User() {
  return (
    <SafeAreaView style={styles.container}>
      <Text h1 style={{ marginBottom: 60 }}>
        アカウント管理
      </Text>
      <Input
        label="ユーザー名"
        disabled
        containerStyle={{ width: width - 100 }}
        placeholder="表示名"
      ></Input>
      <Input
        label="自己紹介"
        containerStyle={{ width: width - 100 }}
        placeholder="入力してください。"
      ></Input>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Button
            containerStyle={{ width: 120, marginRight: 6 }}
            title="チャット編集"
          ></Button>
          <Button containerStyle={{ width: 120 }} title="詳細情報"></Button>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            containerStyle={{ width: 120, marginRight: 6 }}
            title="更新"
          ></Button>
          <Button containerStyle={{ width: 120 }} title="キャンセル"></Button>
        </View>
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
});
