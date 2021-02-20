import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
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
            <Text>{name}</Text>
            <Text>Score: {score}</Text>
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
});


