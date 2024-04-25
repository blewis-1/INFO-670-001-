import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import AppBar from './components/AppBar';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import MessageList from './components/MessageList';
import { PaperProvider } from 'react-native-paper';

export default class Flex extends Component {
  _onButtonPressed() {
    Alert.alert("Pressed..")
  }
  render() {
    return (
      <PaperProvider>
        <View style={[styles.container]}>
          <AppBar></AppBar>
          <View style={[styles.view]}>
            <MessageList></MessageList>
          </View>
        </View >
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  view: {
    paddingBottom: 60,
    
  }


});
