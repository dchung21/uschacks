import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';


export default function App(props){

   const [user, setUser] = useState(""); 

  const updateSearch = (search) => {
      setState(search);
      console.log(search);
  };


    return (
        <View style = {styles.container}>
        <View style = {styles.search}>
      <SearchBar
        round = {true}
          lightTheme = {true}
          showCancel
        placeholder="Name or @username"
        onChangeText={updateSearch}
        value={user}
          containerStyle={{
            backgroundColor: '#fff',
            justifyContent: 'space-around',
            borderTopWidth:0,
            borderBottomWidth:0,
}}
      />
        </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    search: {
        paddingTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

