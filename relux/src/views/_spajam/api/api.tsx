import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

import { useRecoilState } from "recoil";
import { userApiState } from "../../../atom/index";
// API用
import API, { } from '../../../api';

export default function Api() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useRecoilState(userApiState);

  const api = new API();

  const _handleTextChange = (text: string) => {
    if (text) {
      setUserName(text)
    } else {
      setUserName('');
    }
  }

  const onClickUser = async () => {
    const userData = await api.getUserData(userName);
    console.log('XXX', userData);
    setUser(userData);
  }


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>API</Text>
        <Text>----------------------------------------</Text>
        <Text>User</Text>
        <TextInput
          value={userName}
          onChangeText={_handleTextChange}
        ></TextInput>
        <Button
          title={'User Data GET'}
          onPress={onClickUser}
        ></Button>
        <Text>{JSON.stringify(user)}</Text>
        <Text>----------------------------------------</Text>
      </View>
    </SafeAreaView>
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
