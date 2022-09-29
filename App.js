import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserContextProvider from './lib/UserContext';
import Splash from './lib/Splash/Splash';
import Home from './lib/Home/Home';
import Auth from './lib/Auth/Auth';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Splash" component={Splash} 
        options = {{header: ()=> null}}/>
        <Stack.Screen name = "Auth" component={Auth} 
        options = {{header: ()=> null}}/>
        <Stack.Screen name = "Home" component={Home} 
        options = {{header: ()=> null}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </UserContextProvider>
  );
}
