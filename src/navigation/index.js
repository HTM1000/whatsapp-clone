import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

export default function Navigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
        <Stack.Screen name='Home' component={MainTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name='Chats' component={ChatsScreen}/>
        <Stack.Screen name='Chat' component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}