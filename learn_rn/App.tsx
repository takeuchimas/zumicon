import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/views/home";
import Isa from "./src/views/isa/index";
import Izumi from "./src/views/izumi/";
import Three from "./src/views/izumi/three";
import Kataoka from "./src/views/kataoka/index";
import Nakazato from "./src/views/nakazato/index";
import SubPage_1 from "./src/views/nakazato/subPage_1";
import SubPage_2 from "./src/views/nakazato/subPage_2";
import Takeuchi from "./src/views/takeuchi/index";
import Tanaka from "./src/views/tanaka/index";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* Home */}
          <Stack.Screen name="Home" component={Home} />
          {/* Isa */}
          <Stack.Screen name="Isa" component={Isa} />
          {/* Izumi */}
          <Stack.Screen name="Izumi" component={Izumi} />
          {/* 3Dライブラリ */}
          <Stack.Screen name="Three" component={Three} />
          {/* Kataoka */}
          <Stack.Screen name="Kataoka" component={Kataoka} />
          {/* Nakazato */}
          <Stack.Screen name="Nakazato" component={Nakazato} />
          <Stack.Screen name="SubPage1" component={SubPage_1} />
          <Stack.Screen name="SubPage2" component={SubPage_2} />
          {/* Takeuchi */}
          <Stack.Screen name="Takeuchi" component={Takeuchi} />
          {/* Tanaka */}
          <Stack.Screen name="Tanaka" component={Tanaka} />
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
