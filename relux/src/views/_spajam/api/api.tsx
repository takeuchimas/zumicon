import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

import { useRecoilState } from "recoil";
import { userApiState, tagApiState } from "../../../atom/index";
// API用
import API, { } from '../../../api';

export default function Api() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useRecoilState(userApiState);
  const [tagName, setTagName] = useState('');
  const [tag, setTag] = useRecoilState(tagApiState);

  const api = new API();

  const _handleTextChange = (text: string) => {
    if (text) {
      setUserName(text)
    } else {
      setUserName('');
    }
  }

  const _handleTextChange2 = (text: string) => {
    if (text) {
      setTagName(text)
    } else {
      setTagName('');
    }
  }

  const onClickUser = async () => {
    const userData = await api.getUserData(userName);
    setUser(userData);
  }

  const onClickTag = async () => {
    const tagData = await api.getTagData(tagName);
    setTag(tagData);
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
        <Text>Tags</Text>
        <TextInput
          value={tagName}
          onChangeText={_handleTextChange2}
        ></TextInput>
        <Button
          title={'Tags Data GET'}
          onPress={onClickTag}
        ></Button>
        <Text>{tag.tag_name}</Text>
        <Text>{tag.small_tag[0].tag_info.images_url}</Text>
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
