import React, { forwardRef } from 'react';
import { FlatList } from 'react-native';
import { MessageItem } from './MessageItem';
import { MessageListProps } from '../types/types';

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
