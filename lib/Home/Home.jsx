import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Feed/Feed';
import Chats from '../Chat/Chats';

const Tabs = createBottomTabNavigator();
const Home = () => {
    return (
        <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              
              if (route.name === 'Feed') {
                return <Entypo name="home" size={24} color={color} />;
              } else if (route.name === 'Chats') {
                return <Entypo name="chat" size={24} color={color} />;
              }
  
            },
            tabBarActiveTintColor: 'rgb(0, 163, 255)',
            tabBarInactiveTintColor: '#828385',
          })}
        >
            <Tabs.Screen name = "Feed" component={Feed}/>
            <Tabs.Screen name = "Chats" component={Chats}/>
        </Tabs.Navigator>
    );
}

export default Home;
