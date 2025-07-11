import React, { useState } from 'react';
import { TextInput, Button, Text, StyleSheet, View } from 'react-native';

type JoinScreenProps = {
  setUsername: (username: string) => void;
};

export default function JoinScreen({ setUsername }: JoinScreenProps) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput
        placeholder="Username"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button
        title="Join Chat"
        onPress={() => {
          if (name.trim()) setUsername(name.trim());
        }}
        disabled={!name.trim()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
});
