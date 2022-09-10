import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../assets/ws3.png';

const Post = ({user, data}) => {
    return (
       <View style = {styles.Main}>
        <TouchableOpacity style = {styles.User}>
            <View style = {styles.Avater}>
            <Image source={logo} style = {{width: 44, height: 19}}/>
            </View>
            <View>
            <Text>{user.username}</Text>
            <Text style = {{color: 'gray', fontSize: 11}}>{data.to}</Text>
            </View>
        </TouchableOpacity>

        <Text style = {{marginBottom: 4}}>{data.msg}</Text>
       
        <Text style = {styles.Time}>12m remaining</Text>
        <Text style = {styles.Time}>{data.time}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        margin: 8
    },
    Avater:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 100,
        width: 50,
        height: 50,
        marginRight: 5,
        marginBottom: 5
    },
    User:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Time:{
        color: 'gray',
        fontSize: 12,
        //marginTop: 2
    }
});

export default Post;
