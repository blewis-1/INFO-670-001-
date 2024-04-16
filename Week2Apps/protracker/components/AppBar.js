import {Text, View, StyleSheet} from "react-native";

function AppBar() {
    return (<View>
        <Text style={styles.heading}>Today's Task</Text>
        <Text style={styles.subText}>Kick start you day.</Text>
    </View>);
}


const styles = StyleSheet.create({
    heading: {
        paddingTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Aeonik-Bold'
    },
    subText: {
        marginTop: 8,
        fontSize: 14,
        marginBottom: 20,

    },
});
export default AppBar;