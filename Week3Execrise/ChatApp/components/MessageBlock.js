import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

function MessageBlock({ text }) {
    return (
        <View style={styles.messageBlock}>
            <Text style={styles.text}> {text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageBlock: {
        width: 90,
        backgroundColor: "black",
        padding: 10,
        borderRadius: 20,
    },
    text: {
        color: 'white',
    }
});

export default MessageBlock;