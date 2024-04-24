import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Platform, Alert,
} from 'react-native';

import Item from './components/Item';
import Input from './components/Input';
import AppBar from "./components/AppBar";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import EmptyList from './components/EmptyList';

SplashScreen.preventAutoHideAsync();

function App() {
    const [textValue, setTextValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const [fontsLoaded, fontError] = useFonts({
        'Aeonik-Bold': require('./assets/fonts/Aeonik-Bold.otf'),
        'Aeonik-Medium': require('./assets/fonts/Aeonik-Medium.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }



    const handlePress = () => {
        if (textValue !== '') {
            setTasks([...tasks, textValue]);
        } else {
            Alert.alert("Please add a task.");
        }

        setTextValue('')

    }

    const handleDelete = (taskIndex) => {
        setTasks(tasks.filter((task, index) => index !== taskIndex))
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            onLayout={onLayoutRootView}
        >
            <View style={styles.container}>
                <AppBar></AppBar>
                {tasks.length > 0 ?
                    <ScrollView>
                        {
                            tasks.map((task, index) => (
                                <Item name={task} onPressDelete={() => handleDelete(index)} key={index}></Item>)
                            )
                        }
                    </ScrollView>
                    : <EmptyList></EmptyList>
                }

                <Input textValue={textValue} setTextValue={setTextValue} onPress={handlePress}></Input>
            </View>
            <StatusBar style="auto" />
        </KeyboardAvoidingView>
        // </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default App;