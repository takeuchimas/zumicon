import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Text, Button, Input } from "react-native-elements";

var { width, height, scale } = Dimensions.get("window");

export default function Top({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Text h3 style={{ marginBottom: 50, color: "gray" }}>
          (仮)新ZMAP
        </Text>
        <Input
          label="ユーザー名"
          labelStyle={{ color: "gray" }}
          containerStyle={{ width: width - 100 }}
          placeholder="入力してください。"
        ></Input>
        <Button
          type="outline"
          title={"スタート"}
          titleStyle={{ color: "#EEE" }}
          buttonStyle={{ backgroundColor: "#00A400" }}
          onPress={() => navigation.navigate("Home")}
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
