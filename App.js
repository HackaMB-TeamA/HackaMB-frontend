import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'; //  remove

import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import AnnouncementsScreen from './src/pages/AnnouncementsScreen/AnnouncementsScreen';
import { colors } from './src/GlobalStyles';

const App = () => {
  return (
    <NavigationContainer>
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
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Comunicados' component={AnnouncementsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

export default App;
