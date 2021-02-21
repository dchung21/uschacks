import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';

export default function PaymentTemplate(props) {
    let titleText;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    console.log(props)
    if (props.type == "Debt")
        titleText = "You paid " + props.name;
    else
        titleText = props.name + " paid to you";

  return (
        <View style={styles.container}>
            <View style = {{flexDirection: "row"}}>
                <Image source={{uri: `https://ui-avatars.com/api/?name=Donald+Chung&rounded=true&size=150`}} style={{width: 64, height: 64}} />
                <View style={{justifyContent: "space-between", flexDirection: "row", width: windowWidth - 64}} >
                    <Text style={styles.titleText}>{titleText}</Text>
                    <Text style={styles.moneyText}>${props.paid}</Text>
            </View>
            </View>

        <Divider />
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#b1e2de',
        paddingTop: 100,
        paddingBottom: 5
    },
    titleText: {
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: 20,
    },
    contentText: {
        fontSize: 25
    },
    moneyText: {
        fontSize: 18,
        textAlign: 'right',
        paddingRight: 20,
    },
});

