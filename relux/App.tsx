import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Top from "./src/views/top";
import Chat from "./src/views/_spajam/chat/chat";
import Home from "./src/views/_spajam/home/home";
import User from "./src/views/_spajam/management/user";
import Select from "./src/views/_spajam/select/select";
import CreateSelect from "./src/views/_spajam/select/createSelect";
import Test from "./src/views/_spajam/sample/test";
import Api from "./src/views/_spajam/api/api";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RecoilRoot } from "recoil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Test">
          {/* Home */}
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Top" component={Top} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="CreateSelect" component={CreateSelect} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Api" component={Api} />
          {/* Isa */}
          {/* <Stack.Screen name="Isa" component={Isa} /> */}
          {/* Izumi */}
          {/* <Stack.Screen name="Izumi" component={Izumi} /> */}
          {/* 3Dライブラリ */}
          {/* <Stack.Screen name="Three" component={Three} /> */}
          {/* Kataoka */}
          {/* <Stack.Screen name="Kataoka" component={Kataoka} /> */}
          {/* Nakazato */}
          {/* <Stack.Screen name="Nakazato" component={Nakazato} /> */}
          {/* <Stack.Screen name="SubPage1" component={SubPage_1} /> */}
          {/* <Stack.Screen name="SubPage2" component={SubPage_2} /> */}
          {/* Takeuchi */}
          {/* <Stack.Screen name="Takeuchi" component={Takeuchi} /> */}
          {/* Tanaka */}
          {/* <Stack.Screen name="Tanaka" component={Tanaka} /> */}
          {/* <Stack.Screen name="Test1" component={Tanaka_test1} /> */}
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
