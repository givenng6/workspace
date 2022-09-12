import React from 'react';
import { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import ActionSheet from "react-native-actions-sheet";
import { Dropdown } from 'react-native-element-dropdown';

function CraetePost({id}) {

    const [dept, setDept] = useState(null);
    const [duration, setDuration] = useState(null);

    const durationList = [
        {label: '1h', value: 1},
        {label: '2h', value: 2},
        {label: '5h', value: 3},
        {label: '10h', value: 4},
        {label: '12h', value: 5},
        {label: '16h', value: 6},
        {label: '20h', value: 7},
        {label: '24h', value: 8},
    ];

    const deptList = [
        {label: 'Marketing', value: 1},
        {label: 'Business Development', value: 2},
        {label: 'Product Management', value: 3},
        {label: 'Accounting', value: 4},
        {label: 'Training', value: 5},
        {label: 'Sales', value: 6},
        {label: 'Support', value: 7},
        {label: 'Research and Development', value: 8},
        {label: 'Engineering', value: 9},
        {label: 'Human Resource', value: 10},
        {label: 'Legal', value: 11},
        {label: 'Services', value: 12},
    ];

  return (
    <ActionSheet id = "postSheet101" bounceOnOpen = {true} headerAlwaysVisible = {true}>
        <View style = {styles.Main}>
            <Text>Announcement</Text>
            <Dropdown
                data={deptList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Department"
                searchPlaceholder="Search Department"
                value={dept}
                onChange={item => {
                setDept(item.value);
                }}
            />
            <Dropdown
                data={durationList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Duration"
                searchPlaceholder="Search Duration"
                value={duration}
                onChange={item => {
                setDuration(item.value);
                }}
            />
            <TextInput style = {styles.Input} multiline placeholder='Compose Text'/>
            <TouchableOpacity style = {styles.Post}>
                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 18}}>Post</Text>
            </TouchableOpacity>
        </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
    Main:{
        display:'flex',
        flexDirection: 'column',
        //alignItems:'center',
        padding: 12
    },
    Input:{
        borderWidth: 1,
        padding: 12,
        borderRadius: 12,
        minHeight: 200,
        maxHeight: 300,
        marginVertical: 15,
        borderColor: 'gray'

    },
    Post:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 163, 255)',
        borderRadius: 15,
        padding: 7,
        marginHorizontal: 20,
        marginVertical: 12
    }
});

export default CraetePost