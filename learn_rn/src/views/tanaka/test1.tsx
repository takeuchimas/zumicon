import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as LocalAuthentication from 'expo-local-authentication';

// export default function Test1(){
//     let test1 = new Test1Renderer();

//     test1.func1();
// }

// class Test1Renderer{

//     func1(){
//         return(
//             <SafeAreaView>
//                 <View>
//                     <Text>テストページ</Text>
//                 </View>
//             </SafeAreaView>
//         )
//     }
// }

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
        <Text
          style={[styles.text_center, styles.title_text]}
        >
          {tClass.title}
        </Text>
        {/* 挨拶テキスト */}
        <Text
          style={[styles.text_center, styles.greeting_text]}
        >
          私の年齢は{tClass.getAge()}歳です
        </Text>



      </View>
    </SafeAreaView>
  );
}

// CSS
const styles = StyleSheet.create({

  text_center: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },

  title_text: {
    fontSize: 50,
    marginTop: 50,
    // paddingLeft: 120,
  },

  greeting_text: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
  }
});