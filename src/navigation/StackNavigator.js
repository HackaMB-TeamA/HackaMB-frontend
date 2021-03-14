import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from './../pages/Profile';
import EditProfile from './../pages/EditProfile';
import Conversations from './../pages/Conversations';
import Chat from './../pages/Chat';
import { colors } from "../GlobalStyles";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

const ConversationStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Conversations} />
      <Stack.Screen
        options={{
          headerTintColor: colors.lightest,
          // headerBackground: 'red',
          headerStyle: {backgroundColor: colors.main},
          headerShown: true,
          title: 'Nome do chat' 
        }} 
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  );
}

export { ProfileStackNavigator, ConversationStackNavigator };