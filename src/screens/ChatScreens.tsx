/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { socket } from '../socket';
import MessageList from '../component/MessageList';
import ChatInput from '../component/ChatInput';
import { ChatScreenProps, Message } from '../types/types';

export default function ChatScreen({ username }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const listRef = useRef<any>(null);

  useEffect(() => {
    socket.connect();
    socket.emit('join', username);

    socket.on('messageHistory', history => setMessages(history));
    socket.on('receiveMessage', msg => setMessages(prev => [...prev, msg]));
    socket.on('system', text =>
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text,
          username: 'System',
          timestamp: new Date().toISOString(),
        },
      ]),
    );

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    listRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      <MessageList
        messages={messages}
        currentUsername={username}
        ref={listRef}
      />
      <ChatInput />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
  },
});
