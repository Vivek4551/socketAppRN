import React, { forwardRef } from 'react';
import { FlatList } from 'react-native';
import { MessageItem } from './MessageItem';

export type Message = {
  id: number;
  text: string;
  username: string;
  timestamp: string;
};

type MessageListProps = {
  messages: Message[];
  currentUsername: string;
};

const MessageList = forwardRef<any, MessageListProps>(
  ({ messages, currentUsername }, ref) => {
    return (
      <FlatList
        ref={ref}
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MessageItem
            message={item}
            isOwnMessage={item.username === currentUsername}
          />
        )}
      />
    );
  },
);

export default MessageList;
