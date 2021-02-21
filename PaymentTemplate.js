import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PaymentTemplate(props) {
    let titleText;

    if (props.type == "Debt")
        titleText = "You paid " + props.name;
    else
        titleText = props.name + " paid to you";

  return (
      <Card containerStyle={{width: 300}} wrapperStyle={{}} >
      <Card.Title style = {styles.titleText} >{titleText}</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Text style = {styles.contentText}>{props.value}</Text>
      </View>
    </Card>
    )    
}
