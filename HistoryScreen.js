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
    let content;
    if (size > 0) {
        console.log(history);
        content = 
            <ul>
                {history.map(data => 
                    <li>
                        <PaymentTemplate type={data.type} />
                    </li>)}
            </ul>
    }

    return (
        <View>
            <Text>History</Text>
        </View>
    );
}
