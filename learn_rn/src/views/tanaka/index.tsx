import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as LocalAuthentication from 'expo-local-authentication';



//指紋認証関係を書いてみる
let checkDeviceForHardware = async () => {
  //ライブラリの関数：デバイスで顔・指紋認証が使用できるかの判定
  const compatible = await LocalAuthentication.hasHardwareAsync();

  if (compatible) {
    Alert.alert("結果", "このデバイスは認証可能です");
  } else {
    Alert.alert("結果", "このデバイスは認証できません");
  }
};

//現在表示されているもの
export default function Tanaka() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Tanaka</Text>
        <Button title="デバイスチェック" onPress={checkDeviceForHardware} type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button} />
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
  button_container: {
    margin: 12,
  },
  button: {
    width: 200,
    padding: 12,
  },
});
