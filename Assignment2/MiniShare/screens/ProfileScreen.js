import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import globalStyles from '../constants';
import { useNavigation, useIsFocused } from '@react-navigation/native';

function ProfileScreen() {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('user');
                print(jsonValue)
                if (jsonValue !== null) {
                    setUser(JSON.parse(jsonValue));
                    print(jsonValue)
                } else {
                    //
                }
            } catch (error) {
                // Handle error retrieving data
            }
        };
        fetchData();
    }, [isFocused]);

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ padding: 16, flex: 1 }}>
                <Text style={{ paddingBottom: 30, fontWeight: 'bold', fontSize: 24 }}>Account Settings </Text>
                {user ?
                    <View>
                        <View style={styles.textList}>
                            <Text style={styles.text}>
                                Name: {user ? user.name : 'Loading...'}
                            </Text >
                        </View>
                        <View style={styles.textList}>
                            <Text style={styles.text}> Email: {user ? user.email : 'Loading...'} </Text>
                        </View>
                        <View style={styles.textList}>
                            <Text style={styles.text} > Bio: {user ? user.bio : 'Loading...'} </Text>
                        </View>
                    </View> :
                    <View style={{ justifyContent: "center", height: '100%', alignSelf: 'center' }}>
                        <Text style={styles.text}> You current do not have your profile set up. </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CreateProfileScreen')}
                            style={[globalStyles.button, { marginTop: 10 }]}
                        >
                            <Text style={{ color: 'white' }} >Create your profile</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textList: {
        fontSize: 16,
        padding: 8,
        backgroundColor: '#fefefe',
        marginTop: 8,
        borderRadius: 8,
    },
    text: {
        // fontWeight: 'bold',
        fontSize: '16',
    }
})

export default ProfileScreen;