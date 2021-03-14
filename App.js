import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'; //  remove

import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import AnnouncementsScreen from './src/pages/AnnouncementsScreen/AnnouncementsScreen';
import { colors } from './src/GlobalStyles';
import BottomTabNavigator from './src/navigation/TabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

export default App;
