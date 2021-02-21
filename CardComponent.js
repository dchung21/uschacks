import * as React from "react";
import { Card } from "react-native-elements";
import { Text, View, Image, StyleSheet} from "react-native";


export default function CardComponent(props) {
  return (
      <Card containerStyle={{width: 300, borderRadius: 20, backgroundColor: '#ffb4b4'}} wrapperStyle={{}} onClick = {props.onClick}  >
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
