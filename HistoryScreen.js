import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebaseApp from './firebase.js';
import firebase from 'firebase/app';
import PaymentTemplate from './PaymentTemplate.js';
import 'firebase/firestore';

export default function HistoryPage(props) {
    const [history, setHistory] = useState({});        

    const firestore = firebase.firestore();
    useEffect(() => {
        async function fetchHistory() {
            const ref = firestore.collection("users").doc("DonaldChung");
            const doc = await ref.get();
            const data = doc.data();
            setHistory(data.history);
        }

        fetchHistory();
    }, [])

    const size = Object.keys(history).length;
    let content = [];
    if (size > 0) {
        for (let key in history) {
            content.push(<PaymentTemplate 
                        type={history[key]["Type"]}
                        name={history[key]["Name"]}
                        paid={history[key]["Paid"]}
                        time={history[key]["Finished"]}
                        />);
        }
    }

    return (
        <View style = {styles.container}>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
    }
});
