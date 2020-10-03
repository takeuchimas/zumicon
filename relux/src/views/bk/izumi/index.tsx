import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useRecoilState } from "recoil";
import { countState, testApiState } from "../../atom/index";
// API用
import API, { TestType, TestURL } from '../../api';

export default function Izumi({ navigation }: any) {
  const [count, setCount] = useRecoilState(countState);
  const [test, setTest] = useRecoilState(testApiState);
  const api = new API();

  // API通信
  // 即時関数で一回だけ実行
  (async () => {
    const data = await api.getStringData(TestURL) as TestType;
    // some check logic...
    setTest(data);
  })();


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Izumi</Text>
        <Text>画面遷移回数: {count}</Text>
        <Text>API実行結果: {test}</Text>
        <Button
          title="Three"
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => {
            setCount(count + 1);
            navigation.navigate("Three");
          }}
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
