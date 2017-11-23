/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage, Button
} from 'react-native';

export default class App extends Component {
  
  static navigationOptions = {
    title: 'DashBoard',
    tabBarLabel : 'Dashboard', // Label for Tab Bar 
  };
 
  render() {
   
    const {goBack} = this.props.navigation;

    console.log(goBack);
    return (
      <View style={styles.container}>

           <Button title = 'Go Back'  onPress = {()=>goBack()}/>      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    overflow : 'visible',
  },
});
