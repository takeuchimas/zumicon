import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/views/home";
import Isa from "./src/views/isa/index";
import Izumi from "./src/views/izumi/index";
import Kataoka from "./src/views/kataoka/index";
import Nakazato from "./src/views/nakazato/index";
import Takeuchi from "./src/views/takeuchi/index";
import Tanaka from "./src/views/tanaka/index";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Isa" component={Isa} />
        <Stack.Screen name="Izumi" component={Izumi} />
        <Stack.Screen name="Kataoka" component={Kataoka} />
        <Stack.Screen name="Nakazato" component={Nakazato} />
        <Stack.Screen name="Takeuchi" component={Takeuchi} />
        <Stack.Screen name="Tanaka" component={Tanaka} />
      </Stack.Navigator>
    </NavigationContainer>
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
