import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as LocalAuthentication from 'expo-local-authentication';
// recoilで追加
// atomフォルダにある
import { tanakaState } from "../../atom/index";
import { useRecoilState } from "recoil";
import { GreetingRender, TitleRender, ChangeTanakaState, getTanakaState } from "./test2";

class testClass {

  // 変数を宣言してみる
  title: string;
  // アクセス指定をしてみる
  private age: number;

  // コンストラクタで変数を初期化
  constructor(text1: string, num1: number) {
    this.title = text1;
    this.age = num1;
  }

  // num1変数のゲッター
  getAge = (): number => {
    return this.age;
  }
}

// 表示するページ
export default function Test1({ navigation }: any) {

  let tClass = new testClass('テストページ', 20);

  // この中身を表示
  return (
    <SafeAreaView>
      <View>
        {/* タイトル */}
        <TitleRender text={'ここは' + tClass.title + 'です'} />
        {/* 挨拶テキスト */}
        <GreetingRender text={'【' + getTanakaState() + '】'} />
        <GreetingRender text={'私は' + tClass.getAge() + '歳です'} />
        <ChangeTanakaState buttonTitle='田中進化' param={getTanakaState() + '!'} />
        <ChangeTanakaState buttonTitle='田中退化' param={'田中'} />
      </View>
    </SafeAreaView>
  );
}

