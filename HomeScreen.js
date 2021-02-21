import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Import this for database credentials
import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';



export default function App() {
  const [name, setName] = useState("");
  // const [currentbalance, setCurrentBalance] = usestate("");
  const [score, setScore] = useState("");

  // obligations
  const [personOwed, setPersonOwed] = useState("");
  const [owed, setOwed] = useState("");
  const [dateOwed, setDateOwed] = useState("");
  const [timeOwed, setTimeOwed] = useState("");
  const [interest, setInterest] = useState("");

  // rights
  const [_personOwed, set_PersonOwed] = useState("");
  const [_owed, set_Owed] = useState("");
  const [_dateOwed, set_DateOwed] = useState("");
  const [_timeOwed, set_TimeOwed] = useState("");
  const [_interest, set_Interest] = useState("");

  const firestore = firebase.firestore(); 
  useEffect(() => {
      async function fetchUser() {
          const ref = firestore.collection("users").doc("DonaldChung");
          const doc = await ref.get();
          const data = doc.data();

          setName(data.Name);
          // setCurrentBalance(data./*Balance*/);
          setScore(data.score); 

          // obligations
          setPersonOwed(Object.keys(data.obligations));
          setOwed(data.obligations.BryantLiang[0]);
          setDateOwed(data.obligations.BryantLiang[1].toDate().toDateString());
          setTimeOwed(data.obligations.BryantLiang[1].toDate().toLocaleTimeString('UTC'));
          setInterest(data.obligations.BryantLiang[2]);

          // rights
          set_PersonOwed(Object.keys(data.rights));
          set_Owed(data.rights.JoeyLi[0]);
          set_DateOwed(data.rights.JoeyLi[1].toDate().toDateString());
          set_TimeOwed(data.rights.JoeyLi[1].toDate().toLocaleTimeString('UTC'));
          set_Interest(data.rights.JoeyLi[2]);
      }

      fetchUser();
  });


    return (
  <View style={styles.container}>
    <Text>Welcome back, {name}</Text>
    <Text> score: {score} </Text>
    <Text> ------- </Text>
    <Text> person owed: {personOwed} </Text>
    <Text> dollars owed: {owed} </Text>
    <Text> date owed: {dateOwed} {timeOwed} </Text>
    <Text> interest: {interest} </Text>
    <Text> ------- </Text>
    <Text> person owed: {_personOwed} </Text>
    <Text> dollars owed: {_owed} </Text>
    <Text> date owed: {_dateOwed} {_timeOwed} </Text>
    <Text> interest: {_interest} </Text>
    
    <StatusBar style="auto" />
    <Button title="Profile" onPress={() => props.navigation.navigate("Profile")}/>
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