import React from 'react';
import {Text, View} from 'react-native';

export default function RightsInfo(props) {
    
    return (
        <View>
            <Text> User: {props._PersonOwed} </Text>
            <Text> Amount Owed: {props._owed} </Text>
            <Text> Due On: {props._dateOwed} {props._timeOwed} </Text>
            <Text> Interest Amount: {props._interest} </Text>
        </View>
    )
}