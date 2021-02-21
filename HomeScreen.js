import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Import this for database credentials
import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

import ObligationInfo from './ObligationInfo.js';
import RightsInfo from './RightsInfo.js';


export default function App(props) {

  const [homeInfo, setHomeInfo] = useState({});


  const firestore = firebase.firestore(); 
  useEffect(() => {
      async function fetchUser() {
          const ref = firestore.collection("users").doc("DonaldChung");
          const doc = await ref.get();
          const data = doc.data();
          setHomeInfo(data);
      }

      fetchUser();
  }, [])

  let content = [];

  // obligations
  for (let key in homeInfo.obligations) {
      content.push(<ObligationInfo 
                    PersonOwed={homeInfo.obligations[key][3]}
                    owed={homeInfo.obligations[key][0]}
                    dateOwed={homeInfo.obligations[key][1].toDate().toDateString()}
                    timeOwed={homeInfo.obligations[key][1].toDate().toLocaleTimeString('UTC')}
                    interest={homeInfo.obligations[key][2]}
                    />)
  }

  // rights
  for (let key in homeInfo.rights) {
    content.push(<RightsInfo 
                  _PersonOwed={homeInfo.rights[key][3]}
                  _owed={homeInfo.rights[key][0]}
                  _dateOwed={homeInfo.rights[key][1].toDate().toDateString()}
                  _timeOwed={homeInfo.rights[key][1].toDate().toLocaleTimeString('UTC')}
                  _interest={homeInfo.rights[key][2]}
                  />)
}

    
  
    return (

  
    
    

  <View style={styles.container}>
    <Text> Welcome back, {homeInfo.Name}</Text>
    <Text> Score: {homeInfo.score} </Text>
    {content}
    
    <StatusBar style="auto" />
<<<<<<< HEAD
    <Button title="Profile" onPress={() => props.navigation.navigate("Profile")}/> 
  </View>
=======
    <Button title="Profile" onPress={() => props.navigation.navigate("Profile")}/>
  </View> 
>>>>>>> 962cbf9a0174ea8104cea7f253501bc28af53dc7
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
