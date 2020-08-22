import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";

export default function Izumi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Izumi</Text>
        <Button
          title="Three"
          onPress={() => navigation.navigate("Three")}
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
});
