import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import SearchTemplate from './SearchTemplate.js';

import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function SearchScreen(props){
    const [text, setText] = useState(""); 
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchRes, setSearchRes] = useState([]);
    const firestore = firebase.firestore();

    useEffect(() => {
        async function getUsers() {
            const ref = firestore.collection("listUsers").doc("users");
            const doc = await ref.get();
            const obj = doc.data();
            setData(Object.keys(obj));
        }

        getUsers();
    });

    const updateSearch = (search) => {
        if (search) {
            const startsWith = data.filter((name) => name.toLowerCase().startsWith(search.toLowerCase()));    
            let res = [];
            for (let i = 0; i < startsWith.length; i++) {
                res.push(<SearchTemplate user = {startsWith[i]} />);
            }

            if (res.length == 0)
                res.push(<Text> No users found :( </Text>);
            setSearchRes(res);
            setFilteredData(startsWith);
        }
       setText(search);
    };

    return (
        <View style = {styles.container}>
        <View style = {styles.search}>
      <SearchBar
        round = {true}
          lightTheme = {true}
          showCancel
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={text}
          containerStyle={{
            backgroundColor: '#fff',
            justifyContent: 'space-around',
            borderTopWidth:0,
            borderBottomWidth:0,
            paddingBottom: 20,
}}
      />
        </View>
            <View styles = {styles.results}>
                {searchRes}
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    search: {
        paddingTop: 25,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    results: {
        paddingLeft: 20,
    }
});

