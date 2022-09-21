import React from 'react';
import { useState } from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import {SheetManager} from "react-native-actions-sheet";
import Data from '../Data.json';
import Preview from '../Profile/Preview';

const Contact = ({user, index, setId, setUserData})=>{
    const username = user.firstName + " " + user.lastName;
    const onPreview = ()=>{
        // const id = `id ${index}`;
        // setId(id);
        // setUserData({username: username, email: user.email, dept: user.department});
        //SheetManager.show(id);
    }

    return(
        <View style = {styles.ContactCard}>
            <TouchableOpacity style = {styles.Avater} onPress = {onPreview}>
                <Text style = {{color: 'white', fontWeight: 'bold'}}>{user.firstName[0] + user.lastName[0]}</Text>
            </TouchableOpacity>
            <View style = {{paddingLeft: 9}}>
            <Text style = {{fontWeight: 'bold'}}>{username}</Text>
            <Text style = {{color: 'gray'}}>{user.email}</Text>
            </View>
    
        </View>
    );
}

const AllCon = () => {
    let list = [];
    list = Data;
    const [id, setId] = useState("");
    const [userData, setUserData] = useState({});

    return (
        <View style = {styles.Main}>
            <ScrollView>
            {list.map((item, index) =>
                <Contact key={index} index = {index} user = {item} setId = {setId} setUserData = {setUserData}/>
            )}
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
    ContactCard:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 0.5,
        borderColor: 'rgba(153, 153, 153, 0.5)'
    },
    Avater:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 35,
        height: 35,
        backgroundColor: 'rgb(0, 163, 255)'
    }
});

export default AllCon;
