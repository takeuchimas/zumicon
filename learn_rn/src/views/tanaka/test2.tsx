// react-nativeクラスから機能をインポート
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// react-native-elementsクラスから機能をインポート
import { Button, Icon } from "react-native-elements";
import React from 'react';
import { useRecoilState, RecoilState } from 'recoil';
import { tanakaState } from "../../atom/index";

type TextProps = {
  text: string;
}
type ButtonProps = {
  buttonTitle: string;
  param: string;
}

export const TitleRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.title_text, styles.center_text]}
    >
      {text}
    </Text>
  );
}

// FCはFunctionComponentの略
export const GreetingRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.center_text, styles.greeting_text]}
    >
      {text}
    </Text>
  );
}

export const ChangeTanakaState: React.FC<ButtonProps> = ({ buttonTitle, param }) => {

  const [tanaka, setTanaka] = useRecoilState(tanakaState);

  return (
    <Button
      title={buttonTitle}
      type="outline"
      onPress={() => {
        setTanaka(param);
      }}
    />
  );
}

export const getTanakaState = (): string => {
  return useRecoilState(tanakaState)[0];
}

const styles = StyleSheet.create({
  center_text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },

  title_text: {
    fontSize: 50,
    marginTop: 50,
    marginBottom: 30,
    // paddingLeft: 120,
  },

  greeting_text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  }

});
