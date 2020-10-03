import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Text, Button, Input } from "react-native-elements";

var { width, height, scale } = Dimensions.get("window");

export default function Top({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text h3 style={{ marginBottom: 50 }}>
        (仮)新ZMAP
      </Text>
      <Input
        label="ユーザー名"
        containerStyle={{ width: width - 100 }}
        placeholder="入力してください。"
      ></Input>
      <Button
        type="outline"
        title={"スタート"}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCFFCC",
    alignItems: "center",
    justifyContent: "center",
  },
});
