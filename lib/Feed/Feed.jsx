import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/ws3.png';

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
    return(
        <View>
            <NavBar />
            <Text>Feed</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
        //borderWidth: 1,
        marginRight: 12,
       
    }
});

export default Feed;