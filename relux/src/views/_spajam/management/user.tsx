import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function User() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>User</Text>
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
