import React from 'react';
import {Text, View} from 'react-native';

export default function ObligationInfo(props) {

    return (
        <View>
            <Text> User: {props.PersonOwed} </Text>
            <Text> Amount Owed: {props.owed} </Text>
            <Text> Due On: {props.dateOwed} {props.timeOwed} </Text>
            <Text> Interest Amount: {props.interest} </Text>
        </View>
    )
}