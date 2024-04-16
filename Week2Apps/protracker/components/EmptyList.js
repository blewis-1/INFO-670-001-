import { Text, Image, View, StyleSheet } from "react-native";

function EmptyList() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/peep.png')} style={styles.image} />
            <Text style={styles.text}> Add new task</Text>
        </View>

    );
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'Aeonik-Bold',
        fontSize: 30
    }

});

export default EmptyList;