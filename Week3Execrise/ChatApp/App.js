import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import MessageList from './components/MessageList';

export default class Flex extends Component {
  _onButtonPressed() {
    Alert.alert("Pressed..")
  }
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.view]}>
          <MessageList></MessageList>
        </View>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',

  },
  view: {
    padding: 10,
  }

});
