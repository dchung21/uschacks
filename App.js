import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';


export default function App() {
    const [name, setName] = useState("");

    const firestore = firebase.firestore(); 
    useEffect(() => {
        async function fetchUser() {
            const ref = firestore.collection("users").doc("DonaldChung");
            const doc = await ref.get();
            const data = doc.data();
            setName(data.Name);
        }

        fetchUser();
    });
      return (
    <View style={styles.container}>
      <Text>{name}</Text>
        <Text>palceholder text</Text>
      <StatusBar style="auto" />
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
