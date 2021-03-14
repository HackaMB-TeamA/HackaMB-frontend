import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from './../pages/Profile';
import EditProfile from './../pages/EditProfile';

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

export { ProfileStackNavigator };