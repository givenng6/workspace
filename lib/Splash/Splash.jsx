import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../assets/ws2.png';

const Splash = () => {
    return(
        <View style = {styles.Main}>
            <Image source={logo} style = {styles.Icon}/>
            <View style = {styles.Cred}>
            <Text style = {{fontWeight: '600', color: 'rgb(0, 163, 255)'}}>Developed by</Text>
            <Text style = {{fontWeight: '600', color: 'rgb(0, 163, 255)'}}>Given NG Mathebula</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon:{
        width: 500,
        height: 500
    },
    Cred:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 45
    }
});

export default Splash;
