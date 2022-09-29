import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/ws3.png';

export default function Auth({navigation}) {
  return (
    <View style = {styles.Main}>

        <Image source = {logo} style = {styles.Logo}/>
       
        <View style = {styles.Body}>
        <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 30, marginLeft: 9, marginBottom: 20}}>Sign In</Text>
        <TextInput color = 'white' placeholderTextColor= 'white' placeholder='Username' style = {styles.Input}/>
        <TextInput color = 'white' placeholderTextColor= 'white' placeholder='Email' style = {styles.Input}/>
        <TextInput color = 'white' placeholderTextColor= 'white' secureTextEntry = {true} placeholder='Password' style = {styles.Input}/>

        <TouchableOpacity style = {styles.Button} onPress = {()=> navigation.navigate('Home')}>
            <Text style = {styles.ButtonText}>Sign in</Text>
        </TouchableOpacity>

        <View style = {{borderWidth: 0.5, marginHorizontal: 10, borderColor: 'gray'}}></View>
        <Text style = {{alignSelf: 'center', fontSize: 12, marginTop: 2, color: 'white'}}>Already have an account?</Text>
        <TouchableOpacity style = {styles.Button}>
            <Text style = {styles.ButtonText}>Log in</Text>
        </TouchableOpacity>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    Main:{
        display: 'flex',
        flex: 1,
        paddingTop: 100,
        backgroundColor: 'black',
        //justifyContent: 'center',
    },
    Body:{
        display: 'flex',
        flex: 1,
        
        marginTop: 40
    },
    Input:{
        borderWidth: 1.5,
        borderRadius: 5,
        margin: 7,
        padding: 10,
        borderColor: 'white'
    },
    Button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '96%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        margin: 12,
        padding: 12

    },
    ButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    Logo:{
        width: 260,
        height: 112,
        alignSelf: 'center'
    }

});
