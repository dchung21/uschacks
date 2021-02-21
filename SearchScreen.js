import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';


<<<<<<< HEAD
class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search});
    };

    render() {
        const { search } = this.state;

        return(
            <SearchBar round
            placeholder="Name or @username"
            onChanceText={this.updateSearch}
            value={search}
            
            />      

        )
=======
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
        placeholder="Type Here..."
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
        paddingTop: 25,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
>>>>>>> 5ec4e4ca4c91d44ef5096917b93055127d0ff47b
    }
});

