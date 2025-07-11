import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { socket } from '../socket';

export default function ChatInput() {
  const [msg, setMsg] = useState('');

  const sendMessage = () => {
    if (msg.trim()) {
      socket.emit('sendMessage', msg);
      setMsg('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your message"
        value={msg}
        onChangeText={setMsg}
        style={styles.input}
      />
      <Button title="Send" onPress={sendMessage} disabled={!msg.trim()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
});
