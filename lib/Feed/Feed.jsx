import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import {SheetManager} from "react-native-actions-sheet";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/ws3.png';
import Post from './Post';
import Preview from '../Profile/Preview';
import CraetePost from './CraetePost';

const NavBar = ()=>{

    const onAnnounce = ()=>{
        SheetManager.show("postSheet101");
    }
    return(
        <View style = {styles.Nav}>
            <Image source={logo} style = {{width: 52, height: 20}}/>
            <View style = {styles.Actions}>
                <TouchableOpacity style = {styles.Clickables} onPress = {onAnnounce}>
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
    const user = {username: "Given Mathebula", email: "givenng6@gmail.com", dept: 'Mobile Development'};
    const data = {to: 'All Departments', msg: "Announcement!", time: "16:12 12/08/2022"};
    const data2 = {to: 'Information Technology', msg: "Event!", time: "09:22 11/08/2022", type: "event", event_time: '17:00', event_date: '20/08/2022', event_venue: "Google Meet"};

    return(
        <View style = {styles.Main}>
            <NavBar />
            <ScrollView>
            <Post user = {user} data = {data}/>
            <Post user = {user} data = {data2}/>
            </ScrollView>
            <Preview id="1" user = {user}/>
            <CraetePost />
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
        backgroundColor: 'black',
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