import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/ws3.png';
import Post from './Post';

const NavBar = ()=>{
    return(
        <View style = {styles.Nav}>
            <Image source={logo} style = {{width: 52, height: 20}}/>
            <View style = {styles.Actions}>
                <TouchableOpacity style = {styles.Clickables}>
                <Ionicons name="ios-megaphone" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.Clickables}>
                <MaterialIcons name="event" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Feed = ()=>{
    const user = {username: "Given Mathebula"};
    const data = {to: 'All Departments', msg: "Announcement!", time: "16:12 10/08/2022"};

    return(
        <View style = {styles.Main}>
            <NavBar />
            <ScrollView>
            <Post user = {user} data = {data}/>
            <Post user = {user} data = {data}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    Nav:{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 49,
        paddingBottom: 9,
        backgroundColor: 'rgb(0, 163, 255)',
        paddingLeft: 12
    },
    Actions:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent:'center'
    },
    Clickables:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 12,
       
    }
});

export default Feed;