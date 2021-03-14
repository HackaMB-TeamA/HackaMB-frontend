import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './../pages/Profile';
import EditProfile from './../pages/EditProfile';
import Conversations from './../pages/Conversations';
import Chat from './../pages/Chat';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='EditProfile' component={EditProfile} />
    </Stack.Navigator>
  );
};

const ConversationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Profile' component={Conversations} />
      <Stack.Screen name='EditProfile' component={Chat} />
    </Stack.Navigator>
  );
};

export { ProfileStackNavigator, ConversationStackNavigator };
