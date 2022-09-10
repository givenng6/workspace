import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SheetManager} from "react-native-actions-sheet";
import logo from '../assets/ws3.png';


const RSVP = ()=>{
    return(
        <View style = {styles.RSVP}>
            <TouchableOpacity style = {[styles.Clicks, {backgroundColor: 'rgb(0, 163, 255)'}]}>
                <Text style = {{fontWeight: 'bold', color: 'white'}}>Attending</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.Clicks, {backgroundColor: 'rgb(0, 163, 255)'}]}>
                <Text  style = {{fontWeight: 'bold' , color: 'white'}}>Not Sure</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.Clicks, {backgroundColor: 'rgb(0, 163, 255)'}]}>
                <Text  style = {{fontWeight: 'bold', color: 'white'}}>Can't Attend</Text>
            </TouchableOpacity>
        </View>
    );
}

const Post = ({user, data}) => {
    const onPreview = ()=>{
        SheetManager.show("1");
    }

    return (
       <View style = {styles.Main}>
        <TouchableOpacity style = {styles.User} onPress = {onPreview}>
            <View style = {styles.Avater}>
            <Image source={logo} style = {{width: 44, height: 19}}/>
            </View>
            <View>
            <Text>{user.username}</Text>
            <Text style = {{color: 'gray', fontSize: 11}}>{data.to}</Text>
            </View>
        </TouchableOpacity>

        <Text style = {{marginBottom: 4}}>{data.msg}</Text>
        {data.type === "event" && 
        <View>
             <Text style = {styles.Title}>Date: <Text style = {{color: 'rgb(0, 163, 255)'}}>{data.event_date}</Text></Text>
            <Text style = {styles.Title}>Time: <Text style = {{color: 'rgb(0, 163, 255)'}}>{data.event_time}</Text></Text>
            <Text style = {styles.Title}>Venue: <Text style = {{color: 'rgb(0, 163, 255)'}}>{data.event_venue}</Text></Text>
        </View>
        }
        {data.type === "event" && <RSVP />}
       
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
    },
    RSVP:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 12
    },
    Clicks:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 2
    },
    Title:{
        fontWeight: 'bold'
    }
});

export default Post;
