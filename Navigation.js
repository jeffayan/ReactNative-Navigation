
import React, {Component} from 'react'
import {
    View 
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

import {Home, Dashboard} from './Pages'

const App = StackNavigator({
    Home : {
        screen : Home
    },
    Dashboard : {
        screen : Dashboard  
    }
},{
    initialRouteName : "Home",
    headerMode : 'false',
})

export default App