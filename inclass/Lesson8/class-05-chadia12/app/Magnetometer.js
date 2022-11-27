import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';

export default function Compass() {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    const _subscribe = () => {
        let listener = Magnetometer.addListener(result => {
            setData(result);
        })
        Magnetometer.setUpdateInterval(500);//500 milliseconds
        setSubscription(listener);
    };

    const _unsubscribe = () => {
        if(subscription) subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    const { x, y, z } = data;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Magnetometer:</Text>
            <Text style={styles.text}>
                x: {round(x)} y: {round(y)} z: {round(z)}
            </Text>
            <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
                <Text>{subscription ? 'On' : 'Off'}</Text>
            </TouchableOpacity>
        </View>
    );
}

function round(n) {
    if (!n) {
        return 0;
    }
    return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    text: {
        textAlign: 'center',
    },
    button: {
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        width: 200,
    },
});