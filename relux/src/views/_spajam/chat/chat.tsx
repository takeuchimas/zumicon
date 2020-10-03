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
import _ from "lodash";

import { useRecoilState } from "recoil";
import {
  userApiState,
  tagApiState,
  tagState,
  chatState,
} from "../../../atom/index";
import API from "../../../api";

var { width, height, scale } = Dimensions.get("window");

export default function Chat() {
  const [userAvatar, setUserAvatar] = useState(
    "https://placeimg.com/140/140/any"
  );
  const [messages, setMessages] = useState([]);

  const [chat, setChat] = useRecoilState(chatState);
  const [user, setUser] = useRecoilState(userApiState);
  const api = new API();

  const update = () => {
    if (!chat.data.chat_history) return;
    if (chat.data.chat_history.length > 0) {
      // 存在する
      // 自分無し
      let count = 0;
      _.each(chat.data.chat_history, (chatDetail) => {
        if (chatDetail.user === user.user) count++;
      });
      if (count <= 0) {
        setMessages([
          {
            _id: user.user,
            text: user.user_info.state,
            user: {
              _id: user.user,
              name: user.user,
              avatar: "https://placeimg.com/140/140/any",
            },
          },
        ]);
      } else {
        // 既存のデータを投稿する
        let messages = [];
        _.forEachRight(chat.data.chat_history, (chatDetail) => {
          messages.push(
            {
              _id: chatDetail.number,
              text: chatDetail.data,
              user: {
                _id: chatDetail.user,
                name: chatDetail.user,
                avatar: "https://placeimg.com/140/140/any",
              },
            }
          )
        });
        setMessages(messages);
      }
    } else {
      setMessages([
        {
          _id: user.user,
          text: user.user_info.state,
          user: {
            _id: user.user,
            name: user.user,
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ]);
    }

  }

  useEffect(() => {
    update();
  }, [chat]);
  setTimeout(async () => {
    setChat(await api.chatGet(chat.chat_key));
  }, 1000);

  const onSend = useCallback((messages = []) => {
    api.addChat(chat.chat_key, user.user, messages[0].text);
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
          _id: user.user,
          name: user.user,
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
    backgroundColor: "#BDFFB6",
  },
});
