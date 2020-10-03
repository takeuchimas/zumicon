import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

type TextProps = {
  text: string;
}

// 検索ボックス
export const TextBoxRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.text_template, styles.title]}
    >
      {text}
    </Text>
  );
}

// 画面タイトル
export const TitleRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.text_template, styles.title]}
    >
      {text}
    </Text>
  );
}

// 項目タイトル
export const ItemBoxRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.text_template, styles.item_box]}
    >
      {text}
    </Text>
  );
}

// 項目
export const ItemRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.text_template, styles.item]}
    >
      {text}
    </Text>
  );
}

export default function Home() {

  // 初期化時に一度だけ呼ばれる
  useEffect(() => {
    // APIを呼び出して、関数セット？
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TitleRender text='HOME' />

        <ItemBoxRender text='おすすめ' />
        {/* おすすめ項目を出す */}
        <ItemRender text='へび' />
        <ItemRender text='ねこ' />

        <ItemBoxRender text='履歴' />
        {/* ユーザーの閲覧履歴を出す */}
        <ItemRender text='三毛猫' />

      </View>
    </SafeAreaView>
  );
}

// TypeScript関数群
let function1 = () => {

};

// スタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  text_template: {
    marginTop: 12,
    paddingLeft: 20,
  },
  // 画面タイトル
  title: {
    fontSize: 40,
    paddingLeft: 0,
    alignSelf: 'center',
  },
  // 項目のタイトル
  item_box: {
    fontSize: 25,
  },
  // 項目
  item: {
    fontSize: 15,
  }

});
