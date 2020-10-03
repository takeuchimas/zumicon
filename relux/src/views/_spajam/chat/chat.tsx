import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

var { width, height, scale } = Dimensions.get("window");

export default function Chat() {
  const [userId, setUserId] = useState(1);
  const [userName, setUserName] = useState("test");
  const [userAvatar, setUserAvatar] = useState(
    "https://placeimg.com/140/140/any"
  );
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "初めまして。",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "TestUser",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userId,
          name: userName,
          avatar: userAvatar,
        }}
        placeholder="入力してください。"
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        renderUsernameOnMessage={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
