import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';


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
    }
}

export default Search;



