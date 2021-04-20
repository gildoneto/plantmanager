import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import wateringImg from '../../assets/watering.png'
import colors from '../styles/colors';
import { Button } from '../components/Button';

export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {

    }
    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Manage {'\n'}
                your plants {'\n'}
                on a easy way
            </Text>

            <Image source={wateringImg} style={styles.image} />

            <Text style={styles.subtitle}>
                Don't forget to water your plants.
                We will always remind you when you need.
            </Text>

            <Button title="Next" />
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        width: 292,
        height: 284
    }

});