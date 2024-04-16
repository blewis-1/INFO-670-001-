import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';


function Item({ name, onPressDelete }) {
    return (
        <View style={styles.box}>
            <TouchableOpacity>
                <View style={styles.completeBox}>
                    <FontAwesome5 name="check" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <Text style={styles.text}>{name}</Text>
            <View style={styles.buttonBg}>
                <TouchableOpacity onPress={onPressDelete}>
                    <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginTop: 10,
        height: 50,
        paddingEnd: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        opacity: 0.9,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
    },
    completeBox: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    text: {
        fontFamily: 'Aeonik-Medium',
        width: '80%',
    },

})

export default Item