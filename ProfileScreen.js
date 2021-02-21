import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableWithoutFeedback} from 'react-native';
import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
import CardComponent from './CardComponent.js';
import 'firebase/firestore';


export default function ProfilePage(props) {
    const [name, setName] = useState("");
    const [score, setScore] = useState(0);

    const firestore = firebase.firestore();
    useEffect(() => {
        async function fetchUser() {
            const ref = firestore.collection("users").doc("DonaldChung");
            const doc = await ref.get();
            const data = doc.data();
            setName(data.Name);
            setScore(data.score);
        }

        fetchUser()
    });
    return (
        <View style = {styles.container}>
            <View style = {styles.title}>
                <Image source={{uri: `https://ui-avatars.com/api/?name=${name}&rounded=true&size=300`}}
       style={{width: 128, height: 128}} />
                <Text style = {styles.name} >{name}</Text>
                <Text>@DonaldChung</Text>
            </View>

                <TouchableWithoutFeedback onPress = {() => props.navigation.navigate("History")}> 
                    <View style = {styles.body} >
                        <CardComponent title="Your Score" value={score}  />
                    </View>
                </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
        flex: 1.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
         fontSize: 30,
         fontWeight: 'bold'
    },
    body: {
        flex: 2
    }
});


