import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome! zmap member! let's learn have fun!</Text>
      <Button
        title="isa"
        type="outline"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Isa")}
      />
      <Button
        title="izumi"
        type="solid"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Izumi")}
      />
      <Button
        title="kataoka"
        type="outline"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Kataoka")}
      />
      <Button
        title="nakazato"
        type="solid"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Nakazato")}
      />
      <Button
        title="takeuchi"
        type="outline"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Takeuchi")}
      />
      <Button
        title="tanaka"
        type="solid"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Tanaka")}
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
