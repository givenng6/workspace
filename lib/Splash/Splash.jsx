import React, { useContext, useEffect } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../assets/ws2.png';
import {UserContext} from '../UserContext';

const Splash = ({navigation}) => {
    const {setUser} = useContext(UserContext);

    useEffect(()=>{
        setUser({username: "Given Mathebula", email: "givenng6@gmail.com", dept: 'Mobile Development', emp: "42-368-0703"});
    }, []);

    setTimeout(()=>{
        navigation.replace("Auth");
    }, 3500);

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
