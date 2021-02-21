import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';

// Import this for database credentials
import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

import ObligationInfo from './ObligationInfo.js';
import RightsInfo from './RightsInfo.js';


export default function App(props) {

  const [homeInfo, setHomeInfo] = useState({});
  const windowWidth = Dimensions.get('window').width;


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
    {/* <View style={styles.mainUser}>
    <img src = "data:image/png;base64,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"
                width = "50" height = "50" alt = "Profile image placeholder"/>
    <Text> Welcome back, <strong>{homeInfo.Name}</strong>!</Text>
    <Text> Score: {homeInfo.score} </Text>
    </View> */}

        <View style={{width: windowWidth - 64}} >
                    <Text style={styles.welcome}> Welcome back, <strong>{homeInfo.Name}</strong>!</Text>
                    <Text style={styles.score}> Score: {homeInfo.score}</Text>
                    <br /> <br />  <br /> <br />
            </View>

    {content}

    <StatusBar style="auto" />
  </View> 
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'top',
  paddingLeft: 5,
  justifyContent: 'top',
},
// mainUser: {
//   backgroundColor: '#75cfb8',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
welcome: {
  textAlign: 'left',
  fontSize: 30,
},
score: {
  textAlign: 'left',
  fontSize: 25,
},
});


