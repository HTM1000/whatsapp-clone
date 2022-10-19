import React from 'react';
import { View, Text, FlatList } from 'react-native';

import chats from '../../assets/data/chats.json';

export default function ChatsScreen(){
  return (
    <FlatList 
      data={chats}
      renderItem={({ item }) => <ChatScreen chat={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
}