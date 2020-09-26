import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useRecoilState } from "recoil";
import { countState } from "../../atom/index";

export default function Izumi({ navigation }: any) {
  const [count, setCount] = useRecoilState(countState);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Izumi</Text>
        <Text>画面遷移回数: {count}</Text>
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
