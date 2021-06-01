import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Instagram from './screens/instagram.js';
import Facebook from './screens/facebook.js';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram: {screen: Instagram},
  Facebook: {screen: Facebook}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});