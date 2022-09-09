import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './lib/Splash/Splash';
import Home from './lib/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Splash" component={Splash} 
        options = {{header: ()=> null}}/>
        <Stack.Screen name = "Home" component={Home} 
        options = {{header: ()=> null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
