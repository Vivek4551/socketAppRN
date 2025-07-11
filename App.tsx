import React, { useState } from 'react';
import JoinScreen from './src/screens/JoinScreen';
import ChatScreen from './src/screens/ChatScreens';

export default function App() {
  const [username, setUsername] = useState<string | null>(null);

  return username ? (
    <ChatScreen username={username} />
  ) : (
    <JoinScreen setUsername={setUsername} />
  );
}
