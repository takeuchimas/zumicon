import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

export default function CreateSelect({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="設定"
        type="solid"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("CreateSelect_settings")}
      />
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
