import * as React from "react";
import { Card } from "react-native-elements";
import { Text, View, Image, StyleSheet} from "react-native";


export default function CardComponent(props) {
    let color;

    if (props.value <= 30)
        color = "#ffb4b4";
    else if (props.value <= 60)
        color = "#f5da94";
    else if (props.valuie <= 80)
        color = "#9fe1a2";
    else
        color = "#12aa48";

  return (
      <Card containerStyle={{width: 300, borderRadius: 20, backgroundColor: color}} wrapperStyle={{}} onClick = {props.onClick}  >
      <Card.Title style = {styles.titleText} >{props.title}</Card.Title>
      
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Text style = {styles.contentText}>{props.value}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 15,
        fontWeight: 'light',
        paddingTop: 2
        
    },
    contentText: {
        fontSize: 70,
        fontWeight: 'bold',
        paddingTop: 0,
        paddingBottom: 25
    },
});
