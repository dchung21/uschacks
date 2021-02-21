import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import HistoryScreen from './HistoryScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        

        if (route.name === 'Home') {
          iconName = focused
          ? 'home'
          : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused
          ? 'person-circle'
          : 'person-circle-outline';
        } else if (route.name === 'History') {
          iconName = focused
          ? 'time'
          : 'time-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      activeTintColor: '#75cfb8',
      inactiveTintColor: '#aaaaaa',
      showLabel: false,

    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}


class Navbar extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      
    )
  }
}

export default Navbar;