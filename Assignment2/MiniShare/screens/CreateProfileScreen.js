import React from 'react'
import { SafeAreaView, Text, StyleSheet, TextInput, Button, View, TouchableOpacity } from 'react-native'
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../constants';
import { useNavigation } from "@react-navigation/native";


function CreateProfileScreen() {
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        allowNotifications: false
    })

    const navigation = useNavigation();


    const toggleSwitch = () => {
        setUser((prevUser) => ({
            ...prevUser,
            allowNotifications: !prevUser.allowNotifications
        }));

    };

    const handleChange = (field, value) => {
        setUser((prevUser) => ({
            ...prevUser,
            [field]: value
        }))
    }



    const handleSubmit = async () => {
        try {
            let saveUser = await AsyncStorage.setItem(
                'user',
                JSON.stringify(user)
            ).then(() => navigation.goBack())
            console.log(saveUser)
        } catch (error) {
            // Error saving data
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.headerText}>Create your profile </Text>

                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleChange('name', text)}
                        value={user.name ?? ""}
                        placeholder='Enter your name'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Enter your email'
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    <TextInput
                        placeholder='Bio'
                        multiline={true}
                        numberOfLines={4}
                        style={{ ...styles.input, maxHeight: '50%' }}
                        onChangeText={(text) => handleChange('bio', text)}
                    />
                    <View style={styles.notificationRow}>
                        <Text>Allow Push Notifications </Text>
                        <Switch value={user.allowNotifications}
                            onValueChange={toggleSwitch}
                            color={"black"}
                        />
                    </View>

                    <TouchableOpacity
                        style={globalStyles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.btnText}> Save </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    notificationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16
    },
    input: {
        width: '100%',
        padding: 16,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
    },
    headerText: {
        fontSize: 24,
        paddingBottom: 30,
    },

    btnText: {
        fontSize: 16,
        color: 'white',
        // textAlign : 'center',
        alignSelf: 'center'
    }



})

export default CreateProfileScreen