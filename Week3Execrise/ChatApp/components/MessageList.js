import React, { useState } from 'react'
import {
    ScrollView, StyleSheet, Touchable,
    TouchableOpacity,
    View,
    Text
} from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import MessageBlock from './MessageBlock'


function MessageList() {
    const [text, setText] = useState("")
    const [texts, setTexts] = useState([])

    handelSend = () => {
        setTexts([...texts, text])
        setText('')
    }

    return (
        <View>
            <ScrollView style={{
                maxHeight: "85%",

            }} contentContainerStyle={{ justifyContent: 'flex-end' }}>
                {texts.map((text, index) => (
                    <MessageBlock text={text} key={index}> </MessageBlock>
                ))}
            </ScrollView>
            <View style={styles.inputSection}>
                <TextInput
                    style={{ flex: 1, margin: 10, }}
                    placeholder='Enter your message here'
                    defaultValue={text}
                    onChangeText={newText => setText(newText)}
                />
                <Button
                    icon="send"
                    mode="contained"
                    style={{ marginRight: 10 }}
                    onPress={() => handelSend()}>
                    Send
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputSection: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
})

export default MessageList