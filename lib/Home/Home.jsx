import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Feed from '../Feed/Feed';
import ChatsTab from '../Chat/ChatsTab';
import Profile from '../Profile/Profile';

const Tabs = createBottomTabNavigator();
const Home = () => {
    return (
        <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              
              if(route.name === 'Feed') {
                return <Entypo name="home" size={24} color={color} />;
              }else if (route.name === 'ChatsTab') {
                return <Entypo name="chat" size={24} color={color} />;
              }else if (route.name === 'Profile') {
                return <Ionicons name="person" size={24} color={color} />;
              }
  
            },
            tabBarActiveTintColor: 'rgb(0, 163, 255)',
            tabBarInactiveTintColor: '#828385',
          })}
        >
            <Tabs.Screen name = "Feed" component={Feed}
            options = {{header: ()=> null}}/>
            <Tabs.Screen name = "ChatsTab" component={ChatsTab} 
            options = {{header: ()=> null}}/>
            <Tabs.Screen name = "Profile" component={Profile}/>
        </Tabs.Navigator>
    );
}

export default Home;
