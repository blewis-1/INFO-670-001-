import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';

export default function App() {

  const [count, setCount] = useState(0)

  const increaseCounter = () => {
    setCount(count + 1)
  }
  const decreaseCounter = () => {
    if (count > 0) {
      setCount(count - 1)
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}  >{count}</Text>
      <View style={styles.btnRow}>
        <Button title={'Increase 😊 + '} onPress={increaseCounter} />
        <Button title={'Decrease 🙃 - '} onPress={decreaseCounter} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  btnRow: {
    display: 'flex',
    flexDirection:'row'
  }

});
