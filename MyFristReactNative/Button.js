import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'


function Button({ title, onPress }) {
    return (
        <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.6}
            onPress={onPress}
        >
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    btn: {
        margin: 10,
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: '100px',
        height: '60px',
    },
    text: {
        color: 'white'
    }
}


)
export default Button