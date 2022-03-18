import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Login from './screens/login';
import Details from './screens/details';
import Mystack from './navigations';
import {NavigationContainer}  from '@react-navigation/native';

export default function App() {
  return (
    <View style={{flex:1}}>
        <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
      
    </View>

    
    
   
  );
}


