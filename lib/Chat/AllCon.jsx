import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Data from '../Data.json';

const Contact = ({user})=>{
    
    const username = user.firstName + " " + user.lastName;
    return(
        <View style = {styles.ContactCard}>
            <View style = {styles.Avater}>
                <Text style = {{color: 'white', fontWeight: 'bold'}}>{user.firstName[0] + user.lastName[0]}</Text>
            </View>
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
    return (
        <View>
            <ScrollView>
            {list.map((item, index) =>
                <Contact key={index} user = {item} />
            )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
