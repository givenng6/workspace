import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ActionSheet, {SheetManager} from "react-native-actions-sheet";
import { Entypo } from '@expo/vector-icons';
import logo from '../assets/ws3.png';

const Preview =({id, user})=> {
  return (
    <ActionSheet id = {id} bounceOnOpen = {true} headerAlwaysVisible = {true} gestureEnabled = {true}>
    <View style = {styles.Main}>
        <View style = {styles.Avater}>
            <Image source={logo} style = {{width: 230, height: 100}}/>
        </View>
        <Text style = {{fontSize: 22, fontWeight: '600'}}>{user.username}</Text>
        <Text style = {{color: 'rgb(0, 163, 255)', fontWeight: '600', marginTop: 5}}>Email</Text>
        <Text>{user.email}</Text>
        <Text style = {{color: 'rgb(0, 163, 255)', fontWeight: '600',  marginTop: 5}}>Department</Text>
        <Text>{user.dept}</Text>
        <TouchableOpacity style = {styles.Chat}>
        <Entypo name="chat" size={24} color="white" />
            <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 17, marginLeft: 4}}>Chat</Text>
        </TouchableOpacity>
    </View>
    </ActionSheet>
  )
}

const styles = StyleSheet.create({
    Main:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        padding: 12
    },
    Chat:{
        display:'flex',
        width: 100,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 163, 255)',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 12,
        marginTop: 12
    },
    Avater:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 200,
        width: 250,
        height: 250,
        marginBottom: 12
    },
});

export default Preview;
