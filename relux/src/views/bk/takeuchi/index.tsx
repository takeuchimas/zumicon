import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Takeuchi() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Takeuchi</Text>
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
