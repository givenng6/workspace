import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllCon from './AllCon';
import MyChats from './MyChats';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../assets/ws3.png';

const Tab = createMaterialTopTabNavigator();

const Chats = ()=>{
    return(
        <>
        <View style = {styles.Main}>
            <Image source={logo} style = {{height: 20, width: 52}}/>
            <Text style = {styles.Title}>Chats</Text>
        </View>
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: {fontWeight: '600' },
            tabBarStyle: { backgroundColor: "rgb(0, 163, 255)"},
        }}
        >
        <Tab.Screen name = "Chats" component={MyChats}/>
        <Tab.Screen name = "Connections" component={AllCon}/>
       </Tab.Navigator>
        </>
       
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 12,
        paddingTop: 49,
        alignItems: 'center',
        //paddingBottom: 20,
        backgroundColor: 'rgb(0, 163, 255)'
    },
    Title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 5
    }
});

export default Chats;