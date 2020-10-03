import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

type TextProps = {
  text: string;
}

export const TitleRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.text_template, styles.title]}
    >
      {text}
    </Text>
  );
}

export const ItemBoxRender: React.FC<TextProps> = ({ text }) => {
  return (
    <Text
      style={[styles.text_template, styles.item_box]}
    >
      {text}
    </Text>
  );
}

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
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TitleRender text='HOME' />

        <ItemBoxRender text='おすすめ' />

        <ItemRender text='履歴' />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    // justifyContent: "center",
  },
  text_template: {
    marginTop: 12,
    paddingLeft: 20,
  },
  // 画面タイトル
  title: {
    fontSize: 40,
    alignSelf: 'center',
  },
  // 項目のタイトル
  item_box: {
    fontSize: 20,
  },
  // 項目
  item: {
    fontSize: 15,
  }

});
