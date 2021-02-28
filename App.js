import React from 'react';
import { View, Text,StyleSheet,Image, SafeAreaView,TextInput } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HiPage from './screens/HiPage';
import Home from './screens/Home';

const Stack = createStackNavigator()
export default function App() {

  return(
    <NavigationContainer >
      <Stack.Navigator mode="modal" initialRouteName="HiPage" 
      screenOptions={{headerShown: false }}
      >

      <Stack.Screen name="HiPage" component={HiPage}/>
      <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>

     
    </NavigationContainer>
  )
}

