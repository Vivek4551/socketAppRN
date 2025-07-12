export type Message = {
  id: number;
  text: string;
  username: string;
  timestamp: string;
};

export type MessageListProps = {
  messages: Message[];
  currentUsername: string;
};

export type MessageItemProps = {
  message: Message;
  isOwnMessage: boolean;
};

export type ChatScreenProps = {
  username: string;
};
