import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

export default function Home({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Icon type="font-awesome" name="home"></Icon>
      <Text>Welcome! zmap member! let's learn have fun!</Text>
      <Button
        title="Isa"
        type="outline"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Isa")}
      />
      <Button
        title="Izumi"
        type="solid"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Izumi")}
      />
      <Button
        title="Kataoka"
        type="outline"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Kataoka")}
      />
      <Button
        title="Nakazato"
        type="solid"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Nakazato")}
      />
      <Button
        title="Takeuchi"
        type="outline"
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("Takeuchi")}
      />
      <Button
        title="Tanaka"
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
