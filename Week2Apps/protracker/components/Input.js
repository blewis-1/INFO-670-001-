import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

const Input = ({ textValue, setTextValue, onPress }) => {
    return (
        <View style={styles.inputSection}>
            <TextInput
                style={styles.input}
                placeholder='Track your wonders 💭 !'
                onChangeText={text => setTextValue(text)}
                value={textValue}
            />

            <TouchableOpacity
                style={textValue ? styles.button : styles.buttonDisable}
                onPress={onPress}
                disabled={!textValue}
            >
                <Text style={styles.buttonLabel}> Add task + </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputSection: {
        flexDirection: 'column',
        padding: 10,

    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
        fontFamily: 'Aeonik-Medium',
        borderRadius: 8,
    },
    button: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'black',

    },
    buttonLabel: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Aeonik-Bold'
    },
    buttonDisable: {
        opacity: 0.9,
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 8,
    }
})
export default Input;
