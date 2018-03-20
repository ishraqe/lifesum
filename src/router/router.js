import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';


const StackNavigators = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
});


export default StackNavigators;
