import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "../screens/ChatsScreen";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import { Ionicons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator(){
  return (
    <Tab.Navigator 
      initialRouteName="Chats" 
      screenOptions={{ 
        tabBarStyle: { backgroundColor: 'whitesmoke' },
        headerStyle: { backgroundColor: 'whitesmoke' },
      }}
    >
      <Tab.Screen 
        name='Status' 
        component={NotImplementedScreen} 
        options={{ tabBarIcon: ({ color, size}) => <Ionicons name='logo-whatsapp' size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name='Calls' 
        component={NotImplementedScreen} 
        options={{ tabBarIcon: ({ color, size}) => <Ionicons name='call-outline' size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name='Camera' 
        component={NotImplementedScreen} 
        options={{ tabBarIcon: ({ color, size}) => <Ionicons name='camera-outline' size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name='Chats' 
        component={ChatsScreen} 
        options={{ 
          tabBarIcon: ({ color, size}) => <Ionicons name='ios-chatbubbles-sharp' size={size} color={color} /> }} 
          headerRih
      />
      <Tab.Screen 
        name='Settings' 
        component={NotImplementedScreen} 
        options={{ 
          tabBarIcon: ({ color, size}) => (
            <Ionicons name='settings-outline' size={size} color={color} />
        ),
          headerRight: ({ color, size }) => (
            <Entypo name='new-message' size={18} color='royaleblue' style={{ marginRight: 15 }} />
        ),
      }} 
      />
    </Tab.Navigator>
  );
}