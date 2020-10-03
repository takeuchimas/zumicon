import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as LocalAuthentication from 'expo-local-authentication';

import { GreetingRender, getTanakaState } from './test2';


// 顔・指紋認証ができるかをアラートで表示
let checkDeviceForHardware = async () => {
  // ライブラリの関数：デバイスで顔・指紋認証が使用できるかの判定
  const compatible = await LocalAuthentication.hasHardwareAsync();

  if (compatible) {
    Alert.alert("結果", "このデバイスは認証可能です");
  } else {
    Alert.alert("結果", "このデバイスは認証できません");
  }
};

// 顔・指紋認証を行う
let handleAuthentication = async () => {

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: "認証してください",
    cancelLabel: "キャンセルラベル",
    fallbackLabel: "デバイスのパスワードで認証する",
    disableDeviceFallback: false,
  });

  if (result.success) {
    // 認証成功
    Alert.alert("認証結果", "成功");
  }
  else {
    // 認証失敗
    Alert.alert("認証結果", "失敗");
  }

};

// 現在表示されているもの
export default function Tanaka({ navigation }: any) {

  return (
    <SafeAreaView style={styles.container}>
      <View>

        {/* デバイスが指紋認証に対応しているかどうか */}
        <GreetingRender text={'【' + getTanakaState() + '】'} />
        <Button
          title="デバイスチェック"
          onPress={checkDeviceForHardware}
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
        />

        {/* 指紋認証を実行する */}
        <Button
          title="認証実行"
          onPress={handleAuthentication}
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
        />

        {/* test1画面に遷移する */}
        <Button
          title="田中の状態を変更"
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Test1")}
        />

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
