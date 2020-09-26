import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

export default function Redux({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>ReduX Test</Text>
        <Button
          title="Login"
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => { }}
        />
        <Text>id: </Text>
        <Text>name: </Text>
        <Text>age: </Text>
        <Text>state: </Text>
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
