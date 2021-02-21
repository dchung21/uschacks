import * as React from "react";
import { Card } from "react-native-elements";
import { Text, View, Image, StyleSheet} from "react-native";

export default function CardComponent(props) {
  return (
      <Card containerStyle={{width: 300}} wrapperStyle={{}} onClick = {props.onClick}>
      <Card.Title style = {styles.titleText} >{props.title}</Card.Title>
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
  );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30
    },
    contentText: {
        fontSize: 25
    },
});
