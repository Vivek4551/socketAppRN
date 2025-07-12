import { StyleSheet, Text, View } from 'react-native';
import { MessageItemProps } from '../types/types';

export const MessageItem = ({ message, isOwnMessage }: MessageItemProps) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isOwnMessage ? styles.rightAlign : styles.leftAlign,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isOwnMessage ? styles.ownBubble : styles.otherBubble,
        ]}
      >
        <Text style={styles.text}>{message.text}</Text>
        <Text style={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  leftAlign: {
    justifyContent: 'flex-start',
  },
  rightAlign: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 12,
  },
  ownBubble: {
    backgroundColor: '#DCF8C6',
    borderTopRightRadius: 0,
  },
  otherBubble: {
    backgroundColor: '#E5E5EA',
    borderTopLeftRadius: 0,
  },
  text: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 10,
    textAlign: 'right',
    marginTop: 4,
    color: 'gray',
  },
});
