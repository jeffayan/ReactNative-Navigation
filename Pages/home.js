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
    title: 'Welcome',
    tabBarLabel : 'Home', // Label for Tab Bar 
  };
  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Dashboard')
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    overflow: 'visible',
  },
});
