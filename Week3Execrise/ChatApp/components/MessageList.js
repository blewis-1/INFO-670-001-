import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import MessageBlock from './MessageBlock'

function MessageList() {
    const [text, setText] = useState("")
    const [texts, setTexts] = useState([])

    return (
        <View>
            {texts.map((text, index) => (<MessageBlock text={text} key={index}> </MessageBlock>))}
            <View style={styles.inputSection}>
                <TextInput
                    placeholder='Enter your message here'
                    defaultValue={text}
                    onChangeText={newText => setText(newText)}
                />
                <Button
                    onPress={() => setTexts([...texts, text])}
                    title='Add text'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputSection: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export default MessageList