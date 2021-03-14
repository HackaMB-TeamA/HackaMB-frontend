import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AnnouncementsScreen from '../pages/AnnouncementsScreen/AnnouncementsScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import Profile from '../pages/Profile';
import { colors } from '../GlobalStyles';
import {
  ProfileStackNavigator,
  ConversationStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name={'ios-star'} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.highlightYellow,
        inactiveTintColor: colors.unfocusedGray,
        style: { backgroundColor: colors.secondary },
        showLabel: false,
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Comunicados' component={AnnouncementsScreen} />
      <Tab.Screen
        name='Conversations'
        component={ConversationStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-chatbox-sharp' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-sharp' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
