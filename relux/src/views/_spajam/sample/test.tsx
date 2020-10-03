import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Button, Icon } from "react-native-elements";

export default function Test({ navigation }: any) {
  let source = require("../../../statics/images/sample_header.jpg");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={source} style={styles.image}>
        <Button
          title="Top"
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          icon={<Icon type="font-awesome" name="home" color="white"></Icon>}
          onPress={() => navigation.navigate("Top")}
        />
        <Button
          title="Home"
          type="solid"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Select"
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Select")}
        />
        <Button
          title="CreateSelect"
          type="solid"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("CreateSelect")}
        />
        <Button
          title="User"
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("User")}
        />
        <Button
          title="Chat"
          type="solid"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Chat")}
        />
        <Button
          title="API"
          type="outline"
          containerStyle={styles.button_container}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Api")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  image: {
    flex: 1,
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
