import React, { forwardRef } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

type Message = {
  id: number;
  text: string;
  username: string;
  timestamp: string;
};

type MessageListProps = {
  messages: Message[];
};

const MessageList = forwardRef<any, MessageListProps>(({ messages }, ref) => (
  <FlatList
    data={messages}
    ref={ref}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.message}>
        <Text style={styles.meta}>
          [{new Date(item.timestamp).toLocaleTimeString()}] {item.username}:
        </Text>
        <Text>{item.text}</Text>
      </View>
    )}
  />
));

export default MessageList;

const styles = StyleSheet.create({
  message: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  meta: { fontWeight: 'bold' },
});
