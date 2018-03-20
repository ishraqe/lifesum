import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/demo';


const StackNavigators = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    }
}) ; 


export default StackNavigators;
