import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Details from '../screens/details';
import Results from '../screens/results';
import Login from '../screens/login';




const Stack = createNativeStackNavigator();

function Mystack() {
  return (
   
      <Stack.Navigator initialRouteName="Login">
         
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Results" component={Results} />
        
      </Stack.Navigator>
   
  );
}

export default Mystack;