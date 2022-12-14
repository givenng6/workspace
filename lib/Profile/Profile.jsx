import React from 'react';
import { useContext } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../assets/ws3.png';
import {UserContext} from '../UserContext';

const Profile = () => {
    const {user} = useContext(UserContext);
    return (
        <View style = {styles.Main}>
        <View style = {styles.Avater}>
            <Image source={logo} style = {{width: 230, height: 100}}/>
        </View>
        <Text style = {{fontSize: 22, fontWeight: '600'}}>{user.username}</Text>
        <Text>{user.emp}</Text>
        <Text style = {{color: 'rgb(0, 163, 255)', fontWeight: '600', marginTop: 5}}>Email</Text>
        <Text>{user.email}</Text>
        <Text style = {{color: 'rgb(0, 163, 255)', fontWeight: '600',  marginTop: 5}}>Department</Text>
        <Text>{user.dept}</Text>
        
    </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display:'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        padding: 12,
        backgroundColor: 'white'
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

export default Profile;
