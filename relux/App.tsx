import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Top from "./src/views/top";
import Chat from "./src/views/_spajam/chat/chat";
import Home from "./src/views/_spajam/home/home";
import User from "./src/views/_spajam/management/user";
import Select from "./src/views/_spajam/select/select";
import CreateSelect from "./src/views/_spajam/select/createSelect";
import CreateSelect_settings from "./src/views/_spajam/select/createSelect_settings";
import Test from "./src/views/_spajam/sample/test";
import Api from "./src/views/_spajam/api/api";
import { Button } from "react-native-elements";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RecoilRoot } from "recoil";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Setting a timer"]);
const Stack = createStackNavigator();
console.disableYellowBox = true;

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Test" headerMode="none">
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Top" component={Top} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="CreateSelect" component={CreateSelect} />
          <Stack.Screen
            name="CreateSelect_settings"
            component={CreateSelect_settings}
          />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Api" component={Api} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
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
