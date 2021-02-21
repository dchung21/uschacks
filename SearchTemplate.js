import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
export default function SearchTemplate(props) {
    
    return (
        <View styles = {styles.container}>
            <View>
                <Text style = {styles.user}>{props.name}</Text>
                <Text style = {styles.user}>{props.user}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        paddingLeft: 20,
        paddingBottom: 5,
    },
    user: {
        fontSize: 14,
        paddingLeft: 20,
        paddingBottom: 10,
        color: "#919191"
    }
});
