import React, {Component} from 'react';
import { View} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Home, Dashboard} from './Pages';
export default TabNavigator({
  
   Home : {screen : Home},
   Dashboard : {screen : Dashboard},
},{
    initialRouteName : 'Home',
});