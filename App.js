import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './app/components/ListScreen'

export default class App extends React.Component {
  render() {
    return (
      <ListScreen />
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// AppIcon
// https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=text&foreground.text.text=D&foreground.text.font=Aguafina%20Script&foreground.space.trim=1&foreground.space.pad=0.2&foreColor=rgb(255%2C%20255%2C%20255)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=square&effects=none&name=icon
