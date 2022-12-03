//import { StyleSheet, Text, View } from 'react-native';
//import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from 'react';
import Home from './src/pages/Home';
import Product from './src/pages/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
     <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false}} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
